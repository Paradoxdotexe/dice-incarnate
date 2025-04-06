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
import { CharacterClassDrawer } from "./components/CharacterClassDrawer";
import { CHARACTER_ATTRIBUTES } from "./appendix/CharacterAttribute";
import { useCharacter } from "./hooks/useCharacter";
import { NDrawer } from "./common/NDrawer";
import PlusIcon from "./assets/icons/Plus.svg?react";
import { useCharacterClasses } from "./hooks/useCharacterClasses";

const ROW_GAP = 18;

function App() {
  const character = useCharacter();
  const characterClasses = useCharacterClasses();

  const [selectedClassKey, setSelectedClassKey] = useState<string>();
  const [attributeKey, setAttributeKey] = useState<string>();

  if (!character || !characterClasses) {
    return null;
  }

  const selectedClass = characterClasses.find(
    (cc) => cc.key === selectedClassKey
  );
  const selectedClassState = selectedClassKey
    ? character.getClassState(selectedClassKey)
    : undefined;

  return (
    <NFlex
      vertical
      align="center"
      justify="center"
      css={`
        padding: 24px;
        min-height: 100vh;
        overflow-x: hidden;
      `}
      gap={12}
    >
      <NFlex style={{ width: 894 }} gap={ROW_GAP}>
        <Header style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }}>
          SKILLS
        </Header>
        <Header style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>PERKS</Header>
        <Header style={{ flex: 1 }}>CLASSES</Header>
      </NFlex>

      <NFlex gap={ROW_GAP} style={{ width: 894 }}>
        <NFlex vertical justify="center" gap={24} style={{ flex: 1 }}>
          {CHARACTER_ATTRIBUTES.map((attribute) => {
            const attributeClasses = characterClasses.filter(
              (cc) =>
                cc.attributeKey === attribute.key &&
                (cc.type === "PERK" ||
                  (cc.type === "CLASS" && !!character.getClassState(cc.key)))
            );
            return (
              <NFlex key={attribute.key} gap={ROW_GAP}>
                <CharacterAttributeScore
                  attribute={attribute}
                  score={10 + character.getAttributeBonus(attribute.key)}
                />
                {attributeClasses.map((cc) => {
                  const classState = character.getClassState(cc.key);
                  return (
                    <CharacterClassCard
                      key={cc.key}
                      class={cc}
                      classState={classState}
                      onClick={() => setSelectedClassKey(cc.key)}
                    />
                  );
                })}
                {attributeClasses.length < 3 && (
                  <NFlex
                    vertical
                    align="center"
                    justify="center"
                    gap={6}
                    style={{
                      width: CHARACTER_CLASS_CARD_WIDTH,
                      height: CHARACTER_CLASS_CARD_HEIGHT,
                      border: `2px solid #494949`,
                      color: "#808080",
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

      <NFlex style={{ width: 894, marginTop: 48 }} gap={ROW_GAP}>
        <Header style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }} />
        <Header style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>WEAPONS</Header>
        <Header style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>ARMOR</Header>
        <Header style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>ITEMS</Header>
      </NFlex>

      <NFlex style={{ width: 894 }} gap={ROW_GAP}>
        <div style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }} />
        {["WEAPON", "ARMOR", "ITEM"].map((classType) => (
          <NFlex key={classType} vertical gap={ROW_GAP}>
            {characterClasses
              .filter((cc) => cc.type === classType)
              .map((cc) => {
                const classState = character.getClassState(cc.key);
                return (
                  <CharacterClassCard
                    key={cc.key}
                    class={cc}
                    classState={classState}
                    onClick={() => setSelectedClassKey(cc.key)}
                  />
                );
              })}
          </NFlex>
        ))}
      </NFlex>

      <NDrawer
        open={!!attributeKey}
        onClose={() => setAttributeKey(undefined)}
        width={CHARACTER_CLASS_CARD_WIDTH + 48}
      >
        <NFlex vertical gap={18} style={{ padding: 24 }}>
          {characterClasses
            .filter(
              (cc) =>
                cc.attributeKey === attributeKey &&
                cc.type === "CLASS" &&
                !character.getClassState(cc.key)
            )
            .map((cc) => (
              <CharacterClassCard
                key={cc.key}
                class={cc}
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
          classState={selectedClassState}
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

const Header: React.FC<{ children?: string; style: React.CSSProperties }> = (
  props
) => {
  return (
    <NFlex
      align="center"
      gap={6}
      style={{
        fontWeight: "600",
        fontSize: 14,
        visibility: !props.children ? "hidden" : undefined,
        paddingBottom: 6,
        ...props.style,
      }}
      css={`
        &::after,
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background: #727272;
        }
      `}
    >
      {props.children}
    </NFlex>
  );
};
