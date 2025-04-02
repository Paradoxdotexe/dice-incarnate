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
  {
    key: "STR_GENERAL_F7",
    name: "Intimidating",
    description:
      "*I wouldn't do that if I was you.* Once per Rest, you can roll a Strength check in place of a Charisma check.",
    order: 7,
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
      "*Must have been the wind.* You have advantage on Agility checks to move stealthily.",
    order: 5,
  },
  {
    key: "AGI_GENERAL_F6",
    name: "Quick Draw",
    description:
      "*Too slow!* You can draw your weapon on the first turn of combat for 0 Mana.",
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
  // WIS - Insightful
  {
    key: "WIS_GENERAL_F1",
    name: "Sixth Sense",
    description: "*Did you hear that?* You can't be surprised during combat.",
    order: 1,
  },
  {
    key: "WIS_GENERAL_F2",
    name: "Pathfinder",
    description:
      "*It's definitely this way.* You have advantage on Insight checks to navigate natural environments.",
    order: 2,
  },
  {
    key: "WIS_GENERAL_F3",
    name: "Words of Wisdom",
    description:
      "*Trust me, I know how this plays out.* Once per Rest, you can roll an Insight check in place of a Charisma check.",
    order: 3,
  },
  {
    key: "WIS_GENERAL_F4",
    name: "Detective",
    description:
      "*Nothing stays hidden forever.* You have advantage on Insight checks to search for clues.",
    order: 4,
  },
  {
    key: "WIS_GENERAL_F5",
    name: "Archaeologist",
    description:
      "*This must be 100 years old...* You have advantage on Insight checks to ascertain who built a structure and why.",
    order: 5,
  },
  {
    key: "WIS_GENERAL_F6",
    name: "Soul Searcher",
    description:
      "*To be everywhere, is to be nowhere.* You have advantage on all checks related to Spirit magic.",
    order: 6,
  },
  // WIS - Storm Sage
  {
    key: "WIS_SAGE1_F1",
    name: "Tempest Strike",
    description:
      "Spend 1 Mana to channel wind into a weapon attack of you or an ally. This attack deals an additional 1d12 damage.",
    order: 1,
  },
  {
    key: "WIS_SAGE1_F2",
    name: "Tempest Surge",
    description:
      "Spend 2 Mana to surge wind towards 2 targets within 15ft. Each target takes 1d12 damage and is pushed back 15ft.",
    order: 2,
  },
  {
    key: "WIS_SAGE1_F3",
    name: "Tempest Storm",
    description:
      "Spend 3 Mana to envelope a target within 60ft in a wind vortex. That target takes 2d12 damage and loses 1 Mana.",
    order: 3,
  },
  {
    key: "WIS_SAGE1_F4",
    name: "Veil of the Storm",
    description:
      "The winds protect you with a swirling barrier. Ranged attacks against you have disadvantage.",
    order: 4,
  },
  {
    key: "WIS_SAGE1_F5",
    name: "Grace of the Storm",
    description:
      "You fall at half the rate of normal. Your fall damage is reduced by half.",
    order: 5,
  },
  {
    key: "WIS_SAGE1_F6",
    name: "Eye of the Storm",
    description:
      "If you spend 0 Mana three turns in a row, the calm of the wind restores you. You heal gain a Healing Surge.",
    order: 6,
  },
  // WIS - Beast Druid
  {
    key: "WIS_DRUID1_F1",
    name: "Attack Beast",
    description:
      "Spend 1 Mana to command your tamed beast to attack a target within 30ft. The target takes 1d12 damage and can be dragged 5ft in any direction.",
    order: 1,
  },
  {
    key: "WIS_DRUID1_F2",
    name: "Guard Beast",
    description:
      "Spend 2 Mana to command your tamed beast to defend you. The next time you are attacked, your tamed beast deals 1d12 damage and deflects up to 1d12 damage.",
    order: 2,
  },
  {
    key: "WIS_DRUID1_F3",
    name: "Mercy Beast",
    description:
      "Spend 3 Mana to command your tamed beast to stabilize an incapacitated ally within 60ft. The ally heals 3d12 HP.",
    order: 3,
  },
  {
    key: "WIS_DRUID1_F4",
    name: "Beast Speech",
    description:
      'You can communicate with beasts through their unique visual and auditory cues. You are effectively limited to single words or basic phrases, such as "threat" or "go that way".',
    order: 4,
  },
  {
    key: "WIS_DRUID1_F5",
    name: "Beast Sight",
    description:
      "You can look through the eyes of your tamed beast while they are within 120ft.",
    order: 5,
  },
  {
    key: "WIS_DRUID1_F6",
    name: "Beast Shape",
    description:
      "You can transform into the same animal as your tamed beast for up to 1 hour. You can only do this once per Rest.",
    order: 6,
  },
  {
    key: "WEAPON_SWORD_F1",
    name: "Sabre Strike",
    description:
      "Roll a Strength check to attack a creature within 5ft. On a success, the target takes 1d6 Slashing damage.",
    order: 1,
  },
  {
    key: "ARMOR_HEAVY_F1",
    name: "Heavy Armor",
    description: "Your Armor Class is increased to [10+2*A].",
    order: 1,
  },
  {
    key: "ARMOR_HEAVY_F2",
    name: "Soul Steel",
    description: "You have resistance to Bludgeoning damage.",
    order: 2,
  },
  {
    key: "ARMOR_LIGHT_F1",
    name: "Light Armor",
    description: "Your Armor Class is increased to [10+1*A].",
    order: 1,
  },
  {
    key: "ARMOR_LIGHT_F2",
    name: "Soul Hide",
    description: "You have resistance to Slashing and Piercing damage.",
    order: 2,
  },
];
