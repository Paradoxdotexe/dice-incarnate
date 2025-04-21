const input = `
Heavy	Stone	1	Rune of Stone Plate	Your Armor Class is increased by 1.
Heavy	Stone	2	Rune of Stone Shell	Spend 1 Mana to harden this armor. You have resistance against the next attack that hits you.
Heavy	Stone	3	Rune of Stone Anchor	While wearing this armor, you cannot be moved by another creature.
Heavy	Stone	4	Rune of Stone Charge	Once per Rest, you can turn this armor into solid diamond. Until your next turn, you gain Invulnerability but cannot move.
Heavy	Stone	5	Rune of Stone Spines	This armor becomes "Stone Spine". When a creature hits you with a melee attack, this armor deals half the amount of damage back on them as Stone damage.
Heavy	Sky	1	Rune of Sky Plate	This armor no longer reduces your Movement Speed.
Heavy	Sky	2	Rune of Sky Shell	Spend 1 Mana to imbue this armor with Sky magic. Until your next turn, your movement does not prompt opportunity attacks and your Movement Speed is doubled.
Heavy	Sky	3	Rune of Sky Anchor	While wearing this armor, you cannot be knocked Prone.
Heavy	Sky	4	Rune of Sky Charge	Once per Rest, you can leap 10ft into the air. When you land, all creatures within 5ft take 1d6 Sky damage.
Heavy	Sky	5	Rune of Sky Storm	This armor becomes "Sky Storm". When a creature ends its turn within 5ft of you, roll an Agility check. If you hit their WC, they take 1d6 Sky damage and are (optionally) pushed back 5ft.
Heavy	Sun	1	Rune of Sun Plate	Your Ward Class is increased by 1.
Heavy	Sun	2	Rune of Sun Shell	Spend 1 Mana to blind creatures within 5ft with searing sunlight. Roll a Knowledge check. If you hit their WC, they are Blinded until the end of their next turn.
Heavy	Sun	3	Rune of Sun Anchor	While wearing this armor, you can see through illusions created by Moon magic.
Heavy	Sun	4	Rune of Sun Charge	Once per Rest, you can determine the AC, WC, and HP of all creatures within 15ft.
Heavy	Sun	5	Rune of the Sun Seer	This armor becomes "Sun Seer". While wearing this armor, you cannot be Blinded or Flanked.
Heavy	Moon	1	Rune of Moon Plate	This armor is rendered invisible until you are first attacked in combat. While your armor is invisible, attacks are guaranteed to miss.
Heavy	Moon	2	Rune of Moon Shell	Spend 1 Mana to blur your form. Until you move, you are Obscured.
Heavy	Moon	3	Rune of Moon Anchor	While wearing this armor, your movement is distorted. Opportunity attacks against you have disadvantage.
Heavy	Moon	4	Rune of Moon Charge	Once per Rest, you can create a flickering illusion of yourself within 15ft. This illusion has the same AC and WC as you, but only one hit point.
Heavy	Moon	5	Rune of Moon Mirage	This amor becomes "Moon Mirage". When your illusion is destroyed, you can immediately create a new one.
Heavy	Spirit	1	Rune of Spirit Plate	This armor is a bridge between the Spirit Plane and Natural Plane. When you are incapacitated, roll an Instinct check. On a natural 20, you return to 1 hit point.
Heavy	Spirit	2	Rune of Spirit Shell	Spend 1 Mana to imbue this armor with Spirit magic. The next attack against you heals you for half the amount of damage that would have been dealt.
Heavy	Spirit	3	Rune of Spirit Anchor	When you are reduced to 0 hit points, this armor releases a surge of Spirit energy. All enemies within 5ft take 1d12 Spirit damage.
Heavy	Spirit	4	Rune of Spirit Charge	Once per Rest, you can consume the soul of an enemy that dies within 5ft. You heal 1d12 hit points.
Heavy	Spirit	5	Rune of Spirit Mooring	This armor becomes "Spirit Moor". When you are reduced to 0 hit points for the first time in a combat, you return to 1 hit point with Invulnerability until the end of your next turn.
`.trim();

const lines = input.split("\n");

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
