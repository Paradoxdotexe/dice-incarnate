import { useDatabaseQuery } from '../database/useDatabaseQuery';
import { useParams } from 'react-router';

export const useCharacter = () => {
  const { characterId } = useParams();

  const characters = useDatabaseQuery('character', {
    selector: {
      id: {
        $eq: characterId,
      },
    },
  });

  return characters?.[0];
};
