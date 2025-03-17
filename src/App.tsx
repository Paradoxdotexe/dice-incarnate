import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { NFlex } from "./common/NFlex";
import {
  CHARACTER_CLASS_CARD_WIDTH,
  CharacterClassCard,
} from "./components/CharacterClassCard";
import {
  CHARACTER_ATTRIBUTE_SCORE_WIDTH,
  CharacterAttributeScore,
} from "./components/CharacterAttributeScore";
import { CHARACTER_CLASSES } from "./appendix/CharacterClass";
import { CharacterClassPanel } from "./components/CharacterClassPanel";
import {
  CHARACTER_ATTRIBUTES,
  CharacterAttributeKey,
} from "./appendix/CharacterAttribute";
import { NButton } from "./common/NButton";

const ROW_GAP = 18;
const ROW_WIDTH =
  CHARACTER_ATTRIBUTE_SCORE_WIDTH +
  CHARACTER_CLASS_CARD_WIDTH * 5 +
  ROW_GAP * 5;

function App() {
  const [characterState, setCharacterState] = useState<{
    classes: { [key: string]: { acquiredTraits: string[]; ascension: number } };
  }>({
    classes: CHARACTER_CLASSES.reduce(
      (classes, cc) => ({
        ...classes,
        [cc.key]: { acquiredTraits: [], ascension: 0 },
      }),
      {}
    ),
  });
  const [selectedClassKey, setSelectedClassKey] = useState<string>();
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      event?.preventDefault();
    };

    document.addEventListener("contextmenu", onContextMenu);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  const scoreByAttribute = useMemo(() => {
    return CHARACTER_ATTRIBUTES.reduce((dict, attribute) => {
      const bonus = Object.entries(characterState.classes)
        .filter(([key]) => key.startsWith(attribute.key))
        .reduce(
          (count, [_, classState]) =>
            count + classState.acquiredTraits.length + classState.ascension * 2,
          0
        );
      return { ...dict, [attribute.key]: 10 + bonus };
    }, {}) as { [key in CharacterAttributeKey]: number };
  }, [characterState]);

  const [xpPoints, levelPoints] = useMemo(() => {
    return [
      Object.values(characterState.classes).reduce(
        (count, cc) => count + cc.acquiredTraits.length,
        0
      ),
      Object.values(characterState.classes).reduce(
        (count, cc) => count + cc.ascension,
        0
      ),
    ];
  }, [characterState]);

  return (
    <NFlex
      justify="center"
      align="center"
      vertical
      css={`
        padding: 24px;
        min-height: 100vh;
        overflow-x: hidden;
      `}
    >
      <NButton
        style={{ position: "absolute", right: 24, top: 24 }}
        color={isEditing ? "#34A9FE" : undefined}
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? "Save" : "Edit"}
      </NButton>
      <NFlex gap={ROW_GAP} style={{ width: ROW_WIDTH }}>
        <NFlex vertical justify="center" gap={24} style={{ flex: 1 }}>
          {CHARACTER_ATTRIBUTES.map((attribute) => (
            <NFlex key={attribute.key} gap={ROW_GAP}>
              <CharacterAttributeScore
                attribute={attribute}
                score={scoreByAttribute[attribute.key]}
              />
              {CHARACTER_CLASSES.filter(
                (cc) =>
                  cc.attributeKey === attribute.key &&
                  (isEditing ||
                    !!characterState.classes[cc.key].acquiredTraits.length)
              ).map((cc) => {
                const classState = characterState.classes[cc.key];
                return (
                  <CharacterClassCard
                    key={cc.key}
                    class={cc}
                    acquired={classState.acquiredTraits.length}
                    ascension={classState.ascension}
                    onClick={() => setSelectedClassKey(cc.key)}
                    editable={isEditing}
                    onAcquire={(change) => {
                      if (change === 1) {
                        const count =
                          characterState.classes[cc.key].acquiredTraits.length;
                        characterState.classes[cc.key].acquiredTraits.push(
                          cc.traits[count].key
                        );
                      } else {
                        characterState.classes[cc.key].acquiredTraits.splice(
                          -1,
                          1
                        );
                      }
                      setCharacterState({ ...characterState });
                    }}
                    acquireDisabled={xpPoints >= 6}
                    onAscend={(change) => {
                      characterState.classes[cc.key].ascension += change;
                      setCharacterState({ ...characterState });
                    }}
                    ascendDisabled={levelPoints >= 1}
                  />
                );
              })}
            </NFlex>
          ))}
        </NFlex>

        {selectedClassKey && (
          <CharacterClassPanel
            class={CHARACTER_CLASSES.find((cc) => cc.key === selectedClassKey)!}
            {...characterState.classes[selectedClassKey]}
          />
        )}
      </NFlex>
    </NFlex>
  );
}

export default App;
