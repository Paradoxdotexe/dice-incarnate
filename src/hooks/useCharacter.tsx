import { useEffect } from 'react';
import { useDatabaseQuery } from '../database/useDatabaseQuery';
import { useNavigate, useParams } from 'react-router';

export const useCharacter = () => {
  const { characterId } = useParams();
  const navigate = useNavigate();

  const characters = useDatabaseQuery('character', {
    selector: {
      id: {
        $eq: characterId,
      },
    },
  });

  useEffect(() => {
    if (characters?.length === 0) {
      navigate('/');
    }
  }, [characters]);

  return characters?.[0];
};
