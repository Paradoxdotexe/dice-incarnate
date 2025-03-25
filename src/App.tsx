import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { NFlex } from "./common/NFlex";
import {
  CHARACTER_CLASS_CARD_WIDTH,
  CHARACTER_CLASS_CARD_WIDTH_SM,
  CharacterClassCard,
} from "./components/CharacterClassCard";
import {
  CHARACTER_ATTRIBUTE_SCORE_WIDTH,
  CharacterAttributeScore,
} from "./components/CharacterAttributeScore";
import { CHARACTER_CLASSES } from "./appendix/CharacterClass";
import { CharacterClassDrawer } from "./components/CharacterClassDrawer";
import {
  CHARACTER_ATTRIBUTES,
  CharacterAttributeKey,
} from "./appendix/CharacterAttribute";

const ROW_GAP = 18;

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

  const selectedClass = CHARACTER_CLASSES.find(
    (cc) => cc.key === selectedClassKey
  );
  const selectedClassState =
    selectedClassKey && characterState.classes[selectedClassKey];

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
      gap={12}
    >
      <NFlex
        style={{
          width: 1266,
          fontWeight: "600",
          fontSize: 14,
        }}
        css={`
          div {
            display: flex;
            align-items: center;
            gap: 6px;

            &::after,
            &::before {
              content: "";
              display: block;
              width: 100%;
              height: 1px;
              background: #727272;
            }
          }
        `}
        gap={ROW_GAP}
      >
        <div style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }}>SKILLS</div>
        <div style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>PERKS</div>
        <div style={{ width: CHARACTER_CLASS_CARD_WIDTH_SM }}>ARMOR</div>
        <div style={{ width: CHARACTER_CLASS_CARD_WIDTH_SM }}>WEAPONS</div>
        <div style={{ flex: 1 }}>CLASSES</div>
      </NFlex>
      <NFlex gap={ROW_GAP} style={{ width: 1266 }}>
        <NFlex vertical justify="center" gap={24} style={{ flex: 1 }}>
          {CHARACTER_ATTRIBUTES.map((attribute) => (
            <NFlex key={attribute.key} gap={ROW_GAP}>
              <CharacterAttributeScore
                attribute={attribute}
                score={scoreByAttribute[attribute.key]}
              />
              {CHARACTER_CLASSES.filter(
                (cc) => cc.attributeKey === attribute.key
              ).map((cc) => {
                const classState = characterState.classes[cc.key];
                return (
                  <CharacterClassCard
                    key={cc.key}
                    class={cc}
                    acquiredTraits={classState.acquiredTraits}
                    ascension={classState.ascension}
                    onClick={() => setSelectedClassKey(cc.key)}
                  />
                );
              })}
            </NFlex>
          ))}
        </NFlex>

        {selectedClass && selectedClassState && (
          <CharacterClassDrawer
            open={true}
            onClose={() => setSelectedClassKey(undefined)}
            key={selectedClass.key}
            class={selectedClass}
            acquiredTraits={selectedClassState.acquiredTraits}
            ascension={selectedClassState.ascension}
            onClick={() => setSelectedClassKey(selectedClass.key)}
            onAcquire={(traitKey) => {
              characterState.classes[selectedClass.key].acquiredTraits.push(
                traitKey
              );
              characterState.classes[selectedClass.key].acquiredTraits.sort(
                (a, b) =>
                  selectedClass.traits.findIndex((trait) => trait.key === a) -
                  selectedClass.traits.findIndex((trait) => trait.key === b)
              );
              setCharacterState({ ...characterState });
            }}
            acquireDisabled={xpPoints >= 6}
            onAscend={() => {
              characterState.classes[selectedClass.key].ascension += 1;
              setCharacterState({ ...characterState });
            }}
            ascendDisabled={levelPoints >= 2}
          />
        )}
      </NFlex>
    </NFlex>
  );
}

export default App;
