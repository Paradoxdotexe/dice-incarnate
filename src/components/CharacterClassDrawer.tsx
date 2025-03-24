import { opacify } from "polished";
import { CharacterClass } from "../appendix/CharacterClass";
import { NFlex } from "../common/NFlex";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import { getAscensionDie } from "./CharacterClassCard";
import reactStringReplace from "react-string-replace";
import { NTag } from "../common/NTag";
import { NDrawer } from "../common/NDrawer";

const PANEL_WIDTH = 600;

type CharacterClassDrawerProps = {
  open: boolean;
  onClose: () => void;
  class: CharacterClass;
  acquiredTraits: string[];
  ascension: number;
  onClick?: () => void;
  editable?: boolean;
  onAcquire: (traitKey: string) => void;
  acquireDisabled?: boolean;
  onAscend?: (change: number) => void;
  ascendDisabled?: boolean;
};

export const CharacterClassDrawer: React.FC<CharacterClassDrawerProps> = (
  props
) => {
  const color = props.class.color;

  const ascensionDie = getAscensionDie(props.ascension);

  return (
    <NDrawer open={props.open} onClose={props.onClose} width={PANEL_WIDTH}>
      <NFlex
        vertical
        gap={24}
        style={{
          background: opacify(-0.94, color),
          borderLeft: `2px solid ${color}`,
          height: "100%",
          padding: 24,
        }}
      >
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
                {trait.ability && (
                  <TraitEntry
                    color={color}
                    name={trait.ability.name}
                    description={trait.ability.description}
                    type="ABILITY"
                    ascensionDie={ascensionDie}
                  />
                )}

                <TraitEntry
                  color={color}
                  name={trait.perk.name}
                  description={trait.perk.description}
                  type="PERK"
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
  color: string;
  name: string;
  description: string;
  type: "PERK" | "ABILITY";
  ascensionDie: number;
};

const TraitEntry: React.FC<TraitEntryProps> = (props) => {
  return (
    <NFlex gap={9} align="start">
      {
        <CharacterAbilityIcon color={props.color}>
          {props.type === "ABILITY" && props.ascensionDie}
        </CharacterAbilityIcon>
      }
      <NFlex vertical gap={3}>
        <div style={{ fontSize: 20, fontWeight: 700, lineHeight: "25px" }}>
          {props.name}
        </div>
        <TraitDescription ascensionDie={props.ascensionDie}>
          {props.description}
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
    <NTag key={`caro#${i}`}>{str}</NTag>
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
