import { CharacterClass } from "../database/collections/CharacterClass";

export const ROMAN_NUMERALS = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];

export type CharacterAttribute = {
  key: CharacterClass["attributeKey"];
  name: string;
  description: string;
};

export const CHARACTER_ATTRIBUTES: CharacterAttribute[] = [
  {
    key: "STR",
    name: "Strength",
    description:
      "Strength reflects your physical power and endurance. It affects your ability to exert force, endure physical hardship, and perform feats requiring raw power like lifting heavy objects or overpowering opponents.",
  },
  {
    key: "AGI",
    name: "Agility",
    description:
      "Agility reflects your physical precision and quickness. It is crucial for performing tasks requiring finesse and balance, such as maneuvering delicately, moving stealthily, and reacting quickly.",
  },
  {
    key: "INT",
    name: "Intelligence",
    description:
      "Intelligence reflects your mental acuity, knowledge recall, and problem-solving skills. This attribute is used to understand complex systems, recall information, and apply specialized knowledge in fields such as medicine, engineering, and magic.",
  },
  {
    key: "CHA",
    name: "Charisma",
    description:
      "Charisma reflects your ability to influence and charm others. It impacts how you persuade, deceive, and lead, making it vital for negotiations, inspiring allies, and manipulating foes.",
  },
  {
    key: "WIS",
    name: "Wisdom",
    description:
      "Wisdom reflects your intuition and perceptiveness. It influences your ability to notice details, read situations, and intuitively understand others, aiding in activities like investigation, detection, and decision-making.",
  },
];
