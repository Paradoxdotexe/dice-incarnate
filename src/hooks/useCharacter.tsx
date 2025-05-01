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
            experience: 300 + 600 + 900 + 1200 + 1500 + 1800, // total experience for level 7
            classStates: [],
          });
        }
      });
  }, [charactersCollection]);

  return characters?.[0];
};
