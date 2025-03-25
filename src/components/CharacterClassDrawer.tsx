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

const PANEL_WIDTH = 600;

type CharacterClassDrawerProps = {
  open: boolean;
  onClose: () => void;
  class: CharacterClass;
  acquiredTraits: string[];
  ascension: number;
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

  const ascensionDie = getAscensionDie(props.ascension);

  const ascendable = !!props.acquiredTraits.filter(
    (traitKey) =>
      props.class.traits.find((trait) => trait.key === traitKey)!.ascendable
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
              disabled={props.ascension == 2 || props.ascendDisabled}
            >
              {props.ascension == 2 ? "Max Ascension" : "Ascend"}
            </NButton>
          )}
        </NFlex>

        <NFlex vertical gap={18}>
          {props.class.traits.map((trait) => {
            const isAcquired = props.acquiredTraits.includes(trait.key);
            return (
              <NFlex
                key={trait.key}
                vertical
                gap={12}
                onClick={
                  !isAcquired ? () => props.onAcquire(trait.key) : undefined
                }
                style={{
                  cursor: !isAcquired ? "pointer" : undefined,
                  padding: 12,
                  borderRadius: 12,
                  opacity: isAcquired ? 1 : 0.7,
                  background: isAcquired
                    ? "rgba(255, 255, 255, 0.06)"
                    : `repeating-linear-gradient(45deg,rgba(255, 255, 255, 0.03),rgba(255, 255, 255, 0.03) 10px,rgba(255, 255, 255, 0.06) 10px,rgba(255, 255, 255, 0.06) 20px)`,
                  filter: !isAcquired ? "saturate(0)" : undefined,
                }}
              >
                <TraitEntry
                  color={color}
                  trait={trait}
                  ascensionDie={ascensionDie}
                />
              </NFlex>
            );
          })}
        </NFlex>
      </NFlex>
    </NDrawer>
  );
};

type TraitEntryProps = {
  trait: CharacterClassTrait;
  color: string;
  ascensionDie: number;
};

const TraitEntry: React.FC<TraitEntryProps> = (props) => {
  return (
    <NFlex gap={9} align="start">
      {
        <CharacterAbilityIcon color={props.color}>
          {props.trait.ascendable && props.ascensionDie}
        </CharacterAbilityIcon>
      }
      <NFlex vertical gap={3}>
        <div style={{ fontSize: 20, fontWeight: 700, lineHeight: "25px" }}>
          {props.trait.name}
        </div>
        <TraitDescription ascensionDie={props.ascensionDie}>
          {props.trait.description}
        </TraitDescription>
      </NFlex>
    </NFlex>
  );
};

type TraitDescriptionProps = {
  children: string;
  ascensionDie?: number;
};

const TraitDescription: React.FC<TraitDescriptionProps> = (props) => {
  let description = reactStringReplace(props.children, /(\d+ft)/g, (str, i) => (
    <NTag key={`ft#${i}`}>{str}</NTag>
  ));

  description = reactStringReplace(description, /(\d Mana)/g, (str, i) => (
    <NTag key={`mana#${i}`}>{str}</NTag>
  ));

  description = reactStringReplace(description, /\*(.+?)\*/g, (str, i) => (
    <em key={`em#${i}`}>{str}&nbsp;</em>
  ));

  if (props.ascensionDie) {
    description = reactStringReplace(description, /(\ddX)/g, (str, i) => (
      <NTag key={`dx#${i}`}>
        {str.replace("X", props.ascensionDie!.toString())}
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
