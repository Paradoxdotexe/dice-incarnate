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
    traits: [
      {
        key: "STR_GENERAL_TRAIT_1",
        perk: {
          key: "STR_GENERAL_PERK_1",
          name: "Big Brother",
          description:
            "*Hey! Pick on someone your own size.* When an ally within 5ft is hit with an attack, you can leap in to switch places, letting the attack hit you instead.",
        },
      },
      {
        key: "STR_GENERAL_TRAIT_2",
        perk: {
          key: "STR_GENERAL_PERK_2",
          name: "Down to Scrap",
          description: "*If they want a fight, they'll get one.* You add your Strength to your Initiative bonus.",
        },
      },
    ],
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
    traits: [
      {
        key: "AGI_GENERAL_TRAIT_1",
        perk: {
          key: "AGI_GENERAL_PERK_1",
          name: "Spotter",
          description:
            "*Teaching is the best way to learn.* When you succeed on an Agility check, you can help one other character immediately succeed on the same check.",
        },
      },
      {
        key: "AGI_GENERAL_TRAIT_2",
        perk: {
          key: "AGI_GENERAL_PERK_2",
          name: "Lone Wolf",
          description:
            "*Sometimes its easier to go it alone.* You have advantage on Agility checks while by yourself.",
        },
      },
      {
        key: "AGI_GENERAL_TRAIT_3",
        perk: {
          key: "AGI_GENERAL_PERK_3",
          name: "Fleet Foot",
          description:
            "*You may be a distant descendent of mountain goats.* You are not impeded by Rough Terrain.",
        },
      },
      {
        key: "AGI_GENERAL_TRAIT_4",
        perk: {
          key: "AGI_GENERAL_PERK_4",
          name: "Get Out of Dodge",
          description:
            "*Missed me!* Opportunity attacks against you have disadvantage.",
        },
      },
    ],
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
            "*You are a voracious reader.* You have advantage on Intelligence checks to comprehend written information.",
        },
      },
      {
        key: "INT_GENERAL_TRAIT_2",
        perk: {
          key: "INT_GENERAL_PERK_2",
          name: "Linguist",
          description:
            "*Some have called you a polyglot.* You have advantage on Intelligence checks to comprehend languages.",
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
    traits: [
      {
        key: "CHA_GENERAL_TRAIT_1",
        perk: {
          key: "CHA_GENERAL_PERK_1",
          name: "Method Actor",
          description:
            "*You never break character.* You have advantage on Charisma checks to deceive others while impersonating as someone else.",
        },
      },
      {
        key: "CHA_GENERAL_TRAIT_2",
        perk: {
          key: "CHA_GENERAL_PERK_2",
          name: "Folk Hero",
          description:
            "*The world has heard of your accomplishments.* You have advantage on Charisma checks to persuade commoners.",
        },
      },
    ],
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
            '*Did that bird just talk?* You can communicate with beasts through their unique visual and auditory cues. You are effectively limited to single words or basic phrases.',
        },
      },
      {
        key: "WIS_GENERAL_TRAIT_2",
        perk: {
          key: "WIS_GENERAL_PERK_2",
          name: "Environmentalist",
          description:
            "*Somewhat of a tree hugger.* You have advantage on Wisdom checks when dealing with natural phenomena, such animals or lands.",
        },
      },
      {
        key: "WIS_GENERAL_TRAIT_3",
        perk: {
          key: "WIS_GENERAL_PERK_3",
          name: "Sixth Sense",
          description:
            "*What was that?* When your party is surprised, you are not. You do not lose your turn.",
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
            "Spend 2 Caro to command your tamed beast to defend you. The next time you are attacked, your tamed beast deals 1dX damage and deflects up to 1dX damage.",
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
