const input = `
Sword	Moon	1	Rune of Moon Edge	This weapon is rendered invisible until your first attack in combat. While your weapon is invisible, attacks with it are guaranteed to hit.
Sword	Moon	2	Rune of Moon Smite	Roll a Charisma check to teleport behind a creature within 30ft. If you hit their MC, your next melee attack against them is guaranteed to hit. This can only be done once per Rest.
Sword	Moon	3	Rune of Moon Shadow	This weapon becomes "Moon Shadow". When you Disengage, you become Obscured until you take damage.
Sword	Sky	1	Rune of Sky Edge	This weapon does not require an Action to draw or stow.
Sword	Sky	2	Rune of Sky Smite	Roll an Agility check to burst forward 30ft through any creatures in your path. If you hit their MC, they take 1d12 Sky damage and are knocked Prone. This can only be done once per Rest.
Sword	Sky	3	Rune of Sky Slicing	This weapon becomes "Sky Slice". If you attacked with this weapon twice this turn, you can attack again without requiring an Action.
Sword	Spirit	1	Rune of Spirit Edge	This weapon is a vessel for lost souls. Creatures killed by this weapon cannot be resurrected.
Sword	Spirit	2	Rune of Spirit Smite	Roll an Instinct check to smite the soul of a creature within 5ft. If you hit their MC, they take 1d12 Spirit damage and are Paralyzed until the end of their next turn. This can only be done once per Rest.
Sword	Spirit	3	Rune of the Spirit Eater	This weapon becomes "Spirit Eater". When you kill a creature with this weapon, you heal 1d12 hit points.
Sword	Stone	1	Rune of Stone Edge	This weapon deals max damage against objects.
Sword	Stone	2	Rune of Stone Smite	Roll a Strength check to shatter the earth under all creatures within 5ft. If you hit their MC, they take 1d12 Stone damage and are knocked Prone. This can only be done once per Rest.
Sword	Stone	3	Rune of Stone Splitting	This weapon becomes "Stone Splitter". It requires two hands to wield and deals an additional 1d6 Stone damage on each hit.
Sword	Sun	1	Rune of Sun Edge	This weapon negates resistance to Slashing damage.
Sword	Sun	2	Rune of Sun Smite	Roll a Knowledge check to analyze the fighting style of a creature within 30ft. If you hit their MC, you gain advantage on melee attacks against them until the end of combat. This can only be done once per Rest.
Sword	Sun	3	Rune of Sun Spotting	This weapon becomes "Sun Spot". While wielding this weapon, you cannot become Flanked or Blinded.
Bow	Moon	1	Rune of Moon String	This weapon is silent when fired. Attacking a creature at least 30ft away does not remove the Obscured condition.
Bow	Moon	2	Rune of Moon Arrow	Roll a DC 15 Charisma check to spawn an illusory double at a spot within range. You can speak and attack through this double. This double has 1d12 hit points and shares your AC and MC. This can only be done once per Rest.
Bow	Moon	3	Rune of Moon Veil	This weapon becomes "Moon Veil". While wielding this weapon, you have advantage on Agility checks to obscure yourself.
Bow	Sky	1	Rune of Sky String	This weapon has an extended range of 120ft.
Bow	Sky	2	Rune of Sky Arrow	Roll an Agility check to fire a lightning arrow at a spot within range, sparking any creatures within 5ft. If you hit their MC, they take 1d12 Sky damage. This can only be done once per Rest.
Bow	Sky	3	Rune of Sky Spark	This weapon becomes "Sky Spark". When an enemy comes within 15ft of you, you can roll an Agility check to spark lightning towards them as a Reaction. If you hit their WC, they take 1d12 Sky damage.
Bow	Spirit	1	Rune of Spirit String	This weapon can detect the exact hit points of a creature it hits.
Bow	Spirit	2	Rune of Spirit Arrow	Roll a DC 15 Instinct check to fire a soul-bounded arrow at a creature within range. If you hit their MC, you become Soul Bound. When either of you take damage, the other one heals in the same amount. This can only be done once per Rest.
Bow	Spirit	3	Rune of Spirit Shift	This weapon becomes "Spirit Shift". When you hit a creature with an attack, you can choose to switch places with that creature.
Bow	Stone	1	Rune of Stone String	This weapon can be used as a melee weapon with a 5ft range.
Bow	Stone	2	Rune of Stone Arrow	Roll a Strength check to fire a weighted arrow at a creature or object within range. If it hits a creature's MC, they take 1d12 Stone damage and cannot move on their next turn. If it hits an object, it deals 2d12 Stone damage. This can only be done once per Rest.
Bow	Stone	3	Rune of Stone Piercing	This weapon becomes "Stone Piercer". Arrows fired from this weapon continue through their first target and can hit another target behind them. This collateral attack does not require an Action.
Bow	Sun	1	Rune of Sun String	This weapon negates resistance to Piercing damage.
Bow	Sun	2	Rune of Sun Arrow	Roll a DC 15 Knowledge check to nock a magically guided arrow. Your next attack is guaranteed to hit three creatures that have line of sight between one another. This can only be done once per Rest.
Bow	Sun	3	Rune of Sun Seeking	This weapon becomes "Sun Seeker". You can attack creatures that are Obscured or Covered without penalty.
Staff	Moon	1	Rune of Moon Wood	This weapon creates illusory imagery when you move. If you end your turn with no Movement Speed and not Engaged, attacks against you have disadvantage.
Staff	Moon	2	Rune of Moon Sweep	Roll a DC 15 Charisma check to create an illusory fog that spreads 15ft in all directions. Enemies inside the fog are Blinded. This can only be done once per Rest.
Staff	Moon	3	Rune of Moon Mist	This weapon becomes "Moon Mist". While wielding this weapon, when you become Obscured, you become Invisible.
Staff	Sky	1	Rune of Sky Wood	This weapon increases your Movement Speed by 5ft.
Staff	Sky	2	Rune of Sky Sweep	Roll an Agility check to sweep wind towards all creatures within 10ft. If you hit their WC, they take 1d6 Sky damage, are pushed back 15ft, and are knocked Prone. This can only be done once per Rest.
Staff	Sky	3	Rune of Sky Squall	This weapon becomes "Sky Squall". When you are hit by a melee attack, you can attack back as a Reaction.
Staff	Spirit	1	Rune of Spirit Wood	This weapon thrums with life. While wielding this weapon, you have advantage to stabilize an incapacitated creature.
Staff	Spirit	2	Rune of Spirit Sweep	Roll a DC 15 Instinct check to teleport to an incapacitated creature within 120ft. This can only be done once per Rest.
Staff	Spirit	3	Rune of Spirit Bloom	This weapon becomes "Spirit Bloom". If you did not move this turn, all allies within 5ft heal 1d6 hit points.
Staff	Stone	1	Rune of Stone Wood	This weapon increases your AC by 1.
Staff	Stone	2	Rune of Stone Sweep	Roll a DC 15 Strength check to lift a 5ft by 15ft wall from the earth. This wall is 10ft tall and has 1d12 hit points. This can only be done once per Rest.
Staff	Stone	3	Rune of Stone Stanchion	This weapon becomes "Stone Stanchion". While wielding this weapon, you cannot be moved or knocked Prone.
Staff	Sun	1	Rune of Sun Wood	This weapon negates resistance to Bludgeoning damage.
Staff	Sun	2	Rune of Sun Sweep	Roll a DC 15 Knowledge check to split this weapon in half—one to block and one to attack. While split, your range is reduced to 5ft but your AC is increased by 2. You can restore this weapon at any time. This can only be done once per Rest.
Staff	Sun	3	Rune of Sun Shroud	This weapon becomes "Sun Shroud". When you are attacked by a melee or ranged weapon, you can block as a Reaction. The incoming attack has disadvantage.
`.trim();

const lines = input.split("\n");

const magicOrder = ["Stone", "Sky", "Sun", "Moon", "Spirit"];
const weaponOrder = ["Sword", "Bow", "Staff"];
lines.sort((a, b) => {
  const [weaponA, magicA] = a.split("\t");
  const [weaponB, magicB] = b.split("\t");
  const weaponComparison = weaponOrder.indexOf(weaponA) - weaponOrder.indexOf(weaponB);
  if (weaponComparison !== 0) {
    return weaponComparison;
  }
  return magicOrder.indexOf(magicA) - magicOrder.indexOf(magicB);
});

const output = lines.map((line) => {
  const [weapon, magic, tier, name, description] = line.split("\t");
  const key = `WEAPON_${weapon.toUpperCase()}_R${tier}_${magic.toUpperCase()}`;

  return {
    key,
    name,
    description,
    order: Number(tier),
    ascensionRequirement: Number(tier),
  };
});

console.log(JSON.stringify(output, null, 2));

console.log(JSON.stringify(output.map(rune => rune.key), null, 2))
