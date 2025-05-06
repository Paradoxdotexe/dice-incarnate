import { ROMAN_NUMERALS } from '../appendix/CharacterAttribute';
import { NFlex } from '../common/NFlex';
import { SHARDS_PER_LEVEL } from '../database/collections/Character';
import { useCharacter } from '../hooks/useCharacter';
import { arrayOf } from '../utils/arrayOf';
import { pulsingBackground } from '../utils/pulsingBackground';

export const CharacterLevelPanel: React.FC = () => {
  const character = useCharacter();

  if (!character) {
    return null;
  }

  const levelExperience = character.getLevelExperience();
  const shardCost = character.getLevelShardCost();

  return (
    <NFlex vertical gap={6}>
      <input
        value={character.name}
        onChange={(e) =>
          character.update({
            $set: {
              name: e.target.value,
            },
          })
        }
        placeholder="Unnamed Character"
        css={`
          background: none;
          border: none;
          outline: none;
          color: white;
          font-family: Grenze;
          font-size: 28px;
          padding: 0;
          height: 1em;
        `}
      />
      <NFlex align="center" gap={3}>
        <NFlex gap={3}>
          {arrayOf(SHARDS_PER_LEVEL).map((i) => {
            const shardCostStart = shardCost * i;
            const fillRatio = Math.min(1, (levelExperience - shardCostStart) / shardCost);
            return (
              <div
                key={i}
                style={{
                  height: 6,
                  width: 300 / SHARDS_PER_LEVEL,
                  background: '#707070',
                  borderRadius: 2,
                  position: 'relative',
                }}
              >
                {levelExperience > shardCostStart && (
                  <div
                    css={`
                      width: ${`${fillRatio * 100}%`};
                      height: 100%;
                      position: absolute;
                      border-radius: 2px;
                      ${pulsingBackground('#1f9bf3')}
                    `}
                  />
                )}
              </div>
            );
          })}
        </NFlex>
      </NFlex>

      <NFlex
        justify="space-between"
        style={{
          fontFamily: 'Reddit Sans Condensed',
          fontSize: 12,
          opacity: 0.7,
        }}
      >
        <div>
          Incarnate {ROMAN_NUMERALS[character.getLevel() - 1]} ({character.experience} XP)
        </div>
        {/* <div>
          {levelExperience} / {shardCost * SHARDS_PER_LEVEL} XP
        </div> */}
        <NFlex gap={6}>
          <div>
            {character.getSpentShards()} / {character.getShards()} Shards
          </div>
          <div>|</div>
          <div>
            {character.getSpentSurges()} / {character.getSurges()} Surges
          </div>
        </NFlex>
      </NFlex>
    </NFlex>
  );
};
