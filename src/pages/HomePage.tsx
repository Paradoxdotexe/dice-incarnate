import { useNavigate } from 'react-router';
import { NButton } from '../common/NButton';
import { NFlex } from '../common/NFlex';
import { useDatabaseCollection } from '../database/useDatabaseCollection';
import { useDatabaseQuery } from '../database/useDatabaseQuery';
import { v4 as uuid } from 'uuid';
import { useCharacterClasses } from '../hooks/useCharacterClasses';
import { keyBy } from 'lodash-es';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const characterCollection = useDatabaseCollection('character');
  const characters = useDatabaseQuery('character');
  const characterClasses = useCharacterClasses();
  const classByKey = keyBy(characterClasses, 'key');

  const onCreateCharacter = async () => {
    const id = uuid();
    characterCollection
      .insert({
        id,
        name: 'Unnamed Character',
        experience: 300 + 600 + 900 + 1200 + 1500 + 1800, // total experience for level 7
        classStates: [],
      })
      .then(() => navigate(`/character/${id}`));
  };

  return (
    <NFlex
      vertical
      align="center"
      justify="center"
      css={`
        padding: 24px;
        min-height: 100vh;
        overflow-x: hidden;
      `}
      gap={15}
    >
      {characterClasses &&
        characters?.map((character) => (
          <NFlex
            vertical
            style={{
              width: 400,
              border: `2px solid #686868`,
              borderRadius: 12,
              position: 'relative',
              padding: 12,
              cursor: 'pointer',
              userSelect: 'none',
            }}
            gap={9}
            onClick={() => navigate(`/character/${character.id}`)}
          >
            <strong style={{ fontSize: 28, fontFamily: 'Grenze' }}>{character.name}</strong>
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {[...character.classStates]
                .sort((a, b) => b.ascension - a.ascension)
                .filter((classState) => classByKey[classState.key].type === 'CLASS')
                .map((classState) => {
                  const cc = classByKey[classState.key];
                  return cc.getName(classState);
                })
                .join(' / ')}
            </div>
          </NFlex>
        ))}

      <NButton onClick={onCreateCharacter}>Create new character</NButton>
    </NFlex>
  );
};
