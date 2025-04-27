const input = `
STR	1	#336fca		Vanguard Knight
STR	2	#ca3333		Beserker Barbarian
AGI	1	#0d7535		Marksman Ranger
AGI	2	#3799d2		Storm Sage
INT	1	#f1c645		Guardian Mage
INT	2	#a186d3		Mechanist Mancer
CHA	1	#33ca6d		Leader Herald
CHA	2	#5e28c2		Corruption Chanter
WIS	1	#689c7e		Devote Monk
WIS	2	#d16337		Beast Druid
`.trim();

const lines = input.split('\n');

const output = lines.map((line, i) => {
  const [attribute, order, color, _, name] = line.split('\t');
  const key = `${attribute}_${name.split(' ')[1].toUpperCase()}`;

  return {
    key,
    type: 'CLASS',
    attributeKey: attribute,
    name,
    color,
    order: parseInt(order),
    ascendable: true,
    featureKeys: [...new Array(6)].map((_, i) => `${key}_F${i + 1}`),
  };
});

console.log(JSON.stringify(output, null, 2));
