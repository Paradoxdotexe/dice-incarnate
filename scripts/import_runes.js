const input = `
Heavy	Stone	1	Rune of Stone Steel	Your Armor Class is increased by 1.
Heavy	Stone	2	Rune of Stone Ward	You have resistance to Stone damage.
Heavy	Stone	3	Rune of Stone Anchor	While wearing this armor, you cannot be moved by another creature.
Heavy	Stone	4	Rune of Stone Shell	Roll a DC 15 Strength check to turn this armor into an indestructible metal. Until the start of your next turn, your Armor Class is increased by 5. You can continue this effect with an Action. This can only be done once per Rest.
Heavy	Stone	5	Rune of Stone Skewer	This armor becomes "Stone Skewer". When a creature hits you with a melee attack, this armor deals 1d6 Stone damage back on the attacker.
Heavy	Sky	1	Rune of Sky Steel	Your Max Movement is increased by 5ft.
Heavy	Sky	2	Rune of Sky Ward	You have resistance to Sky damage.
Heavy	Sky	3	Rune of Sky Anchor	While wearing this armor, you cannot be knocked Prone.
Heavy	Sky	4	Rune of Sky Shell	Roll an Agility check to create a spherical wind vacuum pulling all enemies within 30ft towards you. If you hit their MC, they are pulled within 5ft of you. This can only be done once per Rest.
Heavy	Sky	5	Rune of Sky Storm	This armor becomes "Sky Storm". When a creature is Engaged with you, they cannot Disengage.
Heavy	Sun	1	Rune of Sun Steel	Your Magic Class is increased by 1.
Heavy	Sun	2	Rune of Sun Ward	You have resistance to Sun damage.
Heavy	Sun	3	Rune of Sun Anchor	While wearing this armor, you cannot be Blinded or Flanked.
Heavy	Sun	4	Rune of Sun Shell	Roll a DC 15 Knowledge check to optimize your armor's shielding. You gain resistance to the last type of physical damage dealt to you until the end of combat. This can only be done once per Rest.
Heavy	Sun	5	Rune of Sun Stealing	This armor becomes "Sun Steal". This armor can mimic the AC or MC of any creature you are Engaged with.
Heavy	Moon	1	Rune of Moon Steel	You have advantage on Agility checks to hide.
Heavy	Moon	2	Rune of Moon Ward	You have resistance to Moon damage.
Heavy	Moon	3	Rune of Moon Anchor	While wearing this armor, your movement is distorted. Opportunity attacks against you have disadvantage.
Heavy	Moon	4	Rune of Moon Shell	Roll a DC 15 Charisma check to make your armor appear bigger than it is. Until the start of your next turn, all physical attacks against you are misjudged and miss. This can only be done once per Rest.
Heavy	Moon	5	Rune of Moon Mirage	This armor becomes "Moon Mirage". When an enemy misses an attack against you, you can Disengage as a Free Action.
Heavy	Spirit	1	Rune of Spirit Steel	You have advantage on Injury Location rolls.
Heavy	Spirit	2	Rune of Spirit Ward	You have resistance to Spirit damage.
Heavy	Spirit	3	Rune of Spirit Anchor	While wearing this armor, you have advantage on Injury Severity rolls.
Heavy	Spirit	4	Rune of Spirit Shell	Roll a DC 15 Instinct check to consume the soul of a creature you killed this combat. You heal 1d12 hit points. This can only be done once per Rest.
Heavy	Spirit	5	Rune of Spirit Mooring	This armor becomes "Spirit Moor". When you are incapacitated for the first time in combat, you immediately stabilize with 1 hit point.
Armor: Light				
Light	Stone	1	Rune of Stone Leather	Your Armor Class is increased by 1.
Light	Stone	2	Rune of Stone Ward	You have resistance to Stone damage.
Light	Stone	3	Rune of Stone Shade	While wearing this armor, you take 1d6 less fall damage.
Light	Stone	4	Rune of Stone Shift	Roll a DC 15 Strength check to lift a 3ft square cube from the earth. This wall has 1d12 hit points and can be used as cover. This can only be done once per Rest.
Light	Stone	5	Rune of Stone Warden	This armor becomes "Stone Warden". If you consume no movement on your turn, your Armor Class is increased by 2 until you move again.
Light	Sky	1	Rune of Sky Leather	Your Max Movement is increased by 5ft.
Light	Sky	2	Rune of Sky Ward	You have resistance to Sky damage.
Light	Sky	3	Rune of Sky Shade	While wearing this armor, you have advantage on Strength and Agility checks to climb.
Light	Sky	4	Rune of Sky Shift	Roll an Agility check to leap 10ft into the air and then land, surging wind towards all creatures within 5ft. If you hit their MC, they take 1d6 Sky damage. This can only be done once per Rest.
Light	Sky	5	Rune of Sky Dancing	This armor becomes "Sky Dancer". While wearing this armor, you can levitate up to 10ft above the ground.
Light	Sun	1	Rune of Sun Leather	Your Magic Class is increased by 1.
Light	Sun	2	Rune of Sun Ward	You have resistance to Sun damage.
Light	Sun	3	Rune of Sun Shade	While wearing this armor, you can sense the AC and MC of any creature within 15ft.
Light	Sun	4	Rune of Sun Shift	Roll a Knowledge check to sense the critical weakness of a creature within 15ft. If you hit their MC, your next attack roll is a Critical Hit. This can only be done once per Rest.
Light	Sun	5	Rune of Sun Seer	This armor becomes "Sun Seer". You can sense weak spots in a creature's defense. You have advantage on weapon attacks within 15ft.
Light	Moon	1	Rune of Moon Leather	You have advantage on Agility checks to hide.
Light	Moon	2	Rune of Moon Ward	You have resistance to Moon damage.
Light	Moon	3	Rune of Moon Shade	While wearing this armor, hiding does not cost an Action.
Light	Moon	4	Rune of Moon Shift	Roll a DC 15 Charisma check to Disengage, become Invisible, and replace yourself with an illusion. You become visible after attacking or when combat ends. This can only be done once per Rest.
Light	Moon	5	Rune of Moon Veil	This armor becomes "Moon Veil". While you are Obscured, you are Invisible.
Light	Spirit	1	Rune of Spirit Leather	You have advantage on Injury Location rolls.
Light	Spirit	2	Rune of Spirit Ward	You have resistance to Spirit damage.
Light	Spirit	3	Rune of Spirit Shade	While wearing this armor, you can stabilize an incapacitated creature from up to 30ft away.
Light	Spirit	4	Rune of Spirit Shift	Roll a DC 15 Instinct check to stabilize an incapacitated creature using Spirit magic. The creature is stabilized with 1d12 hit points. This can only be done once per Rest.
Light	Spirit	5	Rune of Spirit Call	This armor becomes "Spirit Call". When a creature within 120ft becomes Incapacitated or Bloodied, you can teleport next to them.
Armor: Magic				
Magic	Stone	1	Rune of Stone Weave	Your Armor Class is increased by 1.
Magic	Stone	2	Rune of Stone Ward	You have resistance to Stone damage.
Magic	Stone	3	Rune of Stone Channel	While wearing this armor, you have resistance to all physical damage.
Magic	Stone	4	Rune of Stone Surge	Roll a DC 15 Strength check to turn yourself to stone. Until the end of your next turn, you are Invulnerable. This can only be done once per Rest.
Magic	Stone	5	Rune of Stone Wake	This armor becomes "Stone Wake". Your AC and the AC of all allies within 10ft increases by 2.
Magic	Sky	1	Rune of Sky Weave	Your Max Movement is increased by 5ft.
Magic	Sky	2	Rune of Sky Ward	You have resistance to Sky damage.
Magic	Sky	3	Rune of Sky Channel	While wearing this armor, you can jump up to 10ft in the air.
Magic	Sky	4	Rune of Sky Surge	Roll a DC 15 Agility check to supercharge your speed. This round, your Max Movement is doubled, you gain 3 more Actions, you gain 1 more Reaction. This can only be done once per Rest.
Magic	Sky	5	Rune of Sky Drifting	This armor becomes "Sky Drift". When you are hit by an attack, you can teleport up to 30ft away.
Magic	Sun	1	Rune of Sun Weave	Your Magic Class is increased by 1.
Magic	Sun	2	Rune of Sun Ward	You have resistance to Sun damage.
Magic	Sun	3	Rune of Sun Channel	While wearing this armor, you can see all creatures within 30ft, even if they are Obscured, Covered, or Invisible.
Magic	Sun	4	Rune of Sun Surge	Roll a DC 15 Knowledge check to optimize your armor's warding. You gain resistance to the last type of magical damage dealt to you until the end of combat. This can only be done once per Rest.
Magic	Sun	5	Rune of Sun Shine	This armor becomes "Sun Shine". All attacks against you from creatures within 10ft have disadvantage.
Magic	Moon	1	Rune of Moon Weave	You have advantage on Agility checks to hide.
Magic	Moon	2	Rune of Moon Ward	You have resistance to Moon damage.
Magic	Moon	3	Rune of Moon Channel	While wearing this armor, you can attempt to hide even if there are enemies within 30ft.
Magic	Moon	4	Rune of Moon Surge	Roll a DC 15 Charisma check to enter the Shadow Plane. While in the Shadow Plane, you become Incorporeal. You can exit the Shadow Plane at will. This can only be done once per Rest.
Magic	Moon	5	Rune of Moon Walking	This armor becomes "Moon Walker". While you are Obscured, you can teleport up to your Max Movement.
Magic	Spirit	1	Rune of Spirit Weave	You have advantage on Injury Location rolls.
Magic	Spirit	2	Rune of Spirit Ward	You have resistance to Spirit damage.
Magic	Spirit	3	Rune of Spirit Channel	While wearing this armor, you cannot roll less than a 4 on an Injury Severity roll.
Magic	Spirit	4	Rune of Spirit Surge	Roll a DC 15 Instinct check to create a soul siphon on a creature within 60ft. In you hit their MC, whenever that creature takes damage, you heal the same amount. This can only be done once per Rest.
Magic	Spirit	5	Rune of Spirit Bloom	This armor becomes "Spirit Bloom". If you did not move this turn, one ally within 5ft heals 1d6 hit points.
`.trim();

const lines = input.split("\n");

const magicOrder = ["Stone", "Sky", "Sun", "Moon", "Spirit"];
const weaponOrder = ["Sword", "Bow", "Staff", "Heavy", "Light", "Magic"];
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
  const key = `ARMOR_${weapon.toUpperCase()}_R${tier}_${magic.toUpperCase()}`;

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
