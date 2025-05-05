import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  RxCollectionCreator,
  RxDocument,
  RxJsonSchema,
} from 'rxdb';
import { CharacterAttributeKey } from './CharacterClass';
import { flatten, sum } from 'lodash-es';

const _characterSchema = {
  title: 'Character',
  description: '',
  version: 1,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 36,
    },
    name: {
      type: 'string',
    },
    experience: {
      type: 'number',
      minimum: 0,
    },
    classStates: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
          },
          featureKeys: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          ascension: {
            type: 'number',
            minimum: 1,
            maximum: 5,
          },
        },
        required: ['key', 'featureKeys', 'ascension'],
      },
    },
  },
  required: ['id', 'name', 'experience', 'classStates'],
} as const;

type Character = ExtractDocumentTypeFromTypedRxJsonSchema<typeof _characterSchema>;

export type CharacterClassState = Character['classStates'][number];

const characterSchema: RxJsonSchema<Character> = _characterSchema;

type CharacterMethods = {
  getClassState: (classKey: string) => CharacterClassState | undefined;
  addClassFeature: (classKey: string, featureKey: string) => void;
  removeClassFeature: (classKey: string, featureKey: string) => void;
  ascendClass: (classKey: string) => void;

  getAttributeBonus: (attributeKey: CharacterAttributeKey) => number;

  getLevel: () => number;
  getLevelExperience: () => number;
  getLevelShardCost: () => number;

  getShards: () => number;
  getSpentShards: () => number;
  getAvailableShards: () => number;

  getSurges: () => number;
  getSpentSurges: () => number;
  getAvailableSurges: () => number;
};

type CharacterDocument = RxDocument<Character, CharacterMethods>;

export const BASE_XP_PER_SHARD = 100;
export const SHARDS_PER_LEVEL = 3;

const _sumShards = (classStates: CharacterClassState[]) =>
  classStates.reduce((shards, classState) => shards + classState.featureKeys.length, 0);

const _sumAscension = (classStates: CharacterClassState[]) =>
  classStates.reduce((ascension, classState) => ascension + (classState.ascension - 1), 0);

const ATTRIBUTE_KEY_TO_RUNE_KEY = {
  STR: 'STONE',
  AGI: 'SKY',
  INT: 'SUN',
  CHA: 'MOON',
  WIS: 'SPIRIT',
};

const _sumRunes = (classStates: CharacterClassState[], runeKey: string) =>
  classStates.reduce(
    (runes, classState) =>
      runes +
      classState.featureKeys.filter((key) => key.includes('_R') && key.endsWith(runeKey)).length,
    0
  );

// breaks up experience by level and by shard
// ex. 2000 XP
// [
//     [100, 100, 100, 100, 100],
//     [200, 200, 200, 200, 200],
//     [300]
// ]
// (leftover 200 experience is excluded)
const _getShardedExperience = (experience: number) => {
  const shardedExperience: number[][] = [];
  let shardCount = 0;

  while (true) {
    // add array for level
    const levelIndex = Math.floor(shardCount / SHARDS_PER_LEVEL);
    if (!shardedExperience[levelIndex]) {
      shardedExperience[levelIndex] = [];
    }

    const shardCost = BASE_XP_PER_SHARD * shardedExperience.length;

    // add full shard
    if (experience >= shardCost) {
      experience -= shardCost;
      shardedExperience[levelIndex].push(shardCost);
      shardCount++;
    }
    // don't add partial shard
    else {
      break;
    }
  }

  return shardedExperience;
};

const characterMethods: CharacterMethods = {
  getClassState: function (this: CharacterDocument, classKey: string) {
    return this.classStates.find((classState) => classState.key === classKey);
  },
  addClassFeature: function (this: CharacterDocument, classKey: string, featureKey: string) {
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
  removeClassFeature: function (this: CharacterDocument, classKey: string, featureKey: string) {
    this.modify((character) => {
      const patchedClassStates = structuredClone(this.classStates);
      const classStateIndex = patchedClassStates.findIndex((ccs) => ccs.key == classKey);

      // classState not found, nothing to remove
      if (classStateIndex === -1) {
        return character;
      }

      const classState = patchedClassStates[classStateIndex];
      classState.featureKeys = classState.featureKeys.filter((key) => key !== featureKey);

      // remove the classState if no features are left
      if (classState.featureKeys.length === 0) {
        patchedClassStates.splice(classStateIndex, 1);
      }

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
  getAttributeBonus: function (this: CharacterDocument, attributeKey: CharacterAttributeKey) {
    const attributeClassStates = this.classStates.filter(
      (classState) => classState.key.slice(0, 3) === attributeKey
    );
    const attributeShards = _sumShards(attributeClassStates);
    const attributeAscension = _sumAscension(attributeClassStates);

    const runicClassStates = this.classStates.filter(
      (classState) => classState.key.startsWith('WEAPON') || classState.key.startsWith('ARMOR')
    );
    const runicShards = _sumRunes(runicClassStates, ATTRIBUTE_KEY_TO_RUNE_KEY[attributeKey]);

    // 1 EXPERIENCE = +1 BONUS
    // 1 ASCENSION = +2 BONUS
    return Math.floor(attributeShards + runicShards + attributeAscension * 2);
  },
  getLevel: function (this: CharacterDocument) {
    const shardedExperience = _getShardedExperience(this.experience);
    return shardedExperience.length;
  },
  getLevelExperience: function (this: CharacterDocument) {
    const shardedExperience = _getShardedExperience(this.experience);
    const pastLevelExperience = sum(flatten(shardedExperience.slice(0, this.getLevel() - 1)));
    return this.experience - pastLevelExperience;
  },
  getLevelShardCost: function (this: CharacterDocument) {
    return BASE_XP_PER_SHARD * this.getLevel();
  },
  getShards: function (this: CharacterDocument) {
    const shardedExperience = _getShardedExperience(this.experience);
    return SHARDS_PER_LEVEL + flatten(shardedExperience).length;
  },
  getSpentShards: function (this: CharacterDocument) {
    return _sumShards(this.classStates);
  },
  getAvailableShards: function (this: CharacterDocument) {
    return this.getShards() - this.getSpentShards();
  },
  getSurges: function (this: CharacterDocument) {
    return Math.floor(this.getShards() / SHARDS_PER_LEVEL);
  },
  getSpentSurges: function (this: CharacterDocument) {
    return _sumAscension(this.classStates);
  },
  getAvailableSurges: function (this: CharacterDocument) {
    return this.getSurges() - this.getSpentSurges();
  },
};

export type CharacterCollection = RxCollection<Character, CharacterMethods>;

export const CHARACTER_COLLECTION: RxCollectionCreator<Character> = {
  schema: characterSchema,
  methods: characterMethods,
  migrationStrategies: {
    1: (oldDoc) => {
      return {
        ...oldDoc,
        name: 'Unnamed Character',
      };
    },
  },
};
