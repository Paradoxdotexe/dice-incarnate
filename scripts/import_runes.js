const input = `
Sword	Stone	1	Rune of Stone Edge	This weapon deals max damage against objects.
Sword	Stone	2	Rune of Stone Smite	Spend 1 Mana to turn this weapon's blade into diamond. Your next attack deals max damage.
Sword	Stone	3	Rune of Stone Stance	While wielding this weapon in combat, your AC is increased by 1.
Sword	Stone	4	Rune of Stone Surge	Once per Rest, you can roll a Strength check to shatter the earth under all creatures within 5ft. If you hit their WC, they take 1d12 Stone damage and are knocked Prone.
Sword	Stone	5	Rune of Stone Splitting	This weapon becomes "Stone Splitter". It requires two hands to wield and deals an additional 1d6 Stone damage on each hit.
Sword	Sky	1	Rune of Sky Edge	This weapon does not require an Action to draw or stow.
Sword	Sky	2	Rune of Sky Smite	Spend 1 Mana to make this weapon weightless. Your next attack does not consume an Action.
Sword	Sky	3	Rune of Sky Stance	While wielding this weapon in combat, your Movement Speed is increased by 5ft.
Sword	Sky	4	Rune of Sky Surge	Once per Rest, you can roll an Agility check to burst forward up to 30ft. If you hit the WC of any creatures in your path, they take 1d12 Sky damage and are knocked Prone.
Sword	Sky	5	Rune of Sky Slicing	This weapon becomes "Sky Slice". If you consumed Mana this turn, you can attack once with this weapon without consuming an Action.
Sword	Sun	1	Rune of Sun Edge	This weapon negates resistance to Slashing damage.
Sword	Sun	2	Rune of Sun Smite	Spend 1 Mana to guide this weapon towards a creature's weakness. Your next attack is a critical hit.
Sword	Sun	3	Rune of Sun Stance	While wielding this weapon, you can better read the fighting style of your opponent. After being hit by a creature, you have advantage on your next attack against them.
Sword	Sun	4	Rune of Sun Surge	Once per Rest, you can roll a DC 15 Knowledge check. On a success, the next skill check made by you or your allies have advantage.
Sword	Sun	5	Rune of Sun Vision	This weapon becomes "Sun Spot". While wielding this weapon, the penalties of Blinded, Obscured, and Flanked do not affect you.
Sword	Moon	1	Rune of Moon Edge	This weapon is rendered invisible until your first attack in combat. While your weapon is invisible, attacks are guaranteed to hit.
Sword	Moon	2	Rune of Moon Smite	Spend 1 Mana to turn this weapon invisible. Your next attack is guaranteed to hit.
Sword	Moon	3	Rune of Moon Stance	While wielding this weapon, you can parry an incoming attack with an illusion. As a Reaction, give an incoming melee attack disadvantage.
Sword	Moon	4	Rune of Moon Surge	Once per Rest, you can roll a DC 15 Charisma check to reappear behind a creature within 15ft. If you hit their WC, the take 1d12 Moon damage.
Sword	Moon	5	Rune of Moon Shadow	This weapon becomes "Moon Shadow". After landing an attack with this weapon, you become Obscured until you deal or take damage.
Sword	Spirit	1	Rune of Spirit Edge	This weapon is a vessel for lost souls. Creatures killed by this weapon cannot be revived or resurrected.
Sword	Spirit	2	Rune of Spirit Smite	Spend 1 Mana to imbue this weapon with Spirit magic. Your next attack deals Spirit damage instead of Slashing damage. If you kill a creature with this attack, you gain Invulnerability until your next turn.
Sword	Spirit	3	Rune of Spirit Stance	While wielding this weapon, the damage applied to allies within 5ft is redirected to you instead.
Sword	Spirit	4	Rune of Spirit Surge	Once per Rest, you can roll a DC 15 Instinct check. On a success, you consume a soul captured by this weapon and heal 1d12 hit points.
Sword	Spirit	5	Rune of the Spirit Eater	This weapon becomes "Spirit Eater". When this weapon deals Spirit damage, you heal the same amount of damage dealt.
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
