import { useEffect, useState } from "react";
import { useDatabaseQuery } from "../database/useDatabaseQuery";
import { CharacterClassDocument } from "../database/collections/CharacterClass";
import { CharacterClassFeatureDocument } from "../database/collections/CharacterClassFeature";

export const useCharacterClasses = () => {
  const uCharacterClasses = useDatabaseQuery("characterClass");
  const [characterClasses, setCharacterClasses] =
    useState<CharacterClassDocument[]>();

  useEffect(() => {
    if (uCharacterClasses) {
      Promise.all(
        uCharacterClasses.map(async (ucc) => {
          const classFeatures: CharacterClassFeatureDocument[] =
            await ucc.populate("featureKeys");
          (ucc as any).features = classFeatures.sort(
            (a, b) => a.order - b.order
          );
          return ucc as CharacterClassDocument;
        })
      ).then(setCharacterClasses);
    }
  }, [uCharacterClasses]);

  return characterClasses;
};
