import { useEffect, useState } from "react";
import "./App.css";
import { NFlex } from "./common/NFlex";
import { CharacterClassCard } from "./components/CharacterClassCard";
import { CharacterAttributeScore } from "./components/CharacterAttributeScore";
import { CHARACTER_CLASSES } from "./appendix/CharacterClass";
import { CharacterClassPanel } from "./components/CharacterClassPanel";

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
  const [selectedClassKey, setSelectedClassKey] = useState<string>();

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
      justify="center"
      css={`
        padding: 48px;
      `}
    >
      <NFlex gap={24} style={{ width: 1122, height: 150 }}>
        <CharacterAttributeScore
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
        {CHARACTER_CLASSES.filter((cc) => cc.attribute === "INTELLIGENCE").map(
          (cc) => {
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
                onClick={() => setSelectedClassKey(cc.key)}
              />
            );
          }
        )}
      </NFlex>
      {selectedClassKey && (
        <CharacterClassPanel
          class={CHARACTER_CLASSES.find((cc) => cc.key === selectedClassKey)!}
          {...characterState.classes[selectedClassKey]}
        />
      )}
    </NFlex>
  );
}

export default App;
