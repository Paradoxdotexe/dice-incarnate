import { ReactNode, useState } from "react";
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
import { Header } from "./components/Header";
import { capitalize } from "lodash-es";
import { CharacterClassDocument } from "./database/collections/CharacterClass";
import { CharacterLevelPanel } from "./components/CharacterLevelPanel";

const ROW_GAP = 18;

function App() {
  const character = useCharacter();
  const characterClasses = useCharacterClasses();

  const [selectedClassKey, setSelectedClassKey] = useState<string>();
  const [choosableClasses, setChoosableClasses] =
    useState<CharacterClassDocument[]>();

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
      gap={15}
    >
      <NFlex style={{ width: 894, paddingBottom: 48 }}>
        <CharacterLevelPanel />
      </NFlex>

      <NFlex style={{ width: 894 }} gap={ROW_GAP}>
        <Header style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }}>
          SKILLS
        </Header>
        <Header align="left" style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>
          PERKS
        </Header>
        <Header align="left" style={{ flex: 1 }}>
          CLASSES
        </Header>
      </NFlex>

      <NFlex gap={ROW_GAP} style={{ width: 894 }}>
        <NFlex vertical justify="center" gap={18} style={{ flex: 1 }}>
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
                  <AddClassCard
                    onClick={() =>
                      setChoosableClasses(
                        characterClasses.filter(
                          (cc) =>
                            cc.attributeKey === attribute.key &&
                            cc.type === "CLASS" &&
                            !character.getClassState(cc.key)
                        )
                      )
                    }
                  >
                    Add Class
                  </AddClassCard>
                )}
              </NFlex>
            );
          })}
        </NFlex>
      </NFlex>

      <NFlex style={{ width: 894, marginTop: 48 }} gap={ROW_GAP}>
        <Header style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }} />
        <Header align="left" style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>
          WEAPONS
        </Header>
        <Header align="left" style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>
          ARMOR
        </Header>
        <Header align="left" style={{ width: CHARACTER_CLASS_CARD_WIDTH }}>
          ITEMS
        </Header>
      </NFlex>

      <NFlex style={{ width: 894 }} gap={ROW_GAP}>
        <div style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }} />
        {["WEAPON", "ARMOR", "ITEM"].map((classType) => {
          const classes = characterClasses.filter(
            (cc) => cc.type === classType && !!character.getClassState(cc.key)
          );
          return (
            <NFlex
              key={classType}
              vertical
              gap={ROW_GAP}
              style={{ width: CHARACTER_CLASS_CARD_WIDTH }}
            >
              {classes.map((cc) => {
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
              <AddClassCard
                onClick={() =>
                  setChoosableClasses(
                    characterClasses.filter(
                      (cc) =>
                        cc.type === classType &&
                        !character.getClassState(cc.key)
                    )
                  )
                }
              >
                Add {capitalize(classType)}
              </AddClassCard>
            </NFlex>
          );
        })}
      </NFlex>

      <NDrawer
        open={!!choosableClasses}
        onClose={() => setChoosableClasses(undefined)}
        width={CHARACTER_CLASS_CARD_WIDTH + 48}
      >
        <NFlex vertical gap={18} style={{ padding: 24 }}>
          {choosableClasses?.map((cc) => (
            <CharacterClassCard
              key={cc.key}
              class={cc}
              onClick={() => {
                setChoosableClasses(undefined);
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
          onAcquire={(featureKey) => {
            character.acquireClassTrait(selectedClass.key, featureKey);
          }}
          acquireDisabled={character.getAvailableShards() <= 0}
          onAscend={() => {
            character.ascendClass(selectedClass.key);
          }}
          ascendDisabled={character.getAvailableSurges() <= 0}
        />
      )}
    </NFlex>
  );
}

const AddClassCard: React.FC<{ onClick: () => void; children: ReactNode }> = (
  props
) => {
  return (
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
      onClick={props.onClick}
    >
      <PlusIcon style={{ fontSize: 24 }} />
      <div>{props.children}</div>
    </NFlex>
  );
};

export default App;
