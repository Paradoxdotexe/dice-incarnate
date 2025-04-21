import { CharacterClassFeature } from '../collections/CharacterClassFeature';

export const CHARACTER_CLASS_FEATURES: CharacterClassFeature[] = [
  // STR - Strong
  {
    key: 'STR_GENERAL_F2',
    name: 'Aggressor',
    description:
      '*Strike first, strike hard.* You add your Strength bonus to your Initiative bonus.',
    order: 1,
    attributeRequirement: 10,
  },
  {
    key: 'STR_GENERAL_F1',
    name: 'Big Brother',
    description:
      '*Pick on someone your own size!* When a creature within 5ft is hit with an attack, you can leap in to switch places.',
    order: 2,
    attributeRequirement: 10,
  },
  {
    key: 'STR_GENERAL_F4',
    name: 'Pack Mule',
    description: '*Let me carry that for you!* Your carrying capacity is doubled.',
    order: 3,
    attributeRequirement: 10,
  },
  {
    key: 'STR_GENERAL_F5',
    name: 'Iron Grip',
    description: "*You're mine now.* You have advantage on Strength checks related to grappling.",
    order: 4,
    attributeRequirement: 15,
  },
  {
    key: 'STR_GENERAL_F3',
    name: 'Heavy Hitter',
    description:
      '*I was here first!* If you consume no movement on your turn, your melee attack damage is increased by one die.',
    order: 5,
    attributeRequirement: 15,
  },
  {
    key: 'STR_GENERAL_F7',
    name: 'Intimidating',
    description:
      "*I wouldn't do that if I was you.* Once per Rest, you can roll a Strength check in place of a Charisma check.",
    order: 6,
    attributeRequirement: 15,
  },
  {
    key: 'STR_GENERAL_F6',
    name: 'Big Hands',
    description:
      '*You know what they say about big hands?* You can wield two-handed weapons with one hand.',
    order: 7,
    attributeRequirement: 20,
  },
  // AGI - Agile
  {
    key: 'AGI_GENERAL_F5',
    name: 'Sneaky',
    description:
      '*Must have been the wind.* You have advantage on Agility checks to move stealthily.',
    order: 1,
    attributeRequirement: 10,
  },
  {
    key: 'AGI_GENERAL_F4',
    name: 'Righting Reflex',
    description:
      '*Cats always land on their feet.* When you fall, you land on your feet and your fall damage is reduced by one die.',
    order: 2,
    attributeRequirement: 10,
  },
  {
    key: 'AGI_GENERAL_F1',
    name: 'Spotter',
    description:
      '*Need a hand?* When you succeed on an Agility check, you can help one other creature immediately succeed on the same check.',
    order: 3,
    attributeRequirement: 10,
  },
  {
    key: 'AGI_GENERAL_F2',
    name: 'Nimble',
    description: '*Watch your step!* You are not impeded by Rough Terrain.',
    order: 4,
    attributeRequirement: 15,
  },
  {
    key: 'AGI_GENERAL_F3',
    name: 'Slippery',
    description: '*Missed me!* If an enemy misses an attack against you, you can immediately move 5ft without incurring an opportunity attack.',
    order: 5,
    attributeRequirement: 15,
  },
  {
    key: 'AGI_GENERAL_F6',
    name: 'Quick Draw',
    description: '*Too slow!* You can draw your weapon on the first turn of combat for 0 Mana.',
    order: 6,
    attributeRequirement: 15,
  },
  // INT - Knowledgable
  {
    key: 'INT_GENERAL_F1',
    name: 'Historian',
    description:
      "*I've read about this before.* You have advantage on Knowledge checks to recall history and comprehend written information.",
    order: 1,
    attributeRequirement: 10,
  },
  {
    key: 'INT_GENERAL_F2',
    name: 'Archaeologist',
    description:
      '*This must be 100 years old...* You have advantage on Knowledge checks to ascertain who built a structure and why.',
    order: 2,
    attributeRequirement: 10,
  },
  {
    key: 'INT_GENERAL_F6',
    name: 'Field Medic',
    description:
      "*It's just a flesh wound.* You have advantage on Knowledge checks to stabilize incapacitated creatures.",
    order: 3,
    attributeRequirement: 10,
  },
  {
    key: 'INT_GENERAL_F3',
    name: 'Mastermind',
    description:
      '*Wait, I got a plan!* You can forgo your first turn of combat to give your allies advantage on all skill checks during their first turn.',
    order: 4,
    attributeRequirement: 15,
  },
  {
    key: 'INT_GENERAL_F4',
    name: 'Mind Over Matter',
    description:
      '*Work smarter, not harder.* Once per Rest, you can roll a Knowledge check in place of a Strength or Agility check.',
    order: 5,
    attributeRequirement: 15,
  },
  {
    key: 'INT_GENERAL_F5',
    name: 'Surgeon General',
    description:
      "*That's it, I'll do it!* Even when you are incapacitated with a Fatal Injury, you can roll a Knowledge check to stabilize yourself.",
    order: 6,
    attributeRequirement: 15,
  },
  // CHA - Charismatic
  {
    key: 'CHA_GENERAL_F2',
    name: 'Method Actor',
    description:
      "*I don't read the script. The script reads me.* You have advantage on Charisma checks while trying to impersonate someone else.",
    order: 1,
    attributeRequirement: 10,
  },
  {
    key: 'CHA_GENERAL_F1',
    name: 'Local Legend',
    description:
      '*You might of heard of me...* You have advantage on Charisma checks against commoners.',
    order: 2,
    attributeRequirement: 10,
  },
  {
    key: 'CHA_GENERAL_F4',
    name: 'Silver Tongue',
    description:
      "*Let's keep this between us...* You have advantage on Charisma checks in 1-on-1 conversations.",
    order: 3,
    attributeRequirement: 10,
  },
  {
    key: 'CHA_GENERAL_F6',
    name: 'Inspiring Leader',
    description:
      "*Trust me. You don't want to do this.* You can forgo your first turn of combat to give enemies disadvantage on all skill checks during their first turn.",
    order: 4,
    attributeRequirement: 15,
  },
  {
    key: 'CHA_GENERAL_F5',
    name: 'Aura of Confidence',
    description:
      '*Looks like my confidence is contagious.* Allies within 10ft of you have resistance to Psychic magic.',
    order: 5,
    attributeRequirement: 15,
  },
  {
    key: 'CHA_GENERAL_F3',
    name: 'Commanding Voice',
    description:
      '*Get your ass back up!* You can roll a Charisma check to stabilize a creature with a Non-Fatal Injury if they can hear you.',
    order: 6,
    attributeRequirement: 15,
  },
  // WIS - Instinctual
  {
    key: 'WIS_GENERAL_F2',
    name: 'Pathfinder',
    description:
      "*It's definitely this way.* You have advantage on Instinct checks to navigate natural environments.",
    order: 1,
    attributeRequirement: 10,
  },
  {
    key: 'WIS_GENERAL_F5',
    name: 'Magician',
    description:
      "*I sense something powerful nearby.* When within 15ft of a magical source, you can detect the magic's presence and ascertain its type.",
    order: 2,
    attributeRequirement: 10,
  },
  {
    key: 'WIS_GENERAL_F4',
    name: 'Detective',
    description:
      '*Nothing stays hidden forever.* You have advantage on Instinct checks to search for clues.',
    order: 3,
    attributeRequirement: 10,
  },
  {
    key: 'WIS_GENERAL_F1',
    name: 'Sixth Sense',
    description: "*Did you hear that?* You can't be surprised during combat.",
    order: 4,
    attributeRequirement: 15,
  },
  {
    key: 'WIS_GENERAL_F3',
    name: 'Words of Wisdom',
    description:
      '*Trust me, I know how this plays out.* Once per Rest, you can roll an Instinct check in place of a Charisma check.',
    order: 5,
    attributeRequirement: 15,
  },
  {
    key: 'WIS_GENERAL_F6',
    name: 'Soul Searcher',
    description:
      '*To be everywhere, is to be nowhere.* You have advantage on all checks related to Spirit magic.',
    order: 6,
    attributeRequirement: 15,
  },
  {
    key: 'WIS_GENERAL_F7',
    name: 'Lucky',
    description:
      '*Mama needs a new pair of shoes!* Choose a lucky number between 2 and 19. When you roll this number, it acts as a natural 20.',
    order: 7,
    attributeRequirement: 20,
  },
  // AGI - Storm Sage
  {
    key: 'AGI_SAGE1_F1',
    name: 'Tempest Strike',
    description:
      'Roll a DC 5 Instinct check. On a success, spend 1 Mana to channel wind into a weapon attack. That attack deals an additional 1d12 Sky damage.',
    order: 1,
  },
  {
    key: 'AGI_SAGE1_F2',
    name: 'Tempest Surge',
    description:
      'Roll an Instinct check to surge wind towards a creature within 15ft. If you hit their WC, spend 2 Mana. That creature takes 2d12 Sky damage and is pushed back 15ft.',
    order: 2,
  },
  {
    key: 'AGI_SAGE1_F3',
    name: 'Tempest Storm',
    description:
      'Roll an Instinct check to envelope a creature within 60ft in a wind vortex. If you hit their WC, spend 3 Mana. That creature takes 2d12 Sky damage and loses 1 Mana.',
    order: 3,
  },
  {
    key: 'AGI_SAGE1_F4',
    name: 'Veil of the Storm',
    description:
      'The winds protect you with a swirling barrier. Ranged attacks against you have disadvantage.',
    order: 4,
  },
  {
    key: 'AGI_SAGE1_F5',
    name: 'Grace of the Storm',
    description: 'You fall at half the rate of normal. Your fall damage is reduced by half.',
    order: 5,
  },
  {
    key: 'AGI_SAGE1_F6',
    name: 'Eye of the Storm',
    description:
      'If you spend 0 Mana three turns in a row, the calm of the wind restores you. You heal 1d6 hit points.',
    order: 6,
  },
  // WIS - Beast Druid
  {
    key: 'WIS_DRUID1_F1',
    name: 'Attack Beast',
    description:
      'Roll a DC 5 Instinct check. On a success, spend 1 Mana to command your tamed beast to attack a creature within 30ft. That creature takes 1d12 damage and can be dragged 5ft in any direction.',
    order: 1,
  },
  {
    key: 'WIS_DRUID1_F2',
    name: 'Guard Beast',
    description:
      'Roll a DC 10 Instinct check. On a success, spend 2 Mana to command your tamed beast to defend you. The next time you are hit with a melee attack, your tamed beast will deflect 2d12 damage.',
    order: 2,
  },
  {
    key: 'WIS_DRUID1_F3',
    name: 'Mercy Beast',
    description:
      'Roll a DC 15 Instinct check. On a success, spend 3 Mana to command your tamed beast to help an incapacitated creature within 60ft. That creature is stabilized with 3d12 health.',
    order: 3,
  },
  {
    key: 'WIS_DRUID1_F4',
    name: 'Beast Speech',
    description:
      'You can communicate with beasts through their unique visual and auditory cues. You are effectively limited to single words or basic phrases, such as "threat" or "go that way".',
    order: 4,
  },
  {
    key: 'WIS_DRUID1_F5',
    name: 'Beast Sight',
    description: 'You can look through the eyes of your tamed beast while they are within 120ft.',
    order: 5,
  },
  {
    key: 'WIS_DRUID1_F6',
    name: 'Beast Shape',
    description:
      'You can transform into the same animal as your tamed beast for up to 1 hour. You can only do this once per Rest.',
    order: 6,
  },
  {
    key: 'WEAPON_SWORD_F1',
    name: 'Sword Strike',
    description:
      'Roll a Strength check to attack a creature within 5ft. If you hit their AC, they take 1d6 Slashing damage.',
    order: 1,
  },
  {
    key: 'WEAPON_SWORD_R1_STONE',
    name: 'Rune of Stone Edge',
    description: 'This weapon deals max damage against objects.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_SWORD_R2_STONE',
    name: 'Rune of Stone Smite',
    description:
      "Spend 1 Mana to turn this weapon's blade into diamond. Your next attack deals max damage.",
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_STONE',
    name: 'Rune of Stone Stance',
    description: 'While wielding this weapon in combat, your AC is increased by 1.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R4_STONE',
    name: 'Rune of Stone Surge',
    description:
      'Once per Rest, you can roll a Strength check to shatter the earth under all creatures within 5ft. If you hit their WC, they take 1d12 Stone damage and are knocked Prone.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_SWORD_R5_STONE',
    name: 'Rune of Stone Splitting',
    description:
      'This weapon becomes "Stone Splitter". It requires two hands to wield and deals an additional 1d6 Stone damage on each hit.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_SWORD_R1_SKY',
    name: 'Rune of Sky Edge',
    description: 'This weapon does not require an Action to draw or stow.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_SWORD_R2_SKY',
    name: 'Rune of Sky Smite',
    description:
      'Spend 1 Mana to make this weapon weightless. Your next attack does not consume an Action.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_SKY',
    name: 'Rune of Sky Stance',
    description: 'While wielding this weapon in combat, your Movement Speed is increased by 5ft.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R4_SKY',
    name: 'Rune of Sky Surge',
    description:
      'Once per Rest, you can roll an Agility check to burst forward up to 30ft. If you hit the WC of any creatures in your path, they take 1d12 Sky damage and are knocked Prone.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_SWORD_R5_SKY',
    name: 'Rune of Sky Slicing',
    description:
      'This weapon becomes "Sky Slice". If you consumed Mana this turn, you can attack once with this weapon without consuming an Action.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_SWORD_R1_SUN',
    name: 'Rune of Sun Edge',
    description: 'This weapon negates resistance to Slashing damage.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_SWORD_R2_SUN',
    name: 'Rune of Sun Smite',
    description:
      "Spend 1 Mana to guide this weapon towards a creature's weakness. Your next attack is a critical hit.",
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_SUN',
    name: 'Rune of Sun Stance',
    description:
      'While wielding this weapon, you can better read the fighting style of your opponent. After being hit by a creature, you have advantage on your next attack against them.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R4_SUN',
    name: 'Rune of Sun Surge',
    description:
      'Once per Rest, you can roll a DC 15 Knowledge check. On a success, the next skill check made by you or your allies have advantage.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_SWORD_R5_SUN',
    name: 'Rune of Sun Vision',
    description:
      'This weapon becomes "Sun Spot". While wielding this weapon, the penalties of Blinded, Obscured, and Flanked do not affect you.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_SWORD_R1_MOON',
    name: 'Rune of Moon Edge',
    description:
      'This weapon is rendered invisible until your first attack in combat. While your weapon is invisible, attacks are guaranteed to hit.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_SWORD_R2_MOON',
    name: 'Rune of Moon Smite',
    description:
      'Spend 1 Mana to turn this weapon invisible. Your next attack is guaranteed to hit.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_MOON',
    name: 'Rune of Moon Stance',
    description: 'While wielding this weapon, opportunity attacks against you have disadvantage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R4_MOON',
    name: 'Rune of Moon Surge',
    description:
      'Once per Rest, you can roll a DC 15 Charisma check to reappear behind a creature within 15ft. If you hit their WC, the take 1d12 Moon damage.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_SWORD_R5_MOON',
    name: 'Rune of Moon Shadow',
    description:
      'This weapon becomes "Moon Shadow". As an Action, you can render yourself partially invisible. Until you move, you are Obscured.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_SWORD_R1_SPIRIT',
    name: 'Rune of Spirit Edge',
    description:
      'This weapon is a vessel for lost souls. Creatures killed by this weapon cannot be revived or resurrected.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_SWORD_R2_SPIRIT',
    name: 'Rune of Spirit Smite',
    description:
      'Spend 1 Mana to imbue this weapon with Spirit magic. Your next attack deals Spirit damage instead of Slashing damage. If you kill a creature with this attack, you gain Invulnerability for one round.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_SPIRIT',
    name: 'Rune of Spirit Stance',
    description:
      'While wielding this weapon, the damage applied to allies within 5ft is redirected to you instead.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R4_SPIRIT',
    name: 'Rune of Spirit Surge',
    description:
      'Once per Rest, you can roll a DC 15 Instinct check. On a success, you consume a soul captured by this weapon and heal 1d12 hit points.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_SWORD_R5_SPIRIT',
    name: 'Rune of the Spirit Eater',
    description:
      'This weapon becomes "Spirit Eater". When this weapon deals Spirit damage, you heal the same amount of damage dealt.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_BOW_F1',
    name: 'Bow Strike',
    description:
      'Roll an Agility check to attack a creature between 10ft and 60ft. If you hit their AC, they take 1d6 Piercing damage.',
    order: 1,
  },
  {
    key: 'WEAPON_STAFF_F1',
    name: 'Staff Strike',
    description:
      'Roll an Agility check to attack a creature within 10ft. If you hit their AC, they take 1d6 Bludgeoning damage.',
    order: 1,
  },
  {
    key: 'ARMOR_HEAVY_F1',
    name: 'Heavy Armor',
    description:
      'Your Armor Class is increased by [2*A] and your Movement Speed is reduced by 5ft.',
    order: 1,
  },
  {
    key: 'ARMOR_HEAVY_F2',
    name: 'Soul Steel',
    description: 'You have resistance to Bludgeoning damage.',
    order: 2,
  },
  {
    key: 'WEAPON_HEAVY_R1_STONE',
    name: 'Rune of Stone Plate',
    description: 'Your Armor Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_HEAVY_R2_STONE',
    name: 'Rune of Stone Shell',
    description:
      'Spend 1 Mana to harden this armor. You have resistance against the next attack that hits you.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_HEAVY_R3_STONE',
    name: 'Rune of Stone Anchor',
    description: 'While wearing this armor, you cannot be moved by another creature.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_HEAVY_R4_STONE',
    name: 'Rune of Stone Charge',
    description:
      'Once per Rest, you can turn this armor into solid diamond. Until your next turn, you gain Invulnerability but cannot move.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_HEAVY_R5_STONE',
    name: 'Rune of Stone Spines',
    description:
      'This armor becomes "Stone Spine". When a creature hits you with a melee attack, this armor deals half the amount of damage back on them as Stone damage.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_HEAVY_R1_SKY',
    name: 'Rune of Sky Plate',
    description: 'This armor no longer reduces your Movement Speed.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_HEAVY_R2_SKY',
    name: 'Rune of Sky Shell',
    description:
      'Spend 1 Mana to imbue this armor with Sky magic. Until your next turn, your movement does not prompt opportunity attacks and your Movement Speed is doubled.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_HEAVY_R3_SKY',
    name: 'Rune of Sky Anchor',
    description: 'While wearing this armor, you cannot be knocked Prone.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_HEAVY_R4_SKY',
    name: 'Rune of Sky Charge',
    description:
      'Once per Rest, you can leap 10ft into the air. When you land, all creatures within 5ft take 1d6 Sky damage.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_HEAVY_R5_SKY',
    name: 'Rune of Sky Storm',
    description:
      'This armor becomes "Sky Storm". When a creature ends its turn within 5ft of you, roll an Agility check. If you hit their WC, they take 1d6 Sky damage and are (optionally) pushed back 5ft.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_HEAVY_R1_SUN',
    name: 'Rune of Sun Plate',
    description: 'Your Ward Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_HEAVY_R2_SUN',
    name: 'Rune of Sun Shell',
    description:
      'Spend 1 Mana to blind creatures within 5ft with searing sunlight. Roll a Knowledge check. If you hit their WC, they are Blinded until the end of their next turn.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_HEAVY_R3_SUN',
    name: 'Rune of Sun Anchor',
    description: 'While wearing this armor, you can see through illusions created by Moon magic.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_HEAVY_R4_SUN',
    name: 'Rune of Sun Charge',
    description:
      'Once per Rest, you can determine the AC, WC, and HP of all creatures within 15ft.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_HEAVY_R5_SUN',
    name: 'Rune of the Sun Seer',
    description:
      'This armor becomes "Sun Seer". While wearing this armor, you cannot be Blinded or Flanked.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_HEAVY_R1_MOON',
    name: 'Rune of Moon Plate',
    description:
      'This armor is rendered invisible until you are first attacked in combat. While your armor is invisible, attacks are guaranteed to miss.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_HEAVY_R2_MOON',
    name: 'Rune of Moon Shell',
    description: 'Spend 1 Mana to blur your form. Until you move, you are Obscured.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_HEAVY_R3_MOON',
    name: 'Rune of Moon Anchor',
    description:
      'While wearing this armor, your movement is distorted. Opportunity attacks against you have disadvantage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_HEAVY_R4_MOON',
    name: 'Rune of Moon Charge',
    description:
      'Once per Rest, you can create a flickering illusion of yourself within 15ft. This illusion has the same AC and WC as you, but only one hit point.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_HEAVY_R5_MOON',
    name: 'Rune of Moon Mirage',
    description:
      'This armor becomes "Moon Mirage". When your illusion is destroyed, you can immediately create a new one.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_HEAVY_R1_SPIRIT',
    name: 'Rune of Spirit Plate',
    description:
      'This armor is a bridge between the Spirit Plane and Natural Plane. When you are incapacitated, roll an Instinct check. On a natural 20, you return to 1 hit point.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_HEAVY_R2_SPIRIT',
    name: 'Rune of Spirit Shell',
    description:
      'Spend 1 Mana to imbue this armor with Spirit magic. The next attack against you heals you for half the amount of damage that would have been dealt.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_HEAVY_R3_SPIRIT',
    name: 'Rune of Spirit Anchor',
    description:
      'When you are reduced to 0 hit points, this armor releases a surge of Spirit energy. All enemies within 5ft take 1d12 Spirit damage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_HEAVY_R4_SPIRIT',
    name: 'Rune of Spirit Charge',
    description:
      'Once per Rest, you can consume the soul of an enemy that dies within 5ft. You heal 1d12 hit points.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_HEAVY_R5_SPIRIT',
    name: 'Rune of Spirit Mooring',
    description:
      'This armor becomes "Spirit Moor". When you are reduced to 0 hit points for the first time in a combat, you return to 1 hit point with Invulnerability until the end of your next turn.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_LIGHT_F1',
    name: 'Light Armor',
    description: 'Your Armor Class is increased by [A].',
    order: 1,
  },
  {
    key: 'ARMOR_LIGHT_F2',
    name: 'Simple Ward',
    description: 'Your Ward Class is increased by [A].',
    order: 2,
  },
  {
    key: 'ARMOR_LIGHT_F3',
    name: 'Soul Hide',
    description: 'You have resistance to Slashing and Piercing damage.',
    order: 3,
  },
  {
    key: 'ARMOR_NONE_F1',
    name: 'Supreme Ward',
    description: 'Your Ward Class is increased by [2*A].',
    order: 1,
  },
  {
    key: 'ARMOR_NONE_F2',
    name: 'Stone Magic Resistance',
    description: 'You have resistance to Stone magic damage.',
    order: 2,
  },
  {
    key: 'ARMOR_NONE_F3',
    name: 'Sky Magic Resistance',
    description: 'You have resistance to Sky magic damage.',
    order: 3,
  },
  {
    key: 'ARMOR_NONE_F4',
    name: 'Sun Magic Resistance',
    description: 'You have resistance to Sun magic damage.',
    order: 4,
  },
  {
    key: 'ARMOR_NONE_F5',
    name: 'Moon Magic Resistance',
    description: 'You have resistance to Moon magic damage.',
    order: 5,
  },
  {
    key: 'ARMOR_NONE_F6',
    name: 'Spirit Magic Resistance',
    description: 'You have resistance to Spirit magic damage.',
    order: 6,
  },
];
