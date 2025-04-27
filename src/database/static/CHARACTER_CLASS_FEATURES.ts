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
    description: '*You never know!* You can carry a second weapon and armor.',
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
    description:
      '*Missed me!* If an enemy misses an attack against you, you can immediately move 5ft without incurring an opportunity attack.',
    order: 5,
    attributeRequirement: 15,
  },
  {
    key: 'AGI_GENERAL_F6',
    name: 'Quick Draw',
    description:
      '*Too slow!* You can draw your weapon on the first turn of combat without an Action.',
    order: 6,
    attributeRequirement: 15,
  },
  // INT - Knowledgeable
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
  {
    key: 'STR_KNIGHT_F1',
    name: 'Valiant Duel',
    description:
      'Roll a DC 5 Strength check to compel a creature within 5ft to duel. On a success, spend 1 Mana. That creature can only attack you on their next turn and attacks with disadvantage.',
    order: 1,
  },
  {
    key: 'STR_KNIGHT_F2',
    name: 'Valiant Defense',
    description:
      'Roll a DC 10 Strength check as a Reaction to parry an incoming melee attack. On a success, spend 2 Mana. You deflect 2d12 damage.',
    order: 2,
  },
  {
    key: 'STR_KNIGHT_F3',
    name: 'Valiant Charge',
    description:
      'Roll a Strength check to charge a creature within 5ft. If you hit their AC, spend 3 Mana. That creature takes 3d12 Bludgeoning damage, is pushed back 5ft, and is knocked Prone.',
    order: 3,
  },
  {
    key: 'STR_KNIGHT_F4',
    name: 'Armor Training',
    description: 'While wearing Heavy Armor or Light Armor, your Armor Class is increased by [A].',
    order: 4,
  },
  {
    key: 'STR_KNIGHT_F5',
    name: 'Martial Training',
    description: 'Your melee attacks deal an additional 1d6 damage.',
    order: 5,
  },
  {
    key: 'STR_KNIGHT_F6',
    name: 'Leadership Training',
    description: 'All allies within 5ft have advantage on attack rolls.',
    order: 6,
  },
  {
    key: 'STR_BARBARIAN_F1',
    name: 'Blood Havoc',
    description:
      'Roll a Strength check to grab and throw a chunk of earth or structure at a creature within 15ft. If you hit their AC, spend 1 Mana. That creature takes 1d12 Bludgeoning damage.',
    order: 1,
  },
  {
    key: 'STR_BARBARIAN_F2',
    name: 'Blood Rage',
    description:
      'Roll a DC 10 Strength check to enter a rage. On a success, spend 2 Mana. Until the end of your next turn, your melee attacks deal an additional 1d12 Bludgeoning damage.',
    order: 2,
  },
  {
    key: 'STR_BARBARIAN_F3',
    name: 'Blood Frenzy',
    description:
      'Roll a DC 15 Strength check to enter a frenzy. On a success, spend 3 Mana. Your Movement Speed is doubled, you gain three Actions, and your melee attacks deal max damage.',
    order: 3,
  },
  {
    key: 'STR_BARBARIAN_F4',
    name: 'Unescapable',
    description: 'Your range for opportunity attacks is extended to 10ft.',
    order: 4,
  },
  {
    key: 'STR_BARBARIAN_F5',
    name: 'Unkillable',
    description: 'Your hit points is increased by [10*A].',
    order: 5,
  },
  {
    key: 'STR_BARBARIAN_F6',
    name: 'Unstoppable',
    description: 'When you are Bloodied, your melee attacks have advantage.',
    order: 6,
  },
  {
    key: 'AGI_SAGE_F1',
    name: 'Tempest Strike',
    description:
      'Roll a DC 5 Instinct check to channel wind into a weapon attack. On a success, spend 1 Mana. That attack deals an additional 1d12 Sky damage.',
    order: 1,
  },
  {
    key: 'AGI_SAGE_F2',
    name: 'Tempest Surge',
    description:
      'Roll an Instinct check to surge wind towards a creature within 15ft. If you hit their MC, spend 2 Mana. That creature takes 2d12 Sky damage and is pushed back 15ft.',
    order: 2,
  },
  {
    key: 'AGI_SAGE_F3',
    name: 'Tempest Storm',
    description:
      'Roll an Instinct check to envelope a creature within 60ft in a wind vortex. If you hit their MC, spend 3 Mana. That creature takes 2d12 Sky damage, loses 1 Mana, and is Blinded until your next turn.',
    order: 3,
  },
  {
    key: 'AGI_SAGE_F4',
    name: 'Veil of the Storm',
    description:
      'The winds protect you with a swirling barrier. Ranged attacks against you have disadvantage.',
    order: 4,
  },
  {
    key: 'AGI_SAGE_F5',
    name: 'Grace of the Storm',
    description: 'You fall at half the rate of normal. Your fall damage is reduced by half.',
    order: 5,
  },
  {
    key: 'AGI_SAGE_F6',
    name: 'Eye of the Storm',
    description:
      'If you spend 0 Mana three turns in a row, the calm of the wind restores you. You heal 1d6 hit points.',
    order: 6,
  },
  {
    key: 'AGI_RANGER_F1',
    name: "Hunter's Mark",
    description:
      'Roll a DC 5 Agility check to mark a creature within 60ft as your quarry. On a success, spend 1 Mana. Until that creature is dead, your ranged attacks against them deal an additional 1d6 Sky damage.',
    order: 1,
  },
  {
    key: 'AGI_RANGER_F2',
    name: "Hunter's Headshot",
    description:
      'Roll an Agility check to focus a ranged attack against a creature within range. On a success, spend 2 Mana. That creature takes 2d12 Sky damage.',
    order: 2,
  },
  {
    key: 'AGI_RANGER_F3',
    name: "Hunter's Barrage",
    description:
      'Roll a DC 15 Agility check to knock your bow with multiple arrows. On a success, spend 3 Mana. You gain four Actions and your ranged attacks are guaranteed to hit.',
    order: 3,
  },
  {
    key: 'AGI_RANGER_F4',
    name: 'Survival Shelter',
    description:
      'When resting in an Adventuring Camp, you get the bonus of Simple Lodging. You can lend this bonus to one other creature.',
    order: 4,
  },
  {
    key: 'AGI_RANGER_F5',
    name: 'Survival Tonic',
    description:
      'Once per Rest, you can boost your senses temporarily. You have advantage on Agility and Instinct checks for the next 10 minutes.',
    order: 5,
  },
  {
    key: 'AGI_RANGER_F6',
    name: 'Survival Salve',
    description: 'Once per Rest, you can heal you or another creature 1d12 hit points.',
    order: 6,
  },
  {
    key: 'INT_MAGE_F1',
    name: 'Solar Shield',
    description:
      'Roll a DC 5 Knowledge check to create a magical shield around you or another creature within 30ft. On a success, spend 1 Mana. The shield deflects 1d12 damage from the next attack against the creature.',
    order: 1,
  },
  {
    key: 'INT_MAGE_F2',
    name: 'Solar Ward',
    description:
      "Roll a DC 10 Knowledge check to create a magical barrier around you or another creature within 30ft. On a success, spend 2 Mana. The barrier increases the creature's AC by 2 and MC by 4 until the end of combat.",
    order: 2,
  },
  {
    key: 'INT_MAGE_F3',
    name: 'Solar Sanctum',
    description:
      'Roll a DC 15 Knowledge check to create a magical dome around you with a 10ft radius. On a success, spend 3 Mana. The dome prevents all magic except yours from passing through it. It dissipates after you move.',
    order: 3,
  },
  {
    key: 'INT_MAGE_F4',
    name: 'Gift of Light',
    description: "You start combat with two additional Mana if you're in direct sunlight.",
    order: 4,
  },
  {
    key: 'INT_MAGE_F5',
    name: 'Tether of Light',
    description:
      'If a creature being shielded by you is incapacitated, you can attempt to stabilize them from wherever you are.',
    order: 5,
  },
  {
    key: 'INT_MAGE_F6',
    name: 'Warmth of Light',
    description:
      'If your Solar Sanctum contains no enemies on your turn, all allies within it heal 1d6 hit points.',
    order: 6,
  },
  {
    key: 'INT_MANCER_F1',
    name: 'Arcane Grenade',
    description:
      'Roll a DC 5 Knowledge check to construct and throw a magical grenade up to 30ft. On a success, spend 1 Mana. The grenade deals 1d6 Sun damage to all creatures within 5ft.',
    order: 1,
  },
  {
    key: 'INT_MANCER_F2',
    name: 'Arcane Turret',
    description:
      'Roll a DC 10 Knowledge check to construct a magical turret. On a success, spend 2 Mana. On your turn, the turret can deal 1d12 Sun damage to a creature within 15ft. It has an AC and MC of 15 and deconstructs after taking 1 damage.',
    order: 2,
  },
  {
    key: 'INT_MANCER_F3',
    name: 'Arcane Automaton',
    description:
      'Roll a DC 15 Knowledge check to construct a magical automaton. On a success, spend 3 Mana. On your turn, the automaton can move 15ft and deal 1d12 Sun damage to a creature within 5ft. It has an AC and MC of 20 and deconstructs after taking 1 damage.',
    order: 3,
  },
  {
    key: 'INT_MANCER_F4',
    name: 'Grappler Blueprint',
    description:
      'Once per Rest, you can construct a magical grappling line that can ascend a creature up to 60ft.',
    order: 4,
  },
  {
    key: 'INT_MANCER_F5',
    name: 'Drone Blueprint',
    description:
      'Once per Rest, you can construct a magical floating drone. You can see and hear through the drone up to 120ft away. It requires a DC 20 Instinct check to detect.',
    order: 5,
  },
  {
    key: 'INT_MANCER_F6',
    name: 'Masterkey Blueprint',
    description: 'Once per Rest, you can construct a magical key that can open any lock.',
    order: 6,
  },
  {
    key: 'CHA_HERALD_F1',
    name: 'Voice of Power',
    description:
      "Roll a DC 5 Charisma check to empower an ally within 30ft. On a success, spend 1 Mana. On that ally's next attack, they deal an additional 1d12 damage.",
    order: 1,
  },
  {
    key: 'CHA_HERALD_F2',
    name: 'Voice of Inspiration',
    description:
      'Roll a DC 10 Charisma check to inspire an ally within 30ft. On a success, spend 2 Mana. That ally gains 2 Mana.',
    order: 2,
  },
  {
    key: 'CHA_HERALD_F3',
    name: 'Voice of Command',
    description:
      'Roll a DC 15 Charisma check to command an ally within 30ft. On a success, spend 3 Mana. On their next turn, that ally gains four Actions that have advantage.',
    order: 3,
  },
  {
    key: 'CHA_HERALD_F4',
    name: 'Diplomatic Relations',
    description: 'You have advantage on Charisma and Instinct checks to diffuse conflict.',
    order: 4,
  },
  {
    key: 'CHA_HERALD_F5',
    name: 'Diplomatic Immunity',
    description: 'Before you attack in combat, all attacks against you have disadvantage.',
    order: 5,
  },
  {
    key: 'CHA_HERALD_F6',
    name: 'Diplomatic Security',
    description: 'All allies within 5ft deal an additional 1d6 damage on melee attacks.',
    order: 6,
  },
  {
    key: 'CHA_CHANTER_F1',
    name: 'Mind Charm',
    description:
      'Roll a Charisma check to charm up to two creatures within 15ft. If you hit their MC, spend 1 Mana. Until the end of their next turn, those creatures regard you as an ally.',
    order: 1,
  },
  {
    key: 'CHA_CHANTER_F2',
    name: 'Mind Cloud',
    description:
      'Roll a Charisma check to confuse a creature within 15ft. If you hit their MC, spend 2 Mana. Until the end of their next turn, that creature is Blinded and cannot move.',
    order: 2,
  },
  {
    key: 'CHA_CHANTER_F3',
    name: 'Mind Wither',
    description:
      'Roll a Charisma check to wither the mind of a creature within 15ft. If you hit their MC, spend 3 Mana. That creature takes 3d12 Moon damage.',
    order: 3,
  },
  {
    key: 'CHA_CHANTER_F4',
    name: 'Thoughts of Truth',
    description: 'Once per Rest, you can steal one truth from the mind of a creature within 5ft.',
    order: 4,
  },
  {
    key: 'CHA_CHANTER_F5',
    name: 'Thoughts of Unity',
    description:
      'You can form a mind link between you and up to five other creatures, allowing the group to communicate telepathically.',
    order: 5,
  },
  {
    key: 'CHA_CHANTER_F6',
    name: 'Thoughts of Death',
    description: 'When you use Mind Wither, you heal 1d12 hit points.',
    order: 6,
  },
  {
    key: 'WIS_DRUID_F1',
    name: 'Attack Beast',
    description:
      'Roll an Instinct check to command your beast to attack a creature within 30ft. If you hit their AC, spend 1 Mana. That creature takes 1d12 Piercing damage and can be dragged 5ft in any direction.',
    order: 1,
  },
  {
    key: 'WIS_DRUID_F2',
    name: 'Guard Beast',
    description:
      'Roll a DC 10 Instinct check to command your beast to defend you. On a success, spend 2 Mana. The next time you are hit with a melee attack, your beast will deflect 2d12 damage.',
    order: 2,
  },
  {
    key: 'WIS_DRUID_F3',
    name: 'Mercy Beast',
    description:
      'Roll a DC 15 Instinct check to command your beast to help an incapacitated creature within 60ft. On a success, spend 3 Mana. That creature is stabilized with 3d12 health.',
    order: 3,
  },
  {
    key: 'WIS_DRUID_F4',
    name: 'Beast Speech',
    description:
      'You can communicate with beasts through their unique visual and auditory cues. You are effectively limited to single words or basic phrases, such as "threat" or "go that way".',
    order: 4,
  },
  {
    key: 'WIS_DRUID_F5',
    name: 'Beast Sight',
    description: 'You can look through the eyes of your beast while they are within 120ft.',
    order: 5,
  },
  {
    key: 'WIS_DRUID_F6',
    name: 'Beast Shape',
    description:
      'You can transform into the same animal as your beast for up to 1 hour. You can only do this once per Rest.',
    order: 6,
  },
  {
    key: 'WIS_MONK_F1',
    name: 'Force Deflection',
    description:
      'Roll a DC 5 Instinct check as a Reaction to deflect an incoming attack. On a success, spend 1 Mana. You deflect 1d12 damage.',
    order: 1,
  },
  {
    key: 'WIS_MONK_F2',
    name: 'Force Absorption',
    description:
      'Roll a DC 10 Instinct check as a Reaction to absorb the energy of an incoming attack. On a success, spend 2 Mana. You absorb up to 2d12 or 4d6 damage dice and can add that damage dice to your next attack.',
    order: 2,
  },
  {
    key: 'WIS_MONK_F3',
    name: 'Force Meditation',
    description:
      'Roll a DC 15 Instinct check to meditate while at least 60ft away from the nearest enemy. On a success, spend 3 Mana. You heal 3d12 hit points.',
    order: 3,
  },
  {
    key: 'WIS_MONK_F4',
    name: 'Mastery of Body',
    description: 'When you forgo an Action, gain a Reaction.',
    order: 4,
  },
  {
    key: 'WIS_MONK_F5',
    name: 'Mastery of Mind',
    description: 'When you forgo two Actions, gain 1 Mana.',
    order: 5,
  },
  {
    key: 'WIS_MONK_F6',
    name: 'Mastery of Soul',
    description: 'When you are healed, you heal an additional 1d6 hit points.',
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
      'Once per Rest, you can roll a Strength check to shatter the earth under all creatures within 5ft. If you hit their MC, they take 1d12 Stone damage and are knocked Prone.',
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
      'Once per Rest, you can roll an Agility check to burst forward up to 30ft. If you hit the MC of any creatures in your path, they take 1d12 Sky damage and are knocked Prone.',
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
    description:
      'While wielding this weapon, you can parry an incoming attack with an illusion. As a Reaction, give an incoming melee attack disadvantage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R4_MOON',
    name: 'Rune of Moon Surge',
    description:
      'Once per Rest, you can roll a DC 15 Charisma check to reappear behind a creature within 15ft. If you hit their MC, the take 1d12 Moon damage.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'WEAPON_SWORD_R5_MOON',
    name: 'Rune of Moon Shadow',
    description:
      'This weapon becomes "Moon Shadow". After landing an attack with this weapon, you become Obscured until you deal or take damage.',
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
      'Spend 1 Mana to imbue this weapon with Spirit magic. Your next attack deals Spirit damage instead of Slashing damage. If you kill a creature with this attack, you gain Invulnerability until your next turn.',
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
      'This armor becomes "Sky Storm". When a creature ends its turn within 5ft of you, roll an Agility check. If you hit their MC, they take 1d6 Sky damage and are (optionally) pushed back 5ft.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'WEAPON_HEAVY_R1_SUN',
    name: 'Rune of Sun Plate',
    description: 'Your Magic Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_HEAVY_R2_SUN',
    name: 'Rune of Sun Shell',
    description:
      'Spend 1 Mana to blind creatures within 5ft with searing sunlight. Roll a Knowledge check. If you hit their MC, they are Blinded until the end of their next turn.',
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
      'Once per Rest, you can determine the AC, MC, and HP of all creatures within 15ft.',
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
      'Once per Rest, you can create a flickering illusion of yourself within 15ft. This illusion has the same AC and MC as you, but only one hit point.',
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
    description: 'You have advantage on injury rolls.',
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
      'This armor becomes "Spirit Moor". When you are incapacitated for the first time in combat, you stabilize with 1 hit point and gain Invulnerability until the end of your next turn.',
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
    description: 'Your Magic Class is increased by [A].',
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
    description: 'Your Magic Class is increased by [2*A].',
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
