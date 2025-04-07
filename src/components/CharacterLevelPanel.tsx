import { ROMAN_NUMERALS } from "../appendix/CharacterAttribute";
import { NFlex } from "../common/NFlex";
import { SHARDS_PER_LEVEL } from "../database/collections/Character";
import { useCharacter } from "../hooks/useCharacter";
import { arrayOf } from "../utils/arrayOf";
import { pulsingBackground } from "../utils/pulsingBackground";

export const CharacterLevelPanel: React.FC = () => {
  const character = useCharacter();

  if (!character) {
    return null;
  }

  const levelExperience = character.getLevelExperience();
  const shardCost = character.getLevelShardCost();

  return (
    <NFlex vertical gap={6}>
      <div style={{ fontFamily: "Grenze", fontSize: 28 }}>
        Incarnate {ROMAN_NUMERALS[character.getLevel() - 1]}
      </div>
      <NFlex gap={3}>
        {arrayOf(5).map((i) => {
          const shardCostStart = shardCost * i;
          const fillRatio = Math.min(
            1,
            (levelExperience - shardCostStart) / shardCost
          );
          return (
            <div
              key={i}
              style={{
                height: 6,
                width: 60,
                background: "#707070",
                borderRadius: 2,
                position: "relative",
              }}
            >
              {levelExperience > shardCostStart && (
                <div
                  css={`
                    width: ${`${fillRatio * 100}%`};
                    height: 100%;
                    position: absolute;
                    border-radius: 2px;
                    ${pulsingBackground("#1f9bf3")}
                  `}
                />
              )}
            </div>
          );
        })}
      </NFlex>
      <NFlex
        justify="space-between"
        style={{
          fontFamily: "Reddit Sans Condensed",
          fontSize: 12,
          opacity: 0.7,
        }}
      >
        <div>
          {levelExperience} / {shardCost * SHARDS_PER_LEVEL} XP
        </div>
        <NFlex gap={6}>
          <div>
            {character.getSpentShards()} / {character.getShards()} Soul Shards
          </div>
          <div>|</div>
          <div>
            {character.getSpentSurges()} / {character.getSurges()} Soul Surges
          </div>
        </NFlex>
      </NFlex>
    </NFlex>
  );
};
