import { opacify } from "polished";
import { NFlex } from "../common/NFlex";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import reactStringReplace from "react-string-replace";
import { NTag } from "../common/NTag";
import { NDrawer } from "../common/NDrawer";
import { NButton } from "../common/NButton";
import { useCharacter } from "../hooks/useCharacter";
import classNames from "classnames";
import { CharacterClassState } from "../database/collections/Character";
import { CharacterClassDocument } from "../database/collections/CharacterClass";
import { CharacterClassFeatureDocument } from "../database/collections/CharacterClassFeature";

const PANEL_WIDTH = 600;

type CharacterClassDrawerProps = {
  open: boolean;
  onClose: () => void;
  class: CharacterClassDocument;
  classState?: CharacterClassState;
  onClick?: () => void;
  onAcquire: (traitKey: string) => void;
  acquireDisabled?: boolean;
  onAscend?: () => void;
  ascendDisabled?: boolean;
};

export const CharacterClassDrawer: React.FC<CharacterClassDrawerProps> = (
  props
) => {
  const color = props.class.color;

  const ascension = props.classState?.ascension ?? 1;
  const maxAscension = props.class.type === "CLASS" ? 3 : 5;
  const isMaxAscension = ascension === maxAscension;

  return (
    <NDrawer open={props.open} onClose={props.onClose} width={PANEL_WIDTH}>
      <NFlex
        vertical
        gap={24}
        style={{
          background: opacify(-0.97, color),
          borderLeft: `2px solid ${color}`,
          height: "100%",
          padding: 24,
        }}
      >
        <NFlex justify="space-between" align="center">
          <div
            style={{
              fontFamily: "Grenze",
              fontSize: 32,
              color: "white",
              fontWeight: 500,
            }}
          >
            {props.class.name}{" "}
            {props.classState &&
              props.class.ascendable &&
              ["I", "II", "III", "IV", "V"][ascension - 1]}
          </div>

          {props.class.ascendable && (
            <NButton
              color={color}
              onClick={props.onAscend}
              disabled={isMaxAscension || props.ascendDisabled}
            >
              {isMaxAscension ? "Max Ascension" : "Ascend"}
            </NButton>
          )}
        </NFlex>

        <NFlex vertical gap={18}>
          {props.class.features.map((feature) => {
            const isAcquired =
              props.classState?.traits.includes(feature.key) ?? false;
            const isAcquirable = !isAcquired && !props.acquireDisabled;
            return (
              <ClassFeatureCard
                key={feature.key}
                class={props.class}
                feature={feature}
                isAcquired={isAcquired}
                isAcquirable={isAcquirable}
                onClick={() => props.onAcquire(feature.key)}
                ascension={ascension}
              />
            );
          })}
        </NFlex>
      </NFlex>
    </NDrawer>
  );
};

type ClassFeatureCardProps = {
  class: CharacterClassDocument;
  feature: CharacterClassFeatureDocument;
  isAcquired: boolean;
  isAcquirable: boolean;
  onClick: () => void;
  ascension: number;
};

const ClassFeatureCard: React.FC<ClassFeatureCardProps> = (props) => {
  return (
    <NFlex
      vertical
      gap={12}
      onClick={props.isAcquirable ? props.onClick : undefined}
      className={classNames({
        acquired: props.isAcquired,
        acquirable: props.isAcquirable,
      })}
      css={`
        padding: 12px;
        border-radius: 12px;
        background: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.05),
          rgba(255, 255, 255, 0.05) 10px,
          rgba(255, 255, 255, 0.07) 10px,
          rgba(255, 255, 255, 0.07) 20px
        );
        filter: saturate(0);
        opacity: 0.5;
        transition: filter 150ms ease, opacity 150ms ease;

        &:hover.acquirable,
        &.acquired {
          filter: none;
          opacity: 1;
        }

        &.acquirable {
          cursor: pointer;
        }

        &.acquired {
          background: rgba(255, 255, 255, 0.06);
        }
      `}
    >
      <NFlex gap={9} align="start">
        {
          <CharacterAbilityIcon color={props.class.color}>
            {props.feature.getMana()}
          </CharacterAbilityIcon>
        }
        <NFlex vertical gap={3}>
          <div style={{ fontSize: 20, fontWeight: 700, lineHeight: "25px" }}>
            {props.feature.name}
          </div>
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

const FeatureClassDescription: React.FC<FeatureClassDescriptionProps> = (
  props
) => {
  const character = useCharacter();

  const attributeBonus =
    character && props.class.attributeKey
      ? character.getAttributeBonus(props.class.attributeKey)
      : 0;

  // italicize
  let description = reactStringReplace(
    props.feature.description,
    /\*(.+?)\*/g,
    (str, _, offset) => (
      <em key={`EM#${props.feature.key}#${offset}`}>{str}&nbsp;</em>
    )
  );

  // format distance
  description = reactStringReplace(
    description,
    /(\d+ft)/g,
    (str, _, offset) => (
      <NTag key={`FEET#${props.feature.key}#${offset}`}>{str}</NTag>
    )
  );

  // format Mana
  description = reactStringReplace(
    description,
    /(\d Mana)/g,
    (str, _, offset) => (
      <NTag key={`MANA#${props.feature.key}#${offset}`}>{str}</NTag>
    )
  );

  // parse dice expressions
  description = reactStringReplace(
    description,
    /(\dd\d{1,2})/g,
    (str, _, offset) => {
      const diceCount = parseInt(str[0]) * props.ascension;
      return (
        <NTag key={`DICE#${props.feature.key}#${offset}`}>
          {diceCount}
          {str.slice(1)}
          {attributeBonus ? ` + ${attributeBonus}` : ""}
        </NTag>
      );
    }
  );

  // parse math expression
  description = reactStringReplace(description, /\[(.+?)\]/g, (str) => {
    str = str.replace("A", props.ascension.toString());
    return eval(str);
  });

  return (
    <div
      style={{
        lineHeight: 1.5,
        color: "rgba(255, 255, 255, 0.85)",
        fontFamily: "Reddit Sans",
        fontWeight: 300,
      }}
    >
      {description}
    </div>
  );
};
