import { useEffect } from "react";
import { useDatabaseCollection } from "../database/useDatabaseCollection";
import { useDatabaseQuery } from "../database/useDatabaseQuery";
import { v4 as uuid } from "uuid";

export const useCharacter = () => {
  const charactersCollection = useDatabaseCollection("character");
  const characters = useDatabaseQuery("character");

  useEffect(() => {
    // initialize character on first arrival
    charactersCollection
      .count()
      .exec()
      .then((count) => {
        if (count === 0) {
          charactersCollection.insert({
            id: uuid(),
            experience: 2000,
            classStates: [],
          });
        }
      });
  }, [charactersCollection]);

  return characters?.[0];
};
