import { ReactNode, useMemo, useState } from 'react';
import { NFlex } from '../common/NFlex';
import {
  CHARACTER_CLASS_CARD_HEIGHT,
  CHARACTER_CLASS_CARD_WIDTH,
  CharacterClassCard,
} from '../components/CharacterClassCard';
import {
  CHARACTER_ATTRIBUTE_SCORE_WIDTH,
  CharacterAttributeScore,
} from '../components/CharacterAttributeScore';
import { CharacterClassDrawer } from '../components/CharacterClassDrawer';
import { CHARACTER_ATTRIBUTES } from '../appendix/CharacterAttribute';
import { useCharacter } from '../hooks/useCharacter';
import { NDrawer } from '../common/NDrawer';
import PlusIcon from '../assets/icons/Plus.svg?react';
import { useCharacterClasses } from '../hooks/useCharacterClasses';
import { Header } from '../components/Header';
import { capitalize, keyBy } from 'lodash-es';
import { CharacterClassDocument } from '../database/collections/CharacterClass';
import { CharacterLevelPanel } from '../components/CharacterLevelPanel';
import ShieldIcon from '../assets/icons/Shield.svg?react';

const ROW_GAP = 18;

export const CharacterPage: React.FC = () => {
  const character = useCharacter();
  const characterClasses = useCharacterClasses();
  const characterClassByKey = keyBy(characterClasses, 'key');

  const [selectedClassKey, setSelectedClassKey] = useState<string>();
  const [choosableClasses, setChoosableClasses] = useState<CharacterClassDocument[]>();

  const [armorClass, magicClass] = useMemo(() => {
    let [armorClass, magicClass] = [10, 10];

    if (!character || !characterClasses) {
      return [armorClass, magicClass];
    }

    for (const classState of character.classStates) {
      const cc = characterClassByKey[classState.key];
      const featureByKey = keyBy(cc.features, 'key');
      for (const featureKey of classState.featureKeys) {
        const feature = featureByKey[featureKey];
        const description = feature.getDescription(classState.ascension);

        const armorClassBonusMatch = /Armor Class is increased by (\d+)/.exec(description);
        if (armorClassBonusMatch) {
          if (feature.name === 'Armor Training') {
            if (
              !character.classStates.find(
                (classState) => classState.key === 'ARMOR_HEAVY' || classState.key === 'ARMOR_LIGHT'
              )
            ) {
              continue;
            }
          }
          armorClass += parseInt(armorClassBonusMatch[1]);
        }

        const magicClassBonusMatch = /Magic Class is increased by (\d+)/.exec(description);
        if (magicClassBonusMatch) {
          magicClass += parseInt(magicClassBonusMatch[1]);
        }
      }
    }

    return [armorClass, magicClass];
  }, [character, characterClasses]);

  const maxMovement = useMemo(() => {
    if (!character || !characterClasses) {
      return 20;
    }

    let maxMovement =
      Math.floor(
        (20 + character.getAttributeBonus('STR') + character.getAttributeBonus('AGI')) / 5
      ) * 5;

    for (const classState of character.classStates) {
      const cc = characterClassByKey[classState.key];
      const featureByKey = keyBy(cc.features, 'key');
      for (const featureKey of classState.featureKeys) {
        const feature = featureByKey[featureKey];
        const description = feature.getDescription(classState.ascension);

        const movementBonusMatch = /Max Movement is increased by (\d+)/.exec(description);
        if (movementBonusMatch) {
          maxMovement += parseInt(movementBonusMatch[1]);
        }
      }
    }

    return maxMovement;
  }, [character, characterClasses]);

  const maxHitPoints = useMemo(() => {
    if (!character) {
      return 50;
    }

    return (10 + character.getAttributeBonus('STR')) * 5;
  }, [character]);

  if (!character || !characterClasses) {
    return null;
  }

  const selectedClass = characterClasses.find((cc) => cc.key === selectedClassKey);
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
      <NFlex justify="space-between" style={{ width: 894, paddingBottom: 48 }}>
        <CharacterLevelPanel />

        <NFlex gap={18}>
          <NFlex vertical align="center" gap={6}>
            <div style={{ fontSize: 12 }}>Hit Points</div>
            <NFlex vertical align="center" justify="center">
              <ShieldIcon style={{ width: 48, color: 'transparent' }} />
              <div style={{ fontSize: 28, fontWeight: 'bold', position: 'absolute' }}>
                {maxHitPoints}
              </div>
            </NFlex>
          </NFlex>

          <NFlex vertical align="center" gap={6}>
            <div style={{ fontSize: 12 }}>Movement</div>
            <NFlex vertical align="center" justify="center">
              <ShieldIcon style={{ width: 48, color: 'transparent' }} />
              <div style={{ fontSize: 28, fontWeight: 'bold', position: 'absolute' }}>
                {maxMovement}
              </div>
            </NFlex>
          </NFlex>

          <NFlex vertical align="center" gap={6}>
            <div style={{ fontSize: 12 }}>Armor Class</div>
            <NFlex vertical align="center" justify="center">
              <ShieldIcon style={{ width: 48, color: '#1f82f3' }} />
              <div style={{ fontSize: 28, fontWeight: 'bold', position: 'absolute' }}>
                {armorClass}
              </div>
            </NFlex>
          </NFlex>

          <NFlex vertical align="center" gap={6}>
            <div style={{ fontSize: 12 }}>Magic Class</div>
            <NFlex vertical align="center" justify="center">
              <ShieldIcon style={{ width: 48, color: '#f31f9b' }} />
              <div style={{ fontSize: 28, fontWeight: 'bold', position: 'absolute' }}>
                {magicClass}
              </div>
            </NFlex>
          </NFlex>
        </NFlex>
      </NFlex>

      <NFlex style={{ width: 894 }} gap={ROW_GAP}>
        <Header style={{ width: CHARACTER_ATTRIBUTE_SCORE_WIDTH }}>SKILLS</Header>
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
                (cc.type === 'PERK' || (cc.type === 'CLASS' && !!character.getClassState(cc.key)))
            );
            return (
              <NFlex key={attribute.key} gap={ROW_GAP}>
                <CharacterAttributeScore
                  attribute={attribute}
                  score={10 + character.getAttributeBonus(attribute.key!)}
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
                            cc.type === 'CLASS' &&
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
        {['WEAPON', 'ARMOR', 'ITEM'].map((classType) => {
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
                      (cc) => cc.type === classType && !character.getClassState(cc.key)
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
          onAdd={(featureKey) => {
            character.addClassFeature(selectedClass.key, featureKey);
            setChoosableClasses(undefined);
          }}
          onRemove={(featureKey) => {
            character.removeClassFeature(selectedClass.key, featureKey);
          }}
          acquireDisabled={character.getAvailableShards() <= 0}
          onAscend={() => {
            character.ascendClass(selectedClass.key);
          }}
          onDescend={() => {
            character.descendClass(selectedClass.key);
          }}
          ascendDisabled={character.getAvailableSurges() <= 0}
        />
      )}
    </NFlex>
  );
};

const AddClassCard: React.FC<{ onClick: () => void; children: ReactNode }> = (props) => {
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
        color: '#808080',
        borderRadius: 12,
        cursor: 'pointer',
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
