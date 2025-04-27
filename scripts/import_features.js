const input = `
WIS	Beast Druid	Ability	Attack Beast	Roll an Instinct check to command your beast to attack a creature within 30ft. If you hit their AC, spend 1 Mana. That creature takes 1d12 Piercing damage and can be dragged 5ft in any direction.
WIS	Beast Druid	Ability	Guard Beast	Roll a DC 10 Instinct check to command your beast to defend you. On a success, spend 2 Mana. The next time you are hit with a melee attack, your beast will deflect 2d12 damage.
WIS	Beast Druid	Ability	Mercy Beast	Roll a DC 15 Instinct check to command your beast to help an incapacitated creature within 60ft. On a success, spend 3 Mana. That creature is stabilized with 3d12 health.
WIS	Beast Druid	Perk	Beast Speech	You can communicate with beasts through their unique visual and auditory cues. You are effectively limited to single words or basic phrases, such as "threat" or "go that way".
WIS	Beast Druid	Perk	Beast Sight	You can look through the eyes of your beast while they are within 120ft.
WIS	Beast Druid	Perk	Beast Shape	You can transform into the same animal as your beast for up to 1 hour. You can only do this once per Rest.
WIS	Devote Monk	Ability	Force Deflection	Roll a DC 5 Instinct check as a Reaction to deflect an incoming attack. On a success, spend 1 Mana. You deflect 1d12 damage.
WIS	Devote Monk	Ability	Force Absorption	Roll a DC 10 Instinct check as a Reaction to absorb the energy of an incoming attack. On a success, spend 2 Mana. You absorb up to 2d12 or 4d6 damage dice and can add that damage dice to your next attack.
WIS	Devote Monk	Ability	Force Meditation	Roll a DC 15 Instinct check to meditate while at least 60ft away from the nearest enemy. On a success, spend 3 Mana. You heal 3d12 hit points.
WIS	Devote Monk	Perk	Mastery of Body	When you forgo an Action, gain a Reaction.
WIS	Devote Monk	Perk	Mastery of Mind	When you forgo two Actions, gain 1 Mana.
WIS	Devote Monk	Perk	Mastery of Soul	When you are healed, you heal an additional 1d6 hit points.
`.trim();

const lines = input.split('\n');

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
