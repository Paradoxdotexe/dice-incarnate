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

export const CHARACTER_CLASS_FEATURES: CharacterClassFeature[] = [
  // STR - Strong
  {
    key: "STR_GENERAL_F1",
    name: "Big Brother",
    description:
      "*Pick on someone your own size!* When a creature within 5ft is hit with an attack, you can leap in to switch places.",
    order: 1,
  },
  {
    key: "STR_GENERAL_F2",
    name: "Aggressor",
    description:
      "*Strike first, strike hard.* Add your Strength bonus to your Initiative bonus.",
    order: 2,
  },
  {
    key: "STR_GENERAL_F3",
    name: "Heavy Hitter",
    description:
      "*I was here first!* If you consume no movement on your turn, your melee attack damage is increased by one die.",
    order: 3,
  },
  {
    key: "STR_GENERAL_F4",
    name: "Pack Mule",
    description:
      "*Let me carry that for you!* Your carrying capacity is doubled.",
    order: 4,
  },
  {
    key: "STR_GENERAL_F5",
    name: "Iron Grip",
    description:
      "*You're mine now.* You have advantage on Strength checks related to grappling.",
    order: 5,
  },
  {
    key: "STR_GENERAL_F6",
    name: "Big Hands",
    description:
      "*You know what they say about big hands?* You can wield two-handed weapons with one hand.",
    order: 6,
  },
  // AGI - Agile
  {
    key: "AGI_GENERAL_F1",
    name: "Spotter",
    description:
      "*Watch your step!* When you succeed on an Agility check, you can help one other creature immediately succeed on the same check.",
    order: 1,
  },
  {
    key: "AGI_GENERAL_F2",
    name: "Surefooted",
    description:
      "*I said watch your damn step!* You are not impeded by Rough Terrain.",
    order: 2,
  },
  {
    key: "AGI_GENERAL_F3",
    name: "Slippery",
    description:
      "*Missed me!* Opportunity attacks against you have disadvantage.",
    order: 3,
  },
  {
    key: "AGI_GENERAL_F4",
    name: "Righting Reflex",
    description:
      "*Cats always land on their feet.* When you fall, you land on your feet and your fall damage is reduced by one die.",
    order: 4,
  },
  {
    key: "AGI_GENERAL_F5",
    name: "Sneaky",
    description:
      "*Must have been the wind.* You advantage on Agility checks to move stealthily.",
    order: 5,
  },
  {
    key: "AGI_GENERAL_F6",
    name: "Quick Draw",
    description: "*Think fast!* You can draw and switch weapons without a Bonus Action.",
    order: 6,
  },
];
