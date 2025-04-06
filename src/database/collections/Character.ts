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
      minimum: 6,
      maximum: 72,
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
  acquireClassTrait: (classKey: string, traitKey: string) => void;
  ascendClass: (classKey: string) => void;
  getAttributeBonus: (attributeKey: CharacterAttributeKey) => number;
  getAvailableExperience: () => number;
  getAvailableAscension: () => number;
};

type CharacterDocument = RxDocument<Character, CharacterMethods>;

const _sum_experience = (classStates: CharacterClassState[]) =>
  classStates.reduce(
    (experience, classState) => experience + classState.featureKeys.length,
    0
  );

const _sum_ascension = (classStates: CharacterClassState[]) =>
  classStates.reduce(
    (ascension, classState) => ascension + (classState.ascension - 1),
    0
  );

const characterMethods: CharacterMethods = {
  getClassState: function (this: CharacterDocument, classKey: string) {
    return this.classStates.find((classState) => classState.key === classKey);
  },
  acquireClassTrait: function (
    this: CharacterDocument,
    classKey: string,
    traitKey: string
  ) {
    this.modify((character) => {
      const patchedClassStates = structuredClone(this.classStates);
      let classState = patchedClassStates.find((ccs) => ccs.key == classKey);

      // add new class state if this is the first acquisition
      if (!classState) {
        classState = { key: classKey, featureKeys: [], ascension: 1 };
        patchedClassStates.push(classState);
      }

      classState.featureKeys.push(traitKey);
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
    const attributeExperience = _sum_experience(attributeClassStates);
    const attributeAscension = _sum_ascension(attributeClassStates);

    // 2 EXPERIENCE = +1 BONUS
    // 1 ASCENSION (6 EXPERIENCE) = +3 BONUS
    return Math.floor((attributeExperience + attributeAscension * 6) / 2);
  },
  getAvailableExperience: function (this: CharacterDocument) {
    const spentExperience = _sum_experience(this.classStates);
    return this.experience - spentExperience;
  },
  getAvailableAscension: function (this: CharacterDocument) {
    const spentAscension = _sum_ascension(this.classStates);
    return Math.floor(this.experience / 6) - spentAscension;
  },
};

export type CharacterCollection = RxCollection<Character, CharacterMethods>;

export const CHARACTER_COLLECTION: RxCollectionCreator<Character> = {
  schema: characterSchema,
  methods: characterMethods,
};
