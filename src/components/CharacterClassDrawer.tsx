import { opacify } from "polished";
import {
  CharacterClass,
  CharacterClassTrait,
} from "../appendix/CharacterClass";
import { NFlex } from "../common/NFlex";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import { getAscensionDie } from "./CharacterClassCard";
import reactStringReplace from "react-string-replace";
import { NTag } from "../common/NTag";
import { NDrawer } from "../common/NDrawer";
import { NButton } from "../common/NButton";
import { useCharacter } from "../hooks/useCharacter";
import { CharacterAttributeKey } from "../appendix/CharacterAttribute";
import classNames from "classnames";
import { CharacterClassState } from "../database/collections/Character";
import { keyBy } from "lodash-es";

const PANEL_WIDTH = 600;

type CharacterClassDrawerProps = {
  open: boolean;
  onClose: () => void;
  class: CharacterClass;
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

  const ascensionDie = getAscensionDie(props.classState?.ascension ?? 0);
  const maxAscension = props.classState?.ascension == 2;

  const traitsByKey = keyBy(props.class.traits, "key");

  const ascendable = !!props.classState?.traits.filter(
    (traitKey) => traitsByKey[traitKey].ascendable
  ).length;

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
            {props.class.name}
          </div>

          {ascendable && (
            <NButton
              color={color}
              onClick={props.onAscend}
              disabled={maxAscension || props.ascendDisabled}
            >
              {maxAscension ? "Max Ascension" : "Ascend"}
            </NButton>
          )}
        </NFlex>

        <NFlex vertical gap={18}>
          {props.class.traits.map((trait) => {
            const isAcquired =
              props.classState?.traits.includes(trait.key) ?? false;
            const isAcquirable = !isAcquired && !props.acquireDisabled;
            return (
              <TraitCard
                class={props.class}
                trait={trait}
                isAcquired={isAcquired}
                isAcquirable={isAcquirable}
                onClick={() => props.onAcquire(trait.key)}
                ascensionDie={ascensionDie}
              />
            );
          })}
        </NFlex>
      </NFlex>
    </NDrawer>
  );
};

type TraitCardProps = {
  class: CharacterClass;
  trait: CharacterClassTrait;
  isAcquired: boolean;
  isAcquirable: boolean;
  onClick: () => void;
  ascensionDie: number;
};

const TraitCard: React.FC<TraitCardProps> = (props) => {
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
            {props.trait.ascendable && props.ascensionDie}
          </CharacterAbilityIcon>
        }
        <NFlex vertical gap={3}>
          <div style={{ fontSize: 20, fontWeight: 700, lineHeight: "25px" }}>
            {props.trait.name}
          </div>
          <TraitDescription
            traitKey={props.trait.key}
            ascensionDie={props.ascensionDie}
          >
            {props.trait.description}
          </TraitDescription>
        </NFlex>
      </NFlex>
    </NFlex>
  );
};

type TraitDescriptionProps = {
  children: string;
  traitKey: string;
  ascensionDie?: number;
};

const TraitDescription: React.FC<TraitDescriptionProps> = (props) => {
  const character = useCharacter();

  const attributeBonus = character?.getAttributeBonus(
    props.traitKey.slice(0, 3) as CharacterAttributeKey
  );

  let description = reactStringReplace(
    props.children,
    /(\d+ft)/g,
    (str, _, offset) => (
      <NTag key={`FT#${props.traitKey}#${offset}`}>{str}</NTag>
    )
  );

  description = reactStringReplace(
    description,
    /(\d Mana)/g,
    (str, _, offset) => (
      <NTag key={`MANA#${props.traitKey}#${offset}`}>{str}</NTag>
    )
  );

  description = reactStringReplace(
    description,
    /\*(.+?)\*/g,
    (str, _, offset) => (
      <em key={`EM#${props.traitKey}#${offset}`}>{str}&nbsp;</em>
    )
  );

  if (props.ascensionDie) {
    description = reactStringReplace(description, /(\ddX)/g, (str, i) => (
      <NTag key={`dx#${i}`}>
        {str.replace("X", props.ascensionDie!.toString())}
        {attributeBonus ? ` + ${attributeBonus}` : ""}
      </NTag>
    ));
  }

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
