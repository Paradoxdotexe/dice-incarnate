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
    description: 'While wearing Heavy Armor or Medium Armor, your Armor Class is increased by [A].',
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
      'Roll a DC 15 Strength check to enter a frenzy. On a success, spend 3 Mana. Your Max Movement is doubled, you gain three Actions, and your melee attacks deal max damage.',
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
    description: 'You fall slower than normal. You take 1d6 less fall damage.',
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
      'Roll a Strength check to shatter the earth under all creatures within 5ft. If you hit their MC, they take 1d12 Stone damage and are knocked Prone. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_STONE',
    name: 'Rune of Stone Splitting',
    description:
      'This weapon becomes "Stone Splitter". It requires two hands to wield and deals an additional 1d6 Stone damage on each hit.',
    order: 3,
    ascensionRequirement: 3,
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
      'Roll an Agility check to burst forward 30ft through any creatures in your path. If you hit their MC, they take 1d12 Sky damage and are knocked Prone. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_SKY',
    name: 'Rune of Sky Slicing',
    description:
      'This weapon becomes "Sky Slice". If you attacked with this weapon twice this turn, you can attack again as a Free Action.',
    order: 3,
    ascensionRequirement: 3,
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
      'Roll a Knowledge check to analyze the fighting style of a creature within 30ft. If you hit their MC, you gain advantage on melee attacks against them until the end of combat. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_SUN',
    name: 'Rune of Sun Sundering',
    description: 'This weapon becomes "Sun Sunder". The lowest you can roll on attacks are a 10.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R1_MOON',
    name: 'Rune of Moon Edge',
    description:
      'This weapon is rendered invisible until your first attack in combat. While your weapon is invisible, attacks with it are guaranteed to hit.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_SWORD_R2_MOON',
    name: 'Rune of Moon Smite',
    description:
      'Roll a Charisma check to teleport behind a creature within 30ft. If you hit their MC, your next melee attack against them is guaranteed to hit for max damage. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_MOON',
    name: 'Rune of Moon Shadow',
    description:
      'This weapon becomes "Moon Shadow". When you Disengage, you become Obscured until you take damage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_SWORD_R1_SPIRIT',
    name: 'Rune of Spirit Edge',
    description:
      'This weapon is a vessel for lost souls. Creatures killed by this weapon cannot be resurrected.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_SWORD_R2_SPIRIT',
    name: 'Rune of Spirit Smite',
    description:
      'Roll an Instinct check to smite the soul of a creature within 5ft. If you hit their MC, they take 2d12 Spirit damage and are Paralyzed until the end of their next turn. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_SWORD_R3_SPIRIT',
    name: 'Rune of the Spirit Eater',
    description:
      'This weapon becomes "Spirit Eater". When you kill a creature with this weapon, you heal 1d12 hit points.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_BOW_R1_STONE',
    name: 'Rune of Stone String',
    description: 'This weapon can be used as a melee weapon with a 5ft range.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_BOW_R2_STONE',
    name: 'Rune of Stone Arrow',
    description:
      "Roll a Strength check to fire a weighted arrow at a creature or object within range. If it hits a creature's MC, they take 2d12 Stone damage and cannot move on their next turn. If it hits an object, it deals 2d12 Stone damage. This can only be done once per Rest.",
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_BOW_R3_STONE',
    name: 'Rune of Stone Piercing',
    description:
      'This weapon becomes "Stone Piercer". Arrows fired from this weapon continue through their first target and can hit another target behind them. This collateral attack does not require an Action.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_BOW_R1_SKY',
    name: 'Rune of Sky String',
    description: 'This weapon has an extended range of 120ft.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_BOW_R2_SKY',
    name: 'Rune of Sky Arrow',
    description:
      'Roll an Agility check to fire a lightning arrow at a spot within range, sparking any creatures within 5ft. If you hit their MC, they take 1d12 Sky damage. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_BOW_R3_SKY',
    name: 'Rune of Sky Spark',
    description:
      'This weapon becomes "Sky Spark". When an enemy comes within 15ft of you, you can roll an Agility check to spark lightning towards them as a Reaction. If you hit their MC, they take 1d12 Sky damage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_BOW_R1_SUN',
    name: 'Rune of Sun String',
    description: 'This weapon negates resistance to Piercing damage.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_BOW_R2_SUN',
    name: 'Rune of Sun Arrow',
    description:
      'Roll a DC 15 Knowledge check to nock a magically guided arrow. Your next attack is guaranteed to hit three creatures that have line of sight between one another. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_BOW_R3_SUN',
    name: 'Rune of Sun Seeking',
    description:
      'This weapon becomes "Sun Seeker". You can attack creatures that are Obscured or Covered without penalty.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_BOW_R1_MOON',
    name: 'Rune of Moon String',
    description:
      'This weapon is silent when fired. Attacking a creature at least 30ft away does not remove the Obscured condition.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_BOW_R2_MOON',
    name: 'Rune of Moon Arrow',
    description:
      'Roll a DC 15 Charisma check to spawn an illusory double at a spot within range. You can speak and attack through this double. This double has 1d12 hit points and shares your AC and MC. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_BOW_R3_MOON',
    name: 'Rune of Moon Whisper',
    description:
      'This weapon becomes "Moon Whisper". While wielding this weapon, you immediately succeed on Agility checks to hide.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_BOW_R1_SPIRIT',
    name: 'Rune of Spirit String',
    description: 'This weapon can detect the exact HP of a creature it hits.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_BOW_R2_SPIRIT',
    name: 'Rune of Spirit Arrow',
    description:
      'Roll a DC 15 Instinct check to fire a healing arrow at a creature within range. They heal 2d12 hit points. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_BOW_R3_SPIRIT',
    name: 'Rune of Spirit Shift',
    description:
      'This weapon becomes "Spirit Shift". When you hit a creature with an attack, you can choose to switch places with that creature.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_STAFF_R1_STONE',
    name: 'Rune of Stone Wood',
    description: 'Your Armor Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_STAFF_R2_STONE',
    name: 'Rune of Stone Sweep',
    description:
      'Roll a DC 15 Strength check to lift a 5ft by 15ft wall from the earth. This wall is 10ft tall and has 1d12 hit points. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_STAFF_R3_STONE',
    name: 'Rune of Stone Stanchion',
    description:
      'This weapon becomes "Stone Stanchion". When you are moved or knocked Prone by an attack, the attacker is moved or knocked Prone instead.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_STAFF_R1_SKY',
    name: 'Rune of Sky Wood',
    description: 'This weapon increases your Max Movement by 5ft.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_STAFF_R2_SKY',
    name: 'Rune of Sky Sweep',
    description:
      'Roll an Agility check to surge wind towards all creatures within 10ft. If you hit their MC, they take 1d12 Sky damage, are pushed back 15ft, and are knocked Prone. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_STAFF_R3_SKY',
    name: 'Rune of Sky Squall',
    description:
      'This weapon becomes "Sky Squall". When you are hit by a melee attack, you can attack back as a Reaction.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_STAFF_R1_SUN',
    name: 'Rune of Sun Wood',
    description: 'This weapon negates resistance to Bludgeoning damage.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_STAFF_R2_SUN',
    name: 'Rune of Sun Sweep',
    description:
      'Roll a DC 15 Knowledge check to split this weapon in half—one to block and one to attack. While split, your range is reduced to 5ft but your AC is increased by 2. You can restore this weapon at any time. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_STAFF_R3_SUN',
    name: 'Rune of Sun Shroud',
    description:
      'This weapon becomes "Sun Shroud". When you are attacked by a melee or ranged weapon, you can block as a Reaction. The incoming attack has disadvantage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_STAFF_R1_MOON',
    name: 'Rune of Moon Wood',
    description:
      'This weapon turns you Invisible if you forgo movement and actions on your turn. This effect ends once you take an Action.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_STAFF_R2_MOON',
    name: 'Rune of Moon Sweep',
    description:
      'Roll a DC 15 Charisma check to create an illusory fog that spreads 15ft in all directions. Enemies inside the fog are Blinded. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_STAFF_R3_MOON',
    name: 'Rune of Moon Mist',
    description:
      'This weapon becomes "Moon Mist". This weapon creates illusory fog when you move. If you moved this turn, physical attacks against you have disadvantage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'WEAPON_STAFF_R1_SPIRIT',
    name: 'Rune of Spirit Wood',
    description:
      'This weapon thrums with life. You have advantage to stabilize an incapacitated creature.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'WEAPON_STAFF_R2_SPIRIT',
    name: 'Rune of Spirit Sweep',
    description:
      'Roll a DC 15 Instinct to surge healing energy towards all allies within 5ft. They heal 1d12 hit points. This can only be done once per Rest.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'WEAPON_STAFF_R3_SPIRIT',
    name: 'Rune of Spirit Coil',
    description:
      'This weapon becomes "Spirit Coil". Once per turn, your attack heals 1d6 hit points instead of dealing damage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_HEAVY_F1',
    name: 'Heavy Armor',
    description: 'Your Armor Class is increased by [2*A].',
    order: 1,
  },
  {
    key: 'ARMOR_HEAVY_F2',
    name: 'Soul Steel',
    description: 'You have resistance to Bludgeoning damage.',
    order: 2,
  },
  {
    key: 'ARMOR_LIGHT_F1',
    name: 'Light Armor',
    description: 'Your Armor Class is increased by [A] and your Magic Class is increased by [A].',
    order: 1,
  },
  {
    key: 'ARMOR_LIGHT_F2',
    name: 'Soul Hide',
    description: 'You have resistance to Slashing and Piercing damage.',
    order: 3,
  },
  {
    key: 'ARMOR_MAGIC_F1',
    name: 'Magic Armor',
    description: 'Your Magic Class is increased by [2*A].',
    order: 1,
  },
  {
    key: 'ARMOR_HEAVY_R1_STONE',
    name: 'Rune of Stone Steel',
    description: 'Your Armor Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_HEAVY_R2_STONE',
    name: 'Rune of Stone Ward',
    description: 'You have resistance to Stone damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_HEAVY_R3_STONE',
    name: 'Rune of Stone Anchor',
    description: 'While wearing this armor, you cannot be moved by another creature.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_HEAVY_R4_STONE',
    name: 'Rune of Stone Shell',
    description:
      'Roll a DC 15 Strength check to turn this armor into an indestructible metal. Until the start of your next turn, your Armor Class is increased by 5. You can continue this effect with an Action. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_HEAVY_R5_STONE',
    name: 'Rune of Stone Skewer',
    description:
      'This armor becomes "Stone Skewer". When a creature hits you with a melee attack, this armor deals 1d6 Stone damage back on the attacker.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_HEAVY_R1_SKY',
    name: 'Rune of Sky Steel',
    description: 'Your Max Movement is increased by 5ft.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_HEAVY_R2_SKY',
    name: 'Rune of Sky Ward',
    description: 'You have resistance to Sky damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_HEAVY_R3_SKY',
    name: 'Rune of Sky Anchor',
    description: 'While wearing this armor, you cannot be knocked Prone.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_HEAVY_R4_SKY',
    name: 'Rune of Sky Shell',
    description:
      'Roll an Agility check to create a spherical wind vacuum pulling all enemies within 30ft towards you. If you hit their MC, they are pulled within 5ft of you. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_HEAVY_R5_SKY',
    name: 'Rune of Sky Storm',
    description:
      'This armor becomes "Sky Storm". When a creature is Engaged with you, they cannot Disengage.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_HEAVY_R1_SUN',
    name: 'Rune of Sun Steel',
    description: 'Your Magic Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_HEAVY_R2_SUN',
    name: 'Rune of Sun Ward',
    description: 'You have resistance to Sun damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_HEAVY_R3_SUN',
    name: 'Rune of Sun Anchor',
    description: 'While wearing this armor, you cannot be Blinded or Flanked.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_HEAVY_R4_SUN',
    name: 'Rune of Sun Shell',
    description:
      "Roll a DC 15 Knowledge check to optimize your armor's shielding. You gain resistance to the last type of physical damage dealt to you until the end of combat. This can only be done once per Rest.",
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_HEAVY_R5_SUN',
    name: 'Rune of Sun Stealing',
    description:
      'This armor becomes "Sun Steal". This armor can mimic the AC or MC of any creature you are Engaged with.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_HEAVY_R1_MOON',
    name: 'Rune of Moon Steel',
    description: 'You have advantage on Agility checks to hide.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_HEAVY_R2_MOON',
    name: 'Rune of Moon Ward',
    description: 'You have resistance to Moon damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_HEAVY_R3_MOON',
    name: 'Rune of Moon Anchor',
    description:
      'While wearing this armor, your movement is distorted. Opportunity attacks against you have disadvantage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_HEAVY_R4_MOON',
    name: 'Rune of Moon Shell',
    description:
      'Roll a DC 15 Charisma check to make your armor appear bigger than it is. Until the start of your next turn, all physical attacks against you are misjudged and miss. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_HEAVY_R5_MOON',
    name: 'Rune of Moon Mirage',
    description:
      'This armor becomes "Moon Mirage". When an enemy misses an attack against you, you can Disengage as a Free Action.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_HEAVY_R1_SPIRIT',
    name: 'Rune of Spirit Steel',
    description: 'You have advantage on Injury Location rolls.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_HEAVY_R2_SPIRIT',
    name: 'Rune of Spirit Ward',
    description: 'You have resistance to Spirit damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_HEAVY_R3_SPIRIT',
    name: 'Rune of Spirit Anchor',
    description: 'While wearing this armor, you have advantage on Injury Severity rolls.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_HEAVY_R4_SPIRIT',
    name: 'Rune of Spirit Shell',
    description:
      'Roll a DC 15 Instinct check to consume the soul of a creature you killed this combat. You heal 1d12 hit points. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_HEAVY_R5_SPIRIT',
    name: 'Rune of Spirit Mooring',
    description:
      'This armor becomes "Spirit Moor". When you are incapacitated for the first time in combat, you immediately stabilize with 1 hit point.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_LIGHT_R1_STONE',
    name: 'Rune of Stone Leather',
    description: 'Your Armor Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_LIGHT_R2_STONE',
    name: 'Rune of Stone Ward',
    description: 'You have resistance to Stone damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_LIGHT_R3_STONE',
    name: 'Rune of Stone Shade',
    description: 'While wearing this armor, you take 1d6 less fall damage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_LIGHT_R4_STONE',
    name: 'Rune of Stone Shift',
    description:
      'Roll a DC 15 Strength check to lift a 3ft square cube from the earth. This wall has 1d12 hit points and can be used as cover. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_LIGHT_R5_STONE',
    name: 'Rune of Stone Warden',
    description:
      'This armor becomes "Stone Warden". If you consume no movement on your turn, your Armor Class is increased by 2 until you move again.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_LIGHT_R1_SKY',
    name: 'Rune of Sky Leather',
    description: 'Your Max Movement is increased by 5ft.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_LIGHT_R2_SKY',
    name: 'Rune of Sky Ward',
    description: 'You have resistance to Sky damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_LIGHT_R3_SKY',
    name: 'Rune of Sky Shade',
    description:
      'While wearing this armor, you have advantage on Strength and Agility checks to climb.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_LIGHT_R4_SKY',
    name: 'Rune of Sky Shift',
    description:
      'Roll an Agility check to leap 10ft into the air and then land, surging wind towards all creatures within 5ft. If you hit their MC, they take 1d6 Sky damage. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_LIGHT_R5_SKY',
    name: 'Rune of Sky Dancing',
    description:
      'This armor becomes "Sky Dancer". While wearing this armor, you can levitate up to 10ft above the ground.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_LIGHT_R1_SUN',
    name: 'Rune of Sun Leather',
    description: 'Your Magic Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_LIGHT_R2_SUN',
    name: 'Rune of Sun Ward',
    description: 'You have resistance to Sun damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_LIGHT_R3_SUN',
    name: 'Rune of Sun Shade',
    description:
      'While wearing this armor, you can sense the AC and MC of any creature within 15ft.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_LIGHT_R4_SUN',
    name: 'Rune of Sun Shift',
    description:
      'Roll a Knowledge check to sense the critical weakness of a creature within 15ft. If you hit their MC, your next attack roll is a Critical Hit. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_LIGHT_R5_SUN',
    name: 'Rune of Sun Seer',
    description:
      'This armor becomes "Sun Seer". You can sense weak spots in a creature\'s defense. You have advantage on weapon attacks within 15ft.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_LIGHT_R1_MOON',
    name: 'Rune of Moon Leather',
    description: 'You have advantage on Agility checks to hide.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_LIGHT_R2_MOON',
    name: 'Rune of Moon Ward',
    description: 'You have resistance to Moon damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_LIGHT_R3_MOON',
    name: 'Rune of Moon Shade',
    description: 'While wearing this armor, hiding does not cost an Action.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_LIGHT_R4_MOON',
    name: 'Rune of Moon Shift',
    description:
      'Roll a DC 15 Charisma check to Disengage, become Invisible, and replace yourself with an illusion. You become visible after attacking or when combat ends. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_LIGHT_R5_MOON',
    name: 'Rune of Moon Veil',
    description: 'This armor becomes "Moon Veil". While you are Obscured, you are Invisible.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_LIGHT_R1_SPIRIT',
    name: 'Rune of Spirit Leather',
    description: 'You have advantage on Injury Location rolls.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_LIGHT_R2_SPIRIT',
    name: 'Rune of Spirit Ward',
    description: 'You have resistance to Spirit damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_LIGHT_R3_SPIRIT',
    name: 'Rune of Spirit Shade',
    description:
      'While wearing this armor, you can stabilize an incapacitated creature from up to 30ft away.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_LIGHT_R4_SPIRIT',
    name: 'Rune of Spirit Shift',
    description:
      'Roll a DC 15 Instinct check to stabilize an incapacitated creature using Spirit magic. The creature is stabilized with 1d12 hit points. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_LIGHT_R5_SPIRIT',
    name: 'Rune of Spirit Call',
    description:
      'This armor becomes "Spirit Call". When a creature within 120ft becomes Incapacitated or Bloodied, you can teleport next to them.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_MAGIC_R1_STONE',
    name: 'Rune of Stone Weave',
    description: 'Your Armor Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_MAGIC_R2_STONE',
    name: 'Rune of Stone Ward',
    description: 'You have resistance to Stone damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_MAGIC_R3_STONE',
    name: 'Rune of Stone Channel',
    description: 'While wearing this armor, you have resistance to all physical damage.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_MAGIC_R4_STONE',
    name: 'Rune of Stone Surge',
    description:
      'Roll a DC 15 Strength check to turn yourself to stone. Until the end of your next turn, you are Invulnerable. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_MAGIC_R5_STONE',
    name: 'Rune of Stone Wake',
    description:
      'This armor becomes "Stone Wake". Your AC and the AC of all allies within 10ft increases by 2.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_MAGIC_R1_SKY',
    name: 'Rune of Sky Weave',
    description: 'Your Max Movement is increased by 5ft.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_MAGIC_R2_SKY',
    name: 'Rune of Sky Ward',
    description: 'You have resistance to Sky damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_MAGIC_R3_SKY',
    name: 'Rune of Sky Channel',
    description: 'While wearing this armor, you can jump up to 10ft in the air.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_MAGIC_R4_SKY',
    name: 'Rune of Sky Surge',
    description:
      'Roll a DC 15 Agility check to supercharge your speed. This round, your Max Movement is doubled, you gain 3 more Actions, you gain 1 more Reaction. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_MAGIC_R5_SKY',
    name: 'Rune of Sky Drifting',
    description:
      'This armor becomes "Sky Drift". When you are hit by an attack, you can teleport up to 30ft away.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_MAGIC_R1_SUN',
    name: 'Rune of Sun Weave',
    description: 'Your Magic Class is increased by 1.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_MAGIC_R2_SUN',
    name: 'Rune of Sun Ward',
    description: 'You have resistance to Sun damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_MAGIC_R3_SUN',
    name: 'Rune of Sun Channel',
    description:
      'While wearing this armor, you can see all creatures within 30ft, even if they are Obscured, Covered, or Invisible.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_MAGIC_R4_SUN',
    name: 'Rune of Sun Surge',
    description:
      "Roll a DC 15 Knowledge check to optimize your armor's warding. You gain resistance to the last type of magical damage dealt to you until the end of combat. This can only be done once per Rest.",
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_MAGIC_R5_SUN',
    name: 'Rune of Sun Shine',
    description:
      'This armor becomes "Sun Shine". All attacks against you from creatures within 10ft have disadvantage.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_MAGIC_R1_MOON',
    name: 'Rune of Moon Weave',
    description: 'You have advantage on Agility checks to hide.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_MAGIC_R2_MOON',
    name: 'Rune of Moon Ward',
    description: 'You have resistance to Moon damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_MAGIC_R3_MOON',
    name: 'Rune of Moon Channel',
    description:
      'While wearing this armor, you can attempt to hide even if there are enemies within 30ft.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_MAGIC_R4_MOON',
    name: 'Rune of Moon Surge',
    description:
      'Roll a DC 15 Charisma check to enter the Shadow Plane. While in the Shadow Plane, you become Incorporeal. You can exit the Shadow Plane at will. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_MAGIC_R5_MOON',
    name: 'Rune of Moon Walking',
    description:
      'This armor becomes "Moon Walker". While you are Obscured, you can teleport up to your Max Movement.',
    order: 5,
    ascensionRequirement: 5,
  },
  {
    key: 'ARMOR_MAGIC_R1_SPIRIT',
    name: 'Rune of Spirit Weave',
    description: 'You have advantage on Injury Location rolls.',
    order: 1,
    ascensionRequirement: 1,
  },
  {
    key: 'ARMOR_MAGIC_R2_SPIRIT',
    name: 'Rune of Spirit Ward',
    description: 'You have resistance to Spirit damage.',
    order: 2,
    ascensionRequirement: 2,
  },
  {
    key: 'ARMOR_MAGIC_R3_SPIRIT',
    name: 'Rune of Spirit Channel',
    description:
      'While wearing this armor, you cannot roll less than a 4 on an Injury Severity roll.',
    order: 3,
    ascensionRequirement: 3,
  },
  {
    key: 'ARMOR_MAGIC_R4_SPIRIT',
    name: 'Rune of Spirit Surge',
    description:
      'Roll a DC 15 Instinct check to create a soul siphon on a creature within 60ft. In you hit their MC, whenever that creature takes damage, you heal the same amount. This can only be done once per Rest.',
    order: 4,
    ascensionRequirement: 4,
  },
  {
    key: 'ARMOR_MAGIC_R5_SPIRIT',
    name: 'Rune of Spirit Bloom',
    description:
      'This armor becomes "Spirit Bloom". If you did not move this turn, one ally within 5ft heals 1d6 hit points.',
    order: 5,
    ascensionRequirement: 5,
  },
];
