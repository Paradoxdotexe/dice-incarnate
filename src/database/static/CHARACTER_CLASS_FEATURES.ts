import { CharacterClassFeature } from "../collections/CharacterClassFeature";

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
    description:
      "*Think fast!* You can draw and switch weapons without a Bonus Action.",
    order: 6,
  },
  // INT - Intelligent
  {
    key: "INT_GENERAL_F1",
    name: "Historian",
    description:
      "*I've read about this before.* You have advantage on Intelligence checks to recall history and comprehend written information.",
    order: 1,
  },
  {
    key: "INT_GENERAL_F2",
    name: "Arcane Scholar",
    description:
      "*I sense something powerful nearby.* When within 10ft of a magical source, you can detect the magic's presence and ascertain its type.",
    order: 2,
  },
  {
    key: "INT_GENERAL_F3",
    name: "Mastermind",
    description:
      "*Wait, I got a plan!* You can forgo your first turn of combat to give your allies advantage on all skill checks during their first turn.",
    order: 3,
  },
  {
    key: "INT_GENERAL_F4",
    name: "Mind Over Matter",
    description:
      "*Work smarter, not harder.* Once per Rest, you can roll an Intelligence check in place of a Strength or Agility check.",
    order: 4,
  },
  {
    key: "INT_GENERAL_F5",
    name: "Surgeon General",
    description:
      "*That's it, I'll do it!* Even when you are incapacitated with a Fatal Injury, you can roll an Intelligence check to stabilize yourself.",
    order: 5,
  },
  {
    key: "INT_GENERAL_F6",
    name: "Field Medic",
    description:
      "*It's just a flesh wound.* You have advantage on Intelligence checks to stabilize incapacitated creatures.",
    order: 6,
  },
  // CHA - Charming
  {
    key: "CHA_GENERAL_F1",
    name: "Local Legend",
    description:
      "*You might of heard of me...* You have advantage on Charisma checks against commoners.",
    order: 1,
  },
  {
    key: "CHA_GENERAL_F2",
    name: "Method Actor",
    description:
      "*I don't read the script. The script reads me.* You have advantage on Charisma checks while trying to impersonate someone else.",
    order: 2,
  },
  {
    key: "CHA_GENERAL_F3",
    name: "Commanding Voice",
    description:
      "*Get your ass back up!* You can roll a Charisma check to stabilize a creature with a Non-Fatal Injury.",
    order: 3,
  },
  {
    key: "CHA_GENERAL_F4",
    name: "Silver Tongue",
    description:
      "*Let's keep this between us...* You have advantage on Charisma checks in 1-on-1 conversations.",
    order: 4,
  },
  {
    key: "CHA_GENERAL_F5",
    name: "Aura of Confidence",
    description:
      "*Looks like my confidence is contagious.* Allies within 10ft of you have resistance to Psychic magic.",
    order: 5,
  },
  {
    key: "CHA_GENERAL_F6",
    name: "Inspiring Leader",
    description:
      "*Trust me. You don't want to do this.* You can forgo your first turn of combat to give enemies disadvantage on all skill checks during their first turn.",
    order: 6,
  },
];
