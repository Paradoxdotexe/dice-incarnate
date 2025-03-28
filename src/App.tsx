import { useState } from "react";
import "./App.css";
import { NFlex } from "./common/NFlex";
import {
  CHARACTER_CLASS_CARD_HEIGHT,
  CHARACTER_CLASS_CARD_WIDTH,
  CharacterClassCard,
} from "./components/CharacterClassCard";
import {
  CHARACTER_ATTRIBUTE_SCORE_WIDTH,
  CharacterAttributeScore,
} from "./components/CharacterAttributeScore";
import { CHARACTER_CLASSES, getClassType } from "./appendix/CharacterClass";
import { CharacterClassDrawer } from "./components/CharacterClassDrawer";
import { CHARACTER_ATTRIBUTES } from "./appendix/CharacterAttribute";
import { useCharacter } from "./hooks/useCharacter";
import { NDrawer } from "./common/NDrawer";
import PlusIcon from "./assets/icons/Plus.svg?react";

const ROW_GAP = 18;

function App() {
  const character = useCharacter();

  const [selectedClassKey, setSelectedClassKey] = useState<string>();
  const [attributeKey, setAttributeKey] = useState<string>();

  if (!character) {
    return null;
  }

  const selectedClass = CHARACTER_CLASSES.find(
    (cc) => cc.key === selectedClassKey
  );
  const selectedClassState = selectedClassKey
    ? character.getClassState(selectedClassKey)
    : undefined;

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
          width: 894,
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
        <div style={{ flex: 1 }}>CLASSES</div>
      </NFlex>
      <NFlex gap={ROW_GAP} style={{ width: 894 }}>
        <NFlex vertical justify="center" gap={24} style={{ flex: 1 }}>
          {CHARACTER_ATTRIBUTES.map((attribute) => {
            const characterClasses = CHARACTER_CLASSES.filter(
              (cc) =>
                cc.attributeKey === attribute.key &&
                (getClassType(cc.key) === "GENERAL" ||
                  !!character.getClassState(cc.key))
            );
            return (
              <NFlex key={attribute.key} gap={ROW_GAP}>
                <CharacterAttributeScore
                  attribute={attribute}
                  score={10 + character.getAttributeBonus(attribute.key)}
                />
                {characterClasses.map((cc) => {
                  const classState = character.getClassState(cc.key);
                  return (
                    <CharacterClassCard
                      key={cc.key}
                      class={cc}
                      acquiredTraits={classState?.traits ?? []}
                      ascension={classState?.ascension ?? 0}
                      onClick={() => setSelectedClassKey(cc.key)}
                    />
                  );
                })}
                {characterClasses.length < 3 && (
                  <NFlex
                    vertical
                    align="center"
                    justify="center"
                    gap={6}
                    style={{
                      width: CHARACTER_CLASS_CARD_WIDTH,
                      height: CHARACTER_CLASS_CARD_HEIGHT,
                      border: `2px solid #494949`,
                      color: '#808080',
                      borderRadius: 12,
                      cursor: "pointer",
                    }}
                    css={`
                      opacity: 0.5;

                      &:hover {
                        opacity: 1;
                      }
                    `}
                    onClick={() => setAttributeKey(attribute.key)}
                  >
                    <PlusIcon style={{ fontSize: 24 }} />
                    <div>Add Class</div>
                  </NFlex>
                )}
              </NFlex>
            );
          })}
        </NFlex>
      </NFlex>

      <NDrawer
        open={!!attributeKey}
        onClose={() => setAttributeKey(undefined)}
        width={CHARACTER_CLASS_CARD_WIDTH + 48}
      >
        <NFlex vertical gap={18} style={{ padding: 24 }}>
          {CHARACTER_CLASSES.filter(
            (cc) =>
              cc.attributeKey === attributeKey &&
              getClassType(cc.key) === "CLASS" &&
              !character.getClassState(cc.key)
          ).map((cc) => (
            <CharacterClassCard
              key={cc.key}
              class={cc}
              acquiredTraits={[]}
              ascension={0}
              onClick={() => {
                setAttributeKey(undefined);
                setSelectedClassKey(cc.key);
              }}
            />
          ))}
        </NFlex>
      </NDrawer>

      {selectedClass && (
        <CharacterClassDrawer
          open={true}
          onClose={() => setSelectedClassKey(undefined)}
          key={selectedClass.key}
          class={selectedClass}
          acquiredTraits={selectedClassState?.traits ?? []}
          ascension={selectedClassState?.ascension ?? 0}
          onClick={() => setSelectedClassKey(selectedClass.key)}
          onAcquire={(traitKey) => {
            character.acquireClassTrait(selectedClass.key, traitKey);
          }}
          acquireDisabled={character.getAvailableExperience() <= 0}
          onAscend={() => {
            character.ascendClass(selectedClass.key);
          }}
          ascendDisabled={character.getAvailableAscension() <= 0}
        />
      )}
    </NFlex>
  );
}

export default App;
