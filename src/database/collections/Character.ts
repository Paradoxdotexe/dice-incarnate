import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  RxCollectionCreator,
  RxDocument,
  RxJsonSchema,
} from "rxdb";
import { CharacterAttributeKey } from "./CharacterClass";

const _characterSchema = {
  title: "Character",
  description: "",
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 36,
    },
    experience: {
      type: "number",
      minimum: 0,
    },
    classStates: {
      type: "array",
      items: {
        type: "object",
        properties: {
          key: {
            type: "string",
          },
          featureKeys: {
            type: "array",
            items: {
              type: "string",
            },
          },
          ascension: {
            type: "number",
            minimum: 1,
            maximum: 5,
          },
        },
        required: ["key", "featureKeys", "ascension"],
      },
    },
  },
  required: ["id", "experience", "classStates"],
} as const;

type Character = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof _characterSchema
>;

export type CharacterClassState = Character["classStates"][number];

const characterSchema: RxJsonSchema<Character> = _characterSchema;

type CharacterMethods = {
  getClassState: (classKey: string) => CharacterClassState | undefined;
  acquireClassTrait: (classKey: string, featureKey: string) => void;
  ascendClass: (classKey: string) => void;
  getAttributeBonus: (attributeKey: CharacterAttributeKey) => number;
  getShards: () => number;
  getSpentShards: () => number;
  getAvailableShards: () => number;
  getShardCost: () => number;
  getCurrentLevelExperience: () => number;
  getAscension: () => number;
  getSpentAscension: () => number;
  getAvailableAscension: () => number;
};

type CharacterDocument = RxDocument<Character, CharacterMethods>;

export const BASE_XP_PER_SHARD = 100;
export const SHARDS_PER_LEVEL = 5;

const _sum_shards = (classStates: CharacterClassState[]) =>
  classStates.reduce(
    (shards, classState) => shards + classState.featureKeys.length,
    0
  );

const _sum_ascension = (classStates: CharacterClassState[]) =>
  classStates.reduce(
    (ascension, classState) => ascension + (classState.ascension - 1),
    0
  );

const _get_shard_cost = (level: number) => 100 * level;

const _get_level_cost = (level: number) =>
  _get_shard_cost(level) * SHARDS_PER_LEVEL;

const characterMethods: CharacterMethods = {
  getClassState: function (this: CharacterDocument, classKey: string) {
    return this.classStates.find((classState) => classState.key === classKey);
  },
  acquireClassTrait: function (
    this: CharacterDocument,
    classKey: string,
    featureKey: string
  ) {
    this.modify((character) => {
      const patchedClassStates = structuredClone(this.classStates);
      let classState = patchedClassStates.find((ccs) => ccs.key == classKey);

      // add new class state if this is the first acquisition
      if (!classState) {
        classState = { key: classKey, featureKeys: [], ascension: 1 };
        patchedClassStates.push(classState);
      }

      classState.featureKeys.push(featureKey);
      return { ...character, classStates: patchedClassStates };
    });
  },
  ascendClass: function (this: CharacterDocument, classKey: string) {
    this.modify((character) => {
      const patchedClassStates = structuredClone(this.classStates);
      const classState = patchedClassStates.find((ccs) => ccs.key == classKey);

      // unexpected
      if (!classState) {
        return character;
      }

      classState.ascension += 1;
      return { ...character, classStates: patchedClassStates };
    });
  },
  getAttributeBonus: function (
    this: CharacterDocument,
    attributeKey: CharacterAttributeKey
  ) {
    const attributeClassStates = this.classStates.filter(
      (classState) => classState.key.slice(0, 3) === attributeKey
    );
    const attributeShards = _sum_shards(attributeClassStates);
    const attributeAscension = _sum_ascension(attributeClassStates);

    // 2 EXPERIENCE = +1 BONUS
    // 1 ASCENSION (5 EXPERIENCE) = +2 BONUS
    return Math.floor(attributeShards / 2 + attributeAscension * 2);
  },
  getShards: function (this: CharacterDocument) {
    let experienceCounter = this.experience;
    let shardCount = SHARDS_PER_LEVEL;
    while (true) {
      const shardCost =
        BASE_XP_PER_SHARD * Math.floor(shardCount / SHARDS_PER_LEVEL);
      if (experienceCounter >= shardCost) {
        experienceCounter -= shardCost;
        shardCount++;
      } else {
        break;
      }
    }
    return shardCount;
  },
  getSpentShards: function (this: CharacterDocument) {
    return _sum_shards(this.classStates);
  },
  getAvailableShards: function (this: CharacterDocument) {
    return this.getShards() - this.getSpentShards();
  },
  getShardCost: function (this: CharacterDocument) {
    return BASE_XP_PER_SHARD * Math.floor(this.getShards() / SHARDS_PER_LEVEL);
  },
  getCurrentLevelExperience: function (this: CharacterDocument) {
    let pastLevelExperience = 0;
    for (let i = 1; i < this.getAscension(); i++) {
      pastLevelExperience += _get_level_cost(i);
    }
    return this.experience - pastLevelExperience;
  },
  getAscension: function (this: CharacterDocument) {
    return Math.floor(this.getShards() / SHARDS_PER_LEVEL);
  },
  getSpentAscension: function (this: CharacterDocument) {
    return _sum_ascension(this.classStates);
  },
  getAvailableAscension: function (this: CharacterDocument) {
    return this.getAscension() - this.getSpentAscension();
  },
};

export type CharacterCollection = RxCollection<Character, CharacterMethods>;

export const CHARACTER_COLLECTION: RxCollectionCreator<Character> = {
  schema: characterSchema,
  methods: characterMethods,
};
