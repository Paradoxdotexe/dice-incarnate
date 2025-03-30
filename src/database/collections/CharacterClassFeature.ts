import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  RxCollectionCreator,
  RxDocument,
  RxJsonSchema,
} from "rxdb";

const _characterClassFeatureSchema = {
  title: "CharacterClassFeature",
  description: "",
  version: 0,
  primaryKey: "key",
  type: "object",
  properties: {
    key: {
      type: "string",
      maxLength: 36,
    },
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    order: {
      type: "number",
    },
  },
  required: ["key", "name", "description", "order"],
} as const;

export type CharacterClassFeature = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof _characterClassFeatureSchema
>;

const characterClassFeatureSchema: RxJsonSchema<CharacterClassFeature> =
  _characterClassFeatureSchema;

type CharacterClassFeatureMethods = {
  getIsAscendable: () => boolean;
};

export type CharacterClassFeatureDocument = RxDocument<
  CharacterClassFeature,
  CharacterClassFeatureMethods
>;

const characterClassFeatureMethods: CharacterClassFeatureMethods = {
  getIsAscendable: function (this: CharacterClassFeatureDocument) {
    return /\ddX/g.test(this.description);
  },
};

export type CharacterClassFeatureCollection = RxCollection<
  CharacterClassFeature,
  CharacterClassFeatureMethods
>;

export const CHARACTER_CLASS_FEATURE_COLLECTION: RxCollectionCreator<CharacterClassFeature> =
  {
    schema: characterClassFeatureSchema,
    methods: characterClassFeatureMethods,
  };
