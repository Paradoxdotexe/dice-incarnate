import { useEffect, useState } from "react";
import "./App.css";
import { NFlex } from "./common/NFlex";
import { CharacterClassCard } from "./components/CharacterClassCard";
import { CharacterAbilityScore } from "./components/CharacterAbilityScore";
import { CHARACTER_CLASSES } from "./appendix/CharacterClass";

function App() {
  const [characterState, setCharacterState] = useState<{
    classes: { [key: string]: { acquiredTraits: string[]; ascension: number } };
  }>({
    classes: {
      INT_INTELLIGENT: {
        acquiredTraits: [],
        ascension: 0,
      },
      INT_SAGE_STORM: {
        acquiredTraits: [],
        ascension: 0,
      },
    },
  });

  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      event?.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return (
    <NFlex
      vertical
      align="center"
      css={`
        padding: 48px;
      `}
    >
      <div
        css={`
          width: 1000px;
        `}
      >
        <NFlex gap={24}>
          <CharacterAbilityScore
            name="Intelligence"
            score={
              10 +
              Object.entries(characterState.classes)
                .filter(([key]) => key.startsWith("INT"))
                .reduce(
                  (count, [_, classState]) =>
                    count +
                    classState.acquiredTraits.length +
                    classState.ascension * 2,
                  0
                )
            }
          />
          {CHARACTER_CLASSES.filter(
            (cc) => cc.attribute === "INTELLIGENCE"
          ).map((cc) => {
            const classState = characterState.classes[cc.key];
            return (
              <CharacterClassCard
                key={cc.key}
                class={cc}
                acquired={classState.acquiredTraits.length}
                ascension={classState.ascension}
                onAcquire={(change) => {
                  if (change === 1) {
                    const count =
                      characterState.classes[cc.key].acquiredTraits.length;
                    characterState.classes[cc.key].acquiredTraits.push(
                      cc.traits[count].key
                    );
                  } else {
                    characterState.classes[cc.key].acquiredTraits.splice(-1, 1);
                  }
                  setCharacterState({ ...characterState });
                }}
                onAscend={(change) => {
                  characterState.classes[cc.key].ascension += change;
                  setCharacterState({ ...characterState });
                }}
              />
            );
          })}
        </NFlex>
      </div>
    </NFlex>
  );
}

export default App;
