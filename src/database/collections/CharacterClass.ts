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

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    key: "STR_GENERAL",
    type: "PERK",
    attributeKey: "STR",
    name: "Strong",
    color: "#494949",
    featureKeys: [
      "STR_GENERAL_F1",
      "STR_GENERAL_F2",
      "STR_GENERAL_F3",
      "STR_GENERAL_F4",
      "STR_GENERAL_F5",
      "STR_GENERAL_F6",
    ],
  },
  {
    key: "AGI_GENERAL",
    type: "PERK",
    attributeKey: "AGI",
    name: "Agile",
    color: "#494949",
    featureKeys: [
      "AGI_GENERAL_F1",
      "AGI_GENERAL_F2",
      "AGI_GENERAL_F3",
      "AGI_GENERAL_F4",
      "AGI_GENERAL_F5",
      "AGI_GENERAL_F6",
    ],
  },
  {
    key: "INT_GENERAL",
    type: "PERK",
    attributeKey: "INT",
    name: "Intelligent",
    color: "#494949",
    featureKeys: [],
  },
  {
    key: "CHA_GENERAL",
    type: "PERK",
    attributeKey: "CHA",
    name: "Charming",
    color: "#494949",
    featureKeys: [],
  },
  {
    key: "WIS_GENERAL",
    type: "PERK",
    attributeKey: "WIS",
    name: "Wise",
    color: "#494949",
    featureKeys: [],
  },
];
