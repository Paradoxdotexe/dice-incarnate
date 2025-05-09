import { ReactNode } from "react";
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
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XX"
];

export type CharacterAttribute = {
  key: CharacterClass["attributeKey"];
  name: string;
  description: ReactNode;
};

export const CHARACTER_ATTRIBUTES: CharacterAttribute[] = [
  {
    key: "STR",
    name: "Strength",
    description: (
      <>
        Strength reflects your ability to exert and endure physical force. You
        might use it to:
        <ul>
          <li>Swing a melee weapon</li>
          <li>Grapple a creature</li>
          <li>Break down a door</li>
          <li>Lift a heavy object</li>
        </ul>
        <br />
        Strength is aligned with Stone magic—the force of unyielding power, drawn from the earth itself.
      </>
    ),
  },
  {
    key: "AGI",
    name: "Agility",
    description: (
      <>
        Agility reflects your ability to move quickly and precisely. You might
        use it to:
        <ul>
          <li>Shoot a ranged weapon</li>
          <li>Escape a grapple</li>
          <li>Sneak past a creature</li>
          <li>Pick a pocket</li>
        </ul>
        <br />
        Agility is aligned with Sky magic—the force of unstoppable speed, drawn from the movement of air.
      </>
    ),
  },
  {
    key: "INT",
    name: "Knowledge",
    description: (
      <>
        Knowledge reflects your ability to recall and apply specialized
        knowledge. You might use it to:
        <ul>
          <li>Heal a creature</li>
          <li>Repair a machine</li>
          <li>Craft an item</li>
          <li>Recall historical information</li>
        </ul>
        <br />
        Knowledge is aligned with Sun magic—the force of intellectual truth, drawn from the clarity of light.
      </>
    ),
  },
  {
    key: "CHA",
    name: "Charisma",
    description: (
      <>
        Charisma reflects your ability to persuade and deceive others. You might
        use it to:
        <ul>
          <li>Persuade a creature</li>
          <li>Tell a convincing lie</li>
          <li>Charm a creature</li>
          <li>Perform for an audience</li>
        </ul>
        <br />
        Charisma is aligned with Moon magic—the force of mental manipulation, drawn from the mystery of darkness.
      </>
    ),
  },
  {
    key: "WIS",
    name: "Instinct",
    description: (
      <>
        Instinct reflects your ability to notice subtle details and make
        intuitive decisions. You might use it to:
        <ul>
          <li>Search a room for clues</li>
          <li>Tell if a creature is lying</li>
          <li>Find a safe path</li>
          <li>Sense the presence of magic</li>
        </ul>
        <br />
        Instinct is aligned with Spirit magic—the force of life and death, drawn from the bridge to the afterlife.
      </>
    ),
  },
];
