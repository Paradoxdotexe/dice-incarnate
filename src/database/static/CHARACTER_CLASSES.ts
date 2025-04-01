import { CharacterClass } from "../collections/CharacterClass";

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
      "STR_GENERAL_F7",
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
    featureKeys: [
      "INT_GENERAL_F1",
      "INT_GENERAL_F2",
      "INT_GENERAL_F3",
      "INT_GENERAL_F4",
      "INT_GENERAL_F5",
      "INT_GENERAL_F6",
    ],
  },
  {
    key: "CHA_GENERAL",
    type: "PERK",
    attributeKey: "CHA",
    name: "Charming",
    color: "#494949",
    featureKeys: [
      "CHA_GENERAL_F1",
      "CHA_GENERAL_F2",
      "CHA_GENERAL_F3",
      "CHA_GENERAL_F4",
      "CHA_GENERAL_F5",
      "CHA_GENERAL_F6",
    ],
  },
  {
    key: "WIS_GENERAL",
    type: "PERK",
    attributeKey: "WIS",
    name: "Insightful",
    color: "#494949",
    featureKeys: [
      "WIS_GENERAL_F1",
      "WIS_GENERAL_F2",
      "WIS_GENERAL_F3",
      "WIS_GENERAL_F4",
      "WIS_GENERAL_F5",
      "WIS_GENERAL_F6",
    ],
  },
];
