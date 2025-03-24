import { CharacterAttributeKey } from "./CharacterAttribute";

export type CharacterClass = {
  key: string;
  attributeKey: CharacterAttributeKey;
  name: string;
  ascensionNames?: string[];
  color: string;
  traits: CharacterClassTrait[];
};

export type CharacterClassTrait = {
  key: string;
  name: string;
  description: string;
  ascendable?: boolean;
  // requirement?: number;
};

export const CHARACTER_CLASSES: CharacterClass[] = [
  {
    key: "STR_GENERAL",
    attributeKey: "STR",
    name: "Strong",
    color: "#494949",
    traits: [
      {
        key: "STR_GENERAL_PERK_1",
        name: "Big Brother",
        description:
          "*Pick on someone your own size!* When a creature within 5ft is hit with an attack, you can leap in to switch places.",
      },
      {
        key: "STR_GENERAL_PERK_2",
        name: "Aggressor",
        description:
          "*Strike first, strike hard.* Add your Strength bonus to your Initiative bonus.",
      },
      {
        key: "STR_GENERAL_PERK_3",
        name: "Heavy Hitter",
        description:
          "*I was here first!* If you consume no movement on your turn, your melee attack damage is increased by one die.",
      },

      {
        key: "STR_GENERAL_PERK_4",
        name: "Pack Mule",
        description:
          "*Let me carry that for you!* Your carrying capacity is doubled.",
      },
      {
        key: "STR_GENERAL_PERK_5",
        name: "Iron Grip",
        description:
          "*You're not going anywhere.* You have advantage on Strength checks related to grappling",
      },
      {
        key: "STR_GENERAL_PERK_6",
        name: "Big Hands",
        description:
          "*You know what the say about big hands?* You can wield two-handed weapons with one hand.",
      },
    ],
  },
  {
    key: "STR_WEAPON_1",
    attributeKey: "STR",
    name: "Sword",
    ascensionNames: ["Shortsword", "Longsword", "Greatsword"],
    color: "#888888",
    traits: [
      {
        key: "STR_WEAPON_1_ABILITY_1",
        name: "Sword Strike",
        description:
          "Roll a Strength check to attack a creature within 5ft. On a success, the target takes 3dX damage.",
        ascendable: true,
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
    name: "Agile",
    color: "#494949",
    traits: [
      {
        key: "AGI_GENERAL_PERK_1",
        name: "Spotter",
        description:
          "*Watch your step!* When you succeed on an Agility check, you can help one other creature immediately succeed on the same check.",
      },
      {
        key: "AGI_GENERAL_PERK_2",
        name: "Surefooted",
        description:
          "*A distant descendent of mountain goats.* You are not impeded by Rough Terrain during combat.",
      },
      {
        key: "AGI_GENERAL_PERK_3",
        name: "Slippery",
        description:
          "*Missed me!* Opportunity attacks against you have disadvantage.",
      },
      {
        key: "AGI_GENERAL_PERK_4",
        name: "Righting Reflex",
        description:
          "*Cats always land on their feet.* When you fall, you land on your feet and your fall damage is reduced by one die.",
      },
      {
        key: "AGI_GENERAL_PERK_5",
        name: "Sneaky",
        description:
          "*Must have been the wind.* You advantage on Agility checks to move stealthily.",
      },
      {
        key: "AGI_GENERAL_PERK_6",
        name: "Quick Draw",
        description: "You can draw and switch weapons without a Bonus Action.",
      },
    ],
  },
  {
    key: "AGI_WEAPON_1",
    attributeKey: "AGI",
    name: "Bow",
    ascensionNames: ["Shortbow", "Crossbow", "Longbow"],
    color: "#888888",
    traits: [
      {
        key: "AGI_WEAPON_1_ABILITY_1",
        name: "Bow Strike",
        description:
          "Roll an Agility check to attack a creature between 20ft and 100ft. On a success, the target takes 2dX damage.",
        ascendable: true,
      },
    ],
  },
  {
    key: "AGI_MONK_1",
    attributeKey: "AGI",
    name: "Control Monk",
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
    name: "Intelligent",
    color: "#494949",
    traits: [
      {
        key: "INT_GENERAL_PERK_1",
        name: "Book Worm",
        description:
          "*You are a voracious reader.* You have advantage on Intelligence checks to comprehend written information.",
      },
      {
        key: "INT_GENERAL_PERK_2",
        name: "Linguist",
        description:
          "*Some have called you a polyglot.* You have advantage on Intelligence checks to comprehend languages.",
      },
      {
        key: "INT_GENERAL_PERK_3",
        name: "Mastermind",
        description:
          "*There's always Plan B.* If you forgo your first turn in combat, your allies have advantage on their Initiative roll and all rolls made on their first turn.",
      },
    ],
  },
  {
    key: "INT_WEAPON_1",
    attributeKey: "INT",
    name: "Hexlock",
    ascensionNames: ["Musket", "Revolver", "Repeater"],
    color: "#888888",
    traits: [
      {
        key: "INT_WEAPON_1_ABILITY_1",
        name: "Hexlock Blast",
        description:
          "Roll an Intelligence check to attack a creature between 10ft and 30ft. On a success, the target takes 2dX damage.",
        ascendable: true,
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
    name: "Charming",
    color: "#494949",
    traits: [
      {
        key: "CHA_GENERAL_PERK_1",
        name: "Method Actor",
        description:
          "*You never break character.* You have advantage on Charisma checks to deceive others while impersonating as someone else.",
      },
      {
        key: "CHA_GENERAL_PERK_2",
        name: "Folk Hero",
        description:
          "*The world has heard of your accomplishments.* You have advantage on Charisma checks to persuade commoners.",
      },
    ],
  },
  {
    key: "CHA_WEAPON_1",
    attributeKey: "CHA",
    name: "Blade",
    ascensionNames: ["Katar", "Dagger", "Karambit"],
    color: "#888888",
    traits: [
      {
        key: "CHA_WEAPON_1_ABILITY_1",
        name: "Blade Strike",
        description:
          "Roll a Charisma check to deceive a creature within 5ft to let you strike from lethal distance. On a success, the target takes 6dX damage. You cannot attack the same target with a Blade twice.",
        ascendable: true,
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
    name: "Wise",
    color: "#494949",
    traits: [
      {
        key: "WIS_GENERAL_PERK_1",
        name: "Environmentalist",
        description:
          "*Somewhat of a tree hugger.* You have advantage on Wisdom checks when dealing with natural phenomena, such animals or lands.",
      },
      {
        key: "WIS_GENERAL_PERK_2",
        name: "Sixth Sense",
        description:
          "*What was that?* When your party is surprised, you are not. You do not lose your turn.",
      },
    ],
  },
  {
    key: "WIS_WEAPON_1",
    attributeKey: "WIS",
    name: "Staff",
    ascensionNames: ["Hanbo", "Jo", "Bo"],
    color: "#888888",
    traits: [
      {
        key: "WIS_WEAPON_1_ABILITY_1",
        name: "Staff Strike",
        description:
          "Roll a Wisdom check to attack a creature within 10ft. On a success, the target takes 2dX damage.",
        ascendable: true,
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
        key: "WIS_SAGE_1_ABILITY_1",
        name: "Tempest Strike",
        description:
          "Spend 1 Mana to channel wind into a weapon attack of you or an ally. This attack deals an additional 1dX damage.",
        ascendable: true,
      },
      {
        key: "WIS_SAGE_1_ABILITY_2",
        name: "Tempest Surge",
        description:
          "Spend 2 Mana to surge wind towards 2 targets within 15ft. Each target takes 1dX damage and is pushed back 15ft.",
        ascendable: true,
      },
      {
        key: "WIS_SAGE_1_ABILITY_3",
        name: "Tempest Storm",
        description:
          "Spend 4 Mana to envelope a target within 60ft in a wind vortex. That target takes 3dX damage and loses 1 Mana.",
        ascendable: true,
      },
      {
        key: "WIS_SAGE_1_PERK_2",
        name: "Veil of the Storm",
        description:
          "The winds protect you with a swirling barrier. Ranged attacks against you have disadvantage.",
      },
      {
        key: "WIS_SAGE_1_PERK_1",
        name: "Grace of the Storm",
        description:
          "You fall at half the rate of normal. Your fall damage is reduced by half.",
      },
      {
        key: "WIS_SAGE_1_PERK_3",
        name: "Eye of the Storm",
        description:
          "If you spend 0 Mana three turns in a row, the calm of the wind restores you. You heal 1dX health.",
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
        key: "WIS_DRUID_1_ABILITY_1",
        name: "Attack Beast",
        description:
          "Spend 1 Mana to command your tamed beast to attack a target within 30ft. The target takes 1dX damage and can be dragged 5ft in any direction.",
      },
      {
        key: "WIS_DRUID_1_ABILITY_2",
        name: "Guard Beast",
        description:
          "Spend 2 Mana to command your tamed beast to defend you. The next time you are attacked, your tamed beast deals 1dX damage and deflects up to 1dX damage.",
      },
      {
        key: "WIS_DRUID_1_ABILITY_3",
        name: "Mercy Beast",
        description:
          "Spend 4 Mana to command your tamed beast to stabilize an incapacitated ally within 60ft. The ally heals 3dX HP.",
      },
      {
        key: "WIS_DRUID_1_PERK_1",
        name: "Beast Speech",
        description:
          'You can communicate with beasts through their unique visual and auditory cues. You are effectively limited to single words or basic phrases, such as "threat" or "go that way".',
      },
      {
        key: "WIS_DRUID_1_PERK_2",
        name: "Beast Sight",
        description:
          "You can look through the eyes of your tamed beast while they are within 120ft.",
      },
      {
        key: "WIS_DRUID_1_PERK_3",
        name: "Beast Shape",
        description:
          "You can transform into the same animal as your tamed beast for up to 1 hour. You can only do this once per Rest.",
      },
    ],
  },
];
