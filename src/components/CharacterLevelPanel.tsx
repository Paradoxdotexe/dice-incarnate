import { ROMAN_NUMERALS } from "../appendix/CharacterAttribute";
import { NFlex } from "../common/NFlex";
import { useCharacter } from "../hooks/useCharacter";
import { arrayOf } from "../utils/arrayOf";

export const CharacterLevelPanel: React.FC = () => {
  const character = useCharacter();

  if (!character) {
    return null;
  }

  return (
    <NFlex vertical gap={6}>
      <div style={{ fontFamily: "Grenze", fontSize: 28 }}>
        Incarnate {ROMAN_NUMERALS[character.getAscension() - 1]}
      </div>
      <NFlex gap={3}>
        {arrayOf(5).map((i) => (
          <div
            key={i}
            style={{
              height: 6,
              width: 60,
              background: "#707070",
              borderRadius: 2,
            }}
          />
        ))}
      </NFlex>
      <NFlex
        justify="space-between"
        style={{
          fontFamily: "Reddit Sans Condensed",
          fontSize: 12,
          opacity: 0.7,
        }}
      >
        <div>5000 / 10000 XP</div>
        <NFlex gap={6}>
          <div>
            {character.getSpentExperience()} / {character.getExperience()} Soul Shards
          </div>
          <div>|</div>
          <div>
            {character.getSpentAscension()} / {character.getAscension()} Soul Surges
          </div>
        </NFlex>
      </NFlex>
    </NFlex>
  );
};
