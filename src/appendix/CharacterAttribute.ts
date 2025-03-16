export type CharacterAttributeKey = "STR" | "AGI" | "INT" | "CHA" | "WIS";

export type CharacterAttribute = {
  key: CharacterAttributeKey;
  name: string;
  description: string;
};

export const CHARACTER_ATTRIBUTES: CharacterAttribute[] = [
  {
    key: "STR",
    name: "Strength",
    description:
      "Strength is the measure of your physical power and endurance. It affects your ability to exert force, endure physical hardship, and perform feats requiring raw power like lifting heavy objects or overpowering opponents.",
  },
  {
    key: "AGI",
    name: "Agility",
    description:
      "Agility dictates your physical precision and quickness. It is crucial for performing tasks requiring finesse and balance, such as maneuvering delicately, moving stealthily, and reacting quickly.",
  },
  {
    key: "INT",
    name: "Intelligence",
    description:
      "Intelligence represents your mental acuity, knowledge recall, and problem-solving skills. This attribute is used to understand complex systems, recall information, and apply specialized knowledge in fields such as medicine, engineering, and magic.",
  },
  {
    key: "CHA",
    name: "Charisma",
    description:
      "Charisma measures your ability to influence and charm others. It impacts how you persuade, deceive, and lead, making it vital for negotiations, inspiring allies, and manipulating foes.",
  },
  {
    key: "WIS",
    name: "Wisdom",
    description:
      "Wisdom reflects your intuition and perceptiveness. It influences your ability to notice details, read situations, and intuitively understand others, aiding in activities like investigation, detection, and decision-making.",
  },
];
