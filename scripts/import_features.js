const input = `
AGI	Storm Sage	Ability	Tempest Strike	Roll a DC 5 Instinct check to channel wind into a weapon attack. On a success, spend 1 Mana. That attack deals an additional 1d12 Sky damage.
AGI	Storm Sage	Ability	Tempest Surge	Roll an Instinct check to surge wind towards a creature within 15ft. If you hit their MC, spend 2 Mana. That creature takes 2d12 Sky damage and is pushed back 15ft.
AGI	Storm Sage	Ability	Tempest Storm	Roll an Instinct check to envelope a creature within 60ft in a wind vortex. If you hit their MC, spend 3 Mana. That creature takes 2d12 Sky damage, loses 1 Mana, and is Blinded until your next turn.
AGI	Storm Sage	Perk	Veil of the Storm	The winds protect you with a swirling barrier. Ranged attacks against you have disadvantage.
AGI	Storm Sage	Perk	Grace of the Storm	You fall slower than normal. You take 1d6 less fall damage.
AGI	Storm Sage	Perk	Eye of the Storm	If you spend 0 Mana three turns in a row, the calm of the wind restores you. You heal 1d6 hit points.
WIS	Beast Druid	Ability	Attack Beast	Roll an Instinct check to command your beast to attack a creature within 30ft. If you hit their AC, spend 1 Mana. That creature takes 1d12 Piercing damage and can be dragged 5ft in any direction.
WIS	Beast Druid	Ability	Guard Beast	Roll a DC 10 Instinct check to command your beast to defend you. On a success, spend 2 Mana. The next time you are hit with a melee attack, your beast will deflect 2d12 damage.
WIS	Beast Druid	Ability	Mercy Beast	Roll a DC 15 Instinct check to command your beast to help an incapacitated creature within 60ft. On a success, spend 3 Mana. That creature is stabilized with 3d12 health.
WIS	Beast Druid	Perk	Beast Speech	You can communicate with beasts through their unique visual and auditory cues. You are effectively limited to single words or basic phrases, such as "threat" or "go that way".
WIS	Beast Druid	Perk	Beast Sight	You can look through the eyes of your beast while they are within 120ft.
WIS	Beast Druid	Perk	Beast Shape	You can transform into the same animal as your beast for up to 1 hour. You can only do this once per Rest.
STR	Vanguard Knight	Ability	Valiant Duel	Roll a DC 5 Strength check to compel a creature within 5ft to duel. On a success, spend 1 Mana. That creature can only attack you on their next turn and attacks with disadvantage.
STR	Vanguard Knight	Ability	Valiant Defense	Roll a DC 10 Strength check as a Reaction to parry an incoming melee attack. On a success, spend 2 Mana. You deflect 2d12 damage.
STR	Vanguard Knight	Ability	Valiant Charge	Roll a Strength check to charge a creature within 5ft. If you hit their AC, spend 3 Mana. That creature takes 3d12 Bludgeoning damage, is pushed back 5ft, and is knocked Prone.
STR	Vanguard Knight	Perk	Armor Training	While wearing Heavy Armor or Medium Armor, your Armor Class is increased by [A].
STR	Vanguard Knight	Perk	Martial Training	Your melee attacks deal an additional 1d6 damage.
STR	Vanguard Knight	Perk	Leadership Training	All allies within 5ft have advantage on attack rolls.
STR	Berserker Barbarian	Ability	Blood Havoc	Roll a Strength check to grab and throw a chunk of earth or structure at a creature within 15ft. If you hit their AC, spend 1 Mana. That creature takes 1d12 Bludgeoning damage.
STR	Berserker Barbarian	Ability	Blood Rage	Roll a DC 10 Strength check to enter a rage. On a success, spend 2 Mana. Until the end of your next turn, your melee attacks deal an additional 1d12 Bludgeoning damage.
STR	Berserker Barbarian	Ability	Blood Frenzy	Roll a DC 15 Strength check to enter a frenzy. On a success, spend 3 Mana. Your Max Movement is doubled, you gain three Actions, and your melee attacks deal max damage.
STR	Berserker Barbarian	Perk	Unescapable	Your range for opportunity attacks is extended to 10ft.
STR	Berserker Barbarian	Perk	Unkillable	Your hit points is increased by [10*A].
STR	Berserker Barbarian	Perk	Unstoppable	When you are Bloodied, your melee attacks have advantage.
WIS	Devote Monk	Ability	Force Deflection	Roll a DC 5 Instinct check as a Reaction to deflect an incoming attack. On a success, spend 1 Mana. You deflect 1d12 damage.
WIS	Devote Monk	Ability	Force Absorption	Roll a DC 10 Instinct check as a Reaction to absorb the energy of an incoming attack. On a success, spend 2 Mana. You absorb up to 2d12 or 4d6 damage dice and can add that damage dice to your next attack.
WIS	Devote Monk	Ability	Force Meditation	Roll a DC 15 Instinct check to meditate while at least 60ft away from the nearest enemy. On a success, spend 3 Mana. You heal 3d12 hit points.
WIS	Devote Monk	Perk	Mastery of Body	When you forgo an Action, gain a Reaction.
WIS	Devote Monk	Perk	Mastery of Mind	When you forgo two Actions, gain 1 Mana.
WIS	Devote Monk	Perk	Mastery of Soul	When you are healed, you heal an additional 1d6 hit points.
AGI	Marksman Ranger	Ability	Hunter's Mark	Roll a DC 5 Agility check to mark a creature within 60ft as your quarry. On a success, spend 1 Mana. Until that creature is dead, your ranged attacks against them deal an additional 1d6 Sky damage.
AGI	Marksman Ranger	Ability	Hunter's Headshot	Roll an Agility check to focus a ranged attack against a creature within range. On a success, spend 2 Mana. That creature takes 2d12 Sky damage.
AGI	Marksman Ranger	Ability	Hunter's Barrage	Roll a DC 15 Agility check to knock your bow with multiple arrows. On a success, spend 3 Mana. You gain four Actions and your ranged attacks are guaranteed to hit.
AGI	Marksman Ranger	Perk	Survival Shelter	When resting in an Adventuring Camp, you get the bonus of Simple Lodging. You can lend this bonus to one other creature.
AGI	Marksman Ranger	Perk	Survival Tonic	Once per Rest, you can boost your senses temporarily. You have advantage on Agility and Instinct checks for the next 10 minutes.
AGI	Marksman Ranger	Perk	Survival Salve	Once per Rest, you can heal you or another creature 1d12 hit points.
INT	Guardian Mage	Ability	Solar Shield	Roll a DC 5 Knowledge check to create a magical shield around you or another creature within 30ft. On a success, spend 1 Mana. The shield deflects 1d12 damage from the next attack against the creature.
INT	Guardian Mage	Ability	Solar Ward	Roll a DC 10 Knowledge check to create a magical barrier around you or another creature within 30ft. On a success, spend 2 Mana. The barrier increases the creature's AC by 2 and MC by 4 until the end of combat.
INT	Guardian Mage	Ability	Solar Sanctum	Roll a DC 15 Knowledge check to create a magical dome around you with a 10ft radius. On a success, spend 3 Mana. The dome prevents all magic except yours from passing through it. It dissipates after you move.
INT	Guardian Mage	Perk	Gift of Light	You start combat with two additional Mana if you're in direct sunlight.
INT	Guardian Mage	Perk	Tether of Light	If a creature being shielded by you is incapacitated, you can attempt to stabilize them from wherever you are.
INT	Guardian Mage	Perk	Warmth of Light	If your Solar Sanctum contains no enemies on your turn, all allies within it heal 1d6 hit points.
INT	Mechanist Mancer	Ability	Arcane Grenade	Roll a DC 5 Knowledge check to construct and throw a magical grenade up to 30ft. On a success, spend 1 Mana. The grenade deals 1d6 Sun damage to all creatures within 5ft.
INT	Mechanist Mancer	Ability	Arcane Turret	Roll a DC 10 Knowledge check to construct a magical turret. On a success, spend 2 Mana. On your turn, the turret can deal 1d12 Sun damage to a creature within 15ft. It has an AC and MC of 15 and deconstructs after taking 1 damage.
INT	Mechanist Mancer	Ability	Arcane Automaton	Roll a DC 15 Knowledge check to construct a magical automaton. On a success, spend 3 Mana. On your turn, the automaton can move 15ft and deal 1d12 Sun damage to a creature within 5ft. It has an AC and MC of 20 and deconstructs after taking 1 damage.
INT	Mechanist Mancer	Perk	Grappler Blueprint	Once per Rest, you can construct a magical grappling line that can ascend a creature up to 60ft.
INT	Mechanist Mancer	Perk	Drone Blueprint	Once per Rest, you can construct a magical floating drone. You can see and hear through the drone up to 120ft away. It requires a DC 20 Instinct check to detect.
INT	Mechanist Mancer	Perk	Masterkey Blueprint	Once per Rest, you can construct a magical key that can open any lock.
CHA	Leader Herald	Ability	Voice of Power	Roll a DC 5 Charisma check to empower an ally within 30ft. On a success, spend 1 Mana. On that ally's next attack, they deal an additional 1d12 damage.
CHA	Leader Herald	Ability	Voice of Inspiration	Roll a DC 10 Charisma check to inspire an ally within 30ft. On a success, spend 2 Mana. That ally gains 2 Mana.
CHA	Leader Herald	Ability	Voice of Command	Roll a DC 15 Charisma check to command an ally within 30ft. On a success, spend 3 Mana. On their next turn, that ally gains four Actions that have advantage.
CHA	Leader Herald	Perk	Diplomatic Relations	You have advantage on Charisma and Instinct checks to diffuse conflict.
CHA	Leader Herald	Perk	Diplomatic Immunity	Before you attack in combat, all attacks against you have disadvantage.
CHA	Leader Herald	Perk	Diplomatic Security	All allies within 5ft deal an additional 1d6 damage on melee attacks.
CHA	Corruption Chanter	Ability	Mind Charm	Roll a Charisma check to charm up to two creatures within 15ft. If you hit their MC, spend 1 Mana. Until the end of their next turn, those creatures regard you as an ally.
CHA	Corruption Chanter	Ability	Mind Cloud	Roll a Charisma check to confuse a creature within 15ft. If you hit their MC, spend 2 Mana. Until the end of their next turn, that creature is Blinded and cannot move.
CHA	Corruption Chanter	Ability	Mind Wither	Roll a Charisma check to wither the mind of a creature within 15ft. If you hit their MC, spend 3 Mana. That creature takes 3d12 Moon damage.
CHA	Corruption Chanter	Perk	Thoughts of Truth	Once per Rest, you can steal one truth from the mind of a creature within 5ft.
CHA	Corruption Chanter	Perk	Thoughts of Unity	You can form a mind link between you and up to five other creatures, allowing the group to communicate telepathically.
CHA	Corruption Chanter	Perk	Thoughts of Death	When you use Mind Wither, you heal 1d12 hit points.
`.trim();

const lines = input.split('\n');

lines.sort((a, b) => {
  const order = ['STR', 'AGI', 'INT', 'CHA', 'WIS'];
  const aAttr = a.split('\t')[0];
  const bAttr = b.split('\t')[0];
  return order.indexOf(aAttr) - order.indexOf(bAttr);
});

const output = lines.map((line, i) => {
  const [attribute, className, _, name, description] = line.split('\t');
  const order = (i % 6) + 1;
  const key = `${attribute}_${className.split(' ')[1].toUpperCase()}_F${order}`;

  return {
    key,
    name,
    description,
    order: Number(order),
  };
});

console.log(JSON.stringify(output, null, 2));
