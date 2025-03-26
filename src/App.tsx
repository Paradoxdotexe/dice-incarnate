import { useState } from "react";
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
import { CHARACTER_ATTRIBUTES } from "./appendix/CharacterAttribute";
import { useCharacter } from "./hooks/useCharacter";

const ROW_GAP = 18;

function App() {
  const character = useCharacter();

  const [selectedClassKey, setSelectedClassKey] = useState<string>();

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
                score={10 + character.getAttributeBonus(attribute.key)}
              />
              {CHARACTER_CLASSES.filter(
                (cc) => cc.attributeKey === attribute.key
              ).map((cc) => {
                const classState = character.getClassState(cc.key);
                return (
                  <CharacterClassCard
                    key={cc.key}
                    class={cc}
                    acquiredTraits={classState.traits}
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
            acquiredTraits={selectedClassState.traits}
            ascension={selectedClassState.ascension}
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
    </NFlex>
  );
}

export default App;
