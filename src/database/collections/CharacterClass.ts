import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  RxCollectionCreator,
  RxDocument,
  RxJsonSchema,
} from "rxdb";
import { CharacterClassFeatureDocument } from "./CharacterClassFeature";

const _characterClassSchema = {
  title: "CharacterClass",
  description: "",
  version: 0,
  primaryKey: "key",
  type: "object",
  properties: {
    key: {
      type: "string",
      maxLength: 36,
    },
    attributeKey: {
      type: "string",
      enum: ["STR", "AGI", "INT", "CHA", "WIS"],
      final: true,
    },
    type: {
      type: "string",
      enum: ["PERK", "CLASS", "WEAPON", "ARMOR", "ITEM"],
      final: true,
    },
    name: {
      type: "string",
    },
    color: {
      type: "string",
    },
    featureKeys: {
      type: "array",
      ref: "characterClassFeature",
      items: {
        type: "string",
      },
    },
  },
  required: ["key", "type", "name", "color", "featureKeys"],
} as const;

export type CharacterClass = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof _characterClassSchema
>;

export type CharacterAttributeKey = CharacterClass["attributeKey"];

const characterClassSchema: RxJsonSchema<CharacterClass> =
  _characterClassSchema;

type CharacterClassMethods = {};

export type UnpopulatedCharacterClassDocument = RxDocument<
  CharacterClass,
  CharacterClassMethods
>;
export type CharacterClassDocument = UnpopulatedCharacterClassDocument & {
  features: CharacterClassFeatureDocument[];
};

const characterClassMethods: CharacterClassMethods = {};

export type CharacterClassCollection = RxCollection<
  CharacterClass,
  CharacterClassMethods
>;

export const CHARACTER_CLASS_COLLECTION: RxCollectionCreator<CharacterClass> = {
  schema: characterClassSchema,
  methods: characterClassMethods,
};
