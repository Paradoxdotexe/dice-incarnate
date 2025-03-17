import { CharacterAttributeKey } from "./CharacterAttribute";

export type CharacterClass = {
  key: string;
  attributeKey: CharacterAttributeKey;
  name: string;
  color: string;
  traits: CharacterClassTrait[];
};

export type CharacterClassTrait = {
  key: string;
  perk: {
    key: string;
    name: string;
    description: string;
  };
  ability?: {
    key: string;
    name: string;
    description: string;
  };
};

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    key: "STR_GENERAL",
    attributeKey: "STR",
    name: "Titan",
    color: "#5d5d5d",
    traits: [],
  },
  {
    key: "STR_KNIGHT_1",
    attributeKey: "STR",
    name: "Shield Knight",
    color: "#336fca",
    traits: [],
  },
  {
    key: "STR_BARBARIAN_1",
    attributeKey: "STR",
    name: "Blood Barbarian",
    color: "#ca3333",
    traits: [],
  },
  {
    key: "AGI_GENERAL",
    attributeKey: "AGI",
    name: "Acrobat",
    color: "#5d5d5d",
    traits: [],
  },
  {
    key: "AGI_MONK_1",
    attributeKey: "AGI",
    name: "Momentum Monk",
    color: "#cac833",
    traits: [],
  },
  {
    key: "AGI_RANGER_1",
    attributeKey: "AGI",
    name: "Marksman Ranger",
    color: "#0d7535",
    traits: [],
  },
  {
    key: "INT_GENERAL",
    attributeKey: "INT",
    name: "Scholar",
    color: "#5d5d5d",
    traits: [
      {
        key: "INT_GENERAL_TRAIT_1",
        perk: {
          key: "INT_GENERAL_PERK_1",
          name: "Book Worm",
          description:
            "You have advantage on Intelligence checks to comprehend written information.",
        },
      },
    ],
  },
  {
    key: "INT_MAGE_1",
    attributeKey: "INT",
    name: "Frost Mage",
    color: "#39b4d3",
    traits: [],
  },
  {
    key: "INT_MANCER_1",
    attributeKey: "INT",
    name: "Mech Mancer",
    color: "#c26628",
    traits: [],
  },
  {
    key: "CHA_GENERAL",
    attributeKey: "CHA",
    name: "Influencer",
    color: "#5d5d5d",
    traits: [],
  },
  {
    key: "CHA_HERALD_1",
    attributeKey: "CHA",
    name: "Diplomacy Herald",
    color: "#33ca6d",
    traits: [],
  },
  {
    key: "CHA_CHANTER_1",
    attributeKey: "CHA",
    name: "Corruption Chanter",
    color: "#5e28c2",
    traits: [],
  },
  {
    key: "WIS_GENERAL",
    attributeKey: "WIS",
    name: "Oracle",
    color: "#5d5d5d",
    traits: [
      {
        key: "WIS_GENERAL_TRAIT_1",
        perk: {
          key: "WIS_GENERAL_PERK_1",
          name: "Beast Speech",
          description:
            'You can communicate with beasts through visual and auditory cues, effectively limited to single words or basic phrases, such as "protect" or "go that way".',
        },
      },
      {
        key: "WIS_GENERAL_TRAIT_2",
        perk: {
          key: "WIS_GENERAL_PERK_2",
          name: "Environmentalist",
          description:
            "You have advantage on Wisdom checks when dealing with natural phenomena, such animals or lands.",
        },
      },
      {
        key: "WIS_GENERAL_TRAIT_3",
        perk: {
          key: "WIS_GENERAL_PERK_3",
          name: "Sixth Sense",
          description:
            "When your party is surprised, you do not lose your turn.",
        },
      },
      {
        key: "WIS_GENERAL_TRAIT_4",
        perk: {
          key: "WIS_GENERAL_PERK_4",
          name: "Combat Conditioning",
          description: "Your initiative bonus is doubled.",
        },
      },
    ],
  },
  {
    key: "WIS_SAGE_1",
    attributeKey: "WIS",
    name: "Storm Sage",
    color: "#3799d1",
    traits: [
      {
        key: "WIS_SAGE_1_TRAIT_1",
        ability: {
          key: "WIS_SAGE_1_ABILITY_1",
          name: "Tempest Strike",
          description:
            "Spend 1 Caro to channel wind into a weapon attack of you or an ally. This attack deals an additional 1dX damage.",
        },
        perk: {
          key: "WIS_SAGE_1_PERK_1",
          name: "Grace of the Storm",
          description:
            "You fall at half the rate of normal. Your fall damage is reduced by half.",
        },
      },
      {
        key: "WIS_SAGE_1_TRAIT_2",
        ability: {
          key: "WIS_SAGE_1_ABILITY_2",
          name: "Tempest Surge",
          description:
            "Spend 2 Caro to surge wind towards 2 targets within 15ft. Each target takes 1dX damage and is pushed back 15ft.",
        },
        perk: {
          key: "WIS_SAGE_1_PERK_2",
          name: "Veil of the Storm",
          description:
            "The winds protect you with a swirling barrier. Ranged attacks against you have disadvantage.",
        },
      },
      {
        key: "WIS_SAGE_1_TRAIT_3",
        ability: {
          key: "WIS_SAGE_1_ABILITY_3",
          name: "Tempest Storm",
          description:
            "Spend 4 Caro to envelope a target within 60ft in a wind vortex. That target takes 3dX damage and loses 1 Caro.",
        },
        perk: {
          key: "WIS_SAGE_1_PERK_3",
          name: "Eye of the Storm",
          description:
            "If you spend 0 Caro three turns in a row, the calm of the wind restores you. You heal 1dX health.",
        },
      },
    ],
  },
  {
    key: "WIS_DRUID_1",
    attributeKey: "WIS",
    name: "Beast Druid",
    color: "#d16337",
    traits: [
      {
        key: "WIS_DRUID_1_TRAIT_1",
        ability: {
          key: "WIS_DRUID_1_ABILITY_1",
          name: "Attack Beast",
          description:
            "Spend 1 Caro to command your tamed beast to attack a target within 30ft. The target takes 1dX damage and can be dragged 5ft in any direction.",
        },
        perk: {
          key: "WIS_DRUID_1_PERK_1",
          name: "Beast Companion",
          description:
            "You have a tamed beast that is always by your side. They either have the ability to fly, swim, or walk.",
        },
      },
      {
        key: "WIS_DRUID_1_TRAIT_2",
        ability: {
          key: "WIS_DRUID_1_ABILITY_2",
          name: "Guard Beast",
          description:
            "Spend 2 Caro to command your tamed beast to defend you. The next time you are attacked, the attacker takes 1dX damage and your tamed beast deflects up to 1dX damage.",
        },
        perk: {
          key: "WIS_DRUID_1_PERK_2",
          name: "Beast Sight",
          description:
            "You can look through the eyes of your tamed beast while they are within 120ft.",
        },
      },
      {
        key: "WIS_DRUID_1_TRAIT_3",
        ability: {
          key: "WIS_DRUID_1_ABILITY_3",
          name: "Mercy Beast",
          description:
            "Spend 4 Caro to command your tamed beast to stabilize an incapacitated ally within 60ft. The ally heals 3dX HP.",
        },
        perk: {
          key: "WIS_DRUID_1_PERK_3",
          name: "Beast Shape",
          description:
            "You can transform into the same animal as your tamed beast for up to 1 hour. You can only do this once per Rest.",
        },
      },
    ],
  },
];
