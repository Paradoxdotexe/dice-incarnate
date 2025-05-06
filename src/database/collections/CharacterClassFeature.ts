import {
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxCollection,
  RxCollectionCreator,
  RxDocument,
  RxJsonSchema,
} from 'rxdb';
import reactStringReplace from 'react-string-replace';

const _characterClassFeatureSchema = {
  title: 'CharacterClassFeature',
  description: '',
  version: 0,
  primaryKey: 'key',
  type: 'object',
  properties: {
    key: {
      type: 'string',
      maxLength: 36,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    order: {
      type: 'number',
    },
    attributeRequirement: {
      type: 'number',
    },
    ascensionRequirement: {
      type: 'number',
    },
  },
  required: ['key', 'name', 'description', 'order'],
} as const;

export type CharacterClassFeature = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof _characterClassFeatureSchema
>;

const characterClassFeatureSchema: RxJsonSchema<CharacterClassFeature> =
  _characterClassFeatureSchema;

type CharacterClassFeatureMethods = {
  getDescription: (ascension: number) => string;
  getMana: () => number | undefined;
  getRuneType: () => string | undefined;
};

export type CharacterClassFeatureDocument = RxDocument<
  CharacterClassFeature,
  CharacterClassFeatureMethods
>;

const characterClassFeatureMethods: CharacterClassFeatureMethods = {
  getDescription: function (this: CharacterClassFeatureDocument, ascension: number) {
    return reactStringReplace(this.description, /\[(.+?)\]/g, (str) => {
      str = str.replace('A', ascension.toString());
      return eval(str);
    }).join('');
  },
  getMana: function (this: CharacterClassFeatureDocument) {
    const match = /spend (\d) Mana/g.exec(this.description);
    return match ? parseInt(match[1]) : undefined;
  },
  getRuneType: function (this: CharacterClassFeatureDocument) {
    if (this.key.includes('_R')) {
      return this.key.split('_').at(-1);
    }
  },
};

export type CharacterClassFeatureCollection = RxCollection<
  CharacterClassFeature,
  CharacterClassFeatureMethods
>;

export const CHARACTER_CLASS_FEATURE_COLLECTION: RxCollectionCreator<CharacterClassFeature> = {
  schema: characterClassFeatureSchema,
  methods: characterClassFeatureMethods,
};
