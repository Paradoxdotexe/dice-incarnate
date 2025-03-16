type CharacterAttribute =
  | "STRENGTH"
  | "AGILITY"
  | "INTELLIGENCE"
  | "CHARISMA"
  | "WISDOM";

export type CharacterClass = {
  key: string;
  attribute: CharacterAttribute;
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
    key: "INT_INTELLIGENT",
    attribute: "INTELLIGENCE",
    name: "Intelligent",
    color: "#5d5d5d",
    traits: [
      {
        key: "INT_INTELLIGENT_TRAIT_1",
        perk: {
          key: "INT_INTELLIGENT_PERK_1",
          name: "Book Worm",
          description:
            "You double your Intellect bonus on skill checks to comprehend written information.",
        },
      },
    ],
  },
  {
    key: "INT_SAGE_STORM",
    attribute: "INTELLIGENCE",
    name: "Storm Sage",
    color: "#3799d1",
    traits: [
      {
        key: "INT_SAGE_STORM_TRAIT_1",
        ability: {
          key: "INT_SAGE_STORM_ABILITY_1",
          name: "Tempest Strike",
          description:
            "Spend 1 Mana to channel wind into a melee or ranged attack of you or an ally. That attack deals an additional 3dX damage.",
        },
        perk: {
          key: "INT_SAGE_STORM_PERK_1",
          name: "Nature's Wisdom",
          description:
            "You gain a 1dX bonus to Intelligence and Perception checks while dealing with natural phenomena.",
        },
      },
      {
        key: "INT_SAGE_STORM_TRAIT_2",
        ability: {
          key: "INT_SAGE_STORM_ABILITY_2",
          name: "Tempest Surge",
          description:
            "Spend 2 Mana to surge wind towards 2 targets within 15ft. Each target takes 3dX damage and is pushed back 15ft.",
        },
        perk: {
          key: "INT_SAGE_STORM_PERK_2",
          name: "Nature's Sanctuary",
          description:
            "When resting in an Adventuring Camp, you gain an additional Rest Activity.",
        },
      },
      {
        key: "INT_SAGE_STORM_TRAIT_3",
        ability: {
          key: "INT_SAGE_STORM_ABILITY_3",
          name: "Tempest Storm",
          description:
            "Spend 4 Mana to envelope a target within 60ft in a wind vortex. For 2 turns, that target takes 3dX damage and loses 1 Mana.",
        },
        perk: {
          key: "INT_SAGE_STORM_PERK_3",
          name: "Nature's Restoration",
          description:
            "If you spend no Mana two turns in a row, you heal 1dX health.",
        },
      },
    ],
  },
];
