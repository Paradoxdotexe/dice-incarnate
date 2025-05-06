import { NFlex } from '../common/NFlex';
import { CharacterAbilityIcon } from './CharacterAbilityIcon';
import reactStringReplace from 'react-string-replace';
import { NTag } from '../common/NTag';
import { useCharacter } from '../hooks/useCharacter';
import classNames from 'classnames';
import { CharacterClassDocument } from '../database/collections/CharacterClass';
import { CharacterClassFeatureDocument } from '../database/collections/CharacterClassFeature';
import LockIcon from '../assets/icons/Lock.svg?react';
import RemoveIcon from '../assets/icons/Remove.svg?react';
import { CharacterClassState } from '../database/collections/Character';

type CharacterClassFeatureCardProps = {
  class: CharacterClassDocument;
  classState?: CharacterClassState;
  feature: CharacterClassFeatureDocument;
  isAcquired: boolean;
  isAcquirable: boolean;
  onAdd: () => void;
  onRemove: () => void;
  ascension: number;
};

export const CharacterClassFeatureCard: React.FC<CharacterClassFeatureCardProps> = (props) => {
  const character = useCharacter();

  let isLocked = false;
  // check if locked by attribute requirement
  if (character && props.feature.attributeRequirement && props.class.attributeKey) {
    const attributeScore = 10 + character!.getAttributeBonus(props.class.attributeKey);
    isLocked = props.feature.attributeRequirement > attributeScore;
  }
  // check if locked by ascension requirement
  if (character && props.feature.ascensionRequirement) {
    if (props.classState) {
      isLocked = props.feature.ascensionRequirement > props.classState.ascension;
    } else {
      isLocked = true;
    }
  }
  // check if locked by an already-acquired max rune
  if (
    !props.isAcquired &&
    !!props.classState?.featureKeys.find((key) => key.includes('_R5_')) &&
    props.feature.key.includes('_R5_')
  ) {
    isLocked = true;
  }
  // check if locked by not having the previous rune
  // if (!props.isAcquired && props.classState) {
  //   const runeLevelMatch = /_R(\d)_/.exec(props.feature.key);
  //   if (runeLevelMatch) {
  //     const runeLevel = parseInt(runeLevelMatch[1]);
  //     const runeType = props.feature.key.split('_').at(-1);
  //     if (
  //       runeLevel > 1 &&
  //       !props.classState.featureKeys.find((key) => key.includes(`_R${runeLevel - 1}_${runeType}`))
  //     ) {
  //       isLocked = true;
  //     }
  //   }
  // }

  const isAcquirable = props.isAcquirable && !isLocked;

  return (
    <NFlex
      vertical
      gap={12}
      onClick={isAcquirable ? props.onAdd : undefined}
      className={classNames({
        acquired: props.isAcquired,
        acquirable: isAcquirable,
        locked: isLocked,
      })}
      css={`
        padding: 12px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.06);
        filter: saturate(0);
        transition: filter 150ms ease, opacity 150ms ease;
        opacity: 0.6;

        &:hover.acquirable,
        &.acquired {
          filter: none;
          opacity: 1;
        }

        &.acquirable {
          cursor: pointer;
        }

        &.locked {
          background: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.04) 10px,
            rgba(255, 255, 255, 0.07) 10px,
            rgba(255, 255, 255, 0.07) 20px
          );
        }

        .icon--remove {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
        }

        .icon--remove:hover {
          color: white;
        }

        &:not(:hover) {
          .icon--remove {
            display: none;
          }
        }
      `}
    >
      <NFlex gap={9} align="start">
        {<CharacterAbilityIcon color={props.class.color} />}
        <NFlex vertical gap={3} style={{ flex: 1 }}>
          <NFlex align="center" justify="space-between">
            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: '25px' }}>
              {props.feature.name}
            </div>
            {props.isAcquired && <RemoveIcon className="icon--remove" onClick={props.onRemove} />}
            {isLocked && <LockIcon style={{ fontSize: 15 }} />}
          </NFlex>
          <FeatureClassDescription
            class={props.class}
            feature={props.feature}
            ascension={props.ascension}
          />
        </NFlex>
      </NFlex>
    </NFlex>
  );
};

type FeatureClassDescriptionProps = {
  class: CharacterClassDocument;
  feature: CharacterClassFeatureDocument;
  ascension: number;
};

const FeatureClassDescription: React.FC<FeatureClassDescriptionProps> = (props) => {
  const character = useCharacter();

  const attributeBonus =
    character && props.class.attributeKey
      ? character.getAttributeBonus(props.class.attributeKey)
      : 0;

  // italicize
  let description = reactStringReplace(
    props.feature.getDescription(props.ascension),
    /\*(.+?)\*/g,
    (str, _, offset) => <em key={`EM#${props.feature.key}#${offset}`}>{str}&nbsp;</em>
  );

  // format distance
  description = reactStringReplace(description, /(\d+ft)/g, (str, _, offset) => (
    <NTag key={`FEET#${props.feature.key}#${offset}`}>{str}</NTag>
  ));

  // format Mana
  description = reactStringReplace(description, /(\d Mana)/g, (str, _, offset) => (
    <NTag key={`MANA#${props.feature.key}#${offset}`}>{str}</NTag>
  ));

  // parse dice expressions
  description = reactStringReplace(description, /(\dd\d{1,2})/g, (str, _, offset) => {
    const diceCount = parseInt(str[0]) * props.ascension;
    return (
      <NTag key={`DICE#${props.feature.key}#${offset}`}>
        {diceCount}
        {str.slice(1)}
        {attributeBonus ? ` + ${attributeBonus}` : ''}
      </NTag>
    );
  });

  return (
    <div
      style={{
        lineHeight: 1.5,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Reddit Sans',
        fontWeight: 300,
      }}
    >
      {description}
    </div>
  );
};
