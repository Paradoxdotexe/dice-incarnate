import { opacify } from "polished";
import { CharacterClass } from "../appendix/CharacterClass";
import { NFlex } from "../common/NFlex";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import {
  CHARACTER_CLASS_CARD_WIDTH,
  getAscensionDie,
} from "./CharacterClassCard";
import reactStringReplace from "react-string-replace";
import { NTag } from "../common/NTag";

const PANEL_WIDTH = CHARACTER_CLASS_CARD_WIDTH * 2;

type CharacterClassPanelProps = {
  class: CharacterClass;
  acquiredTraits: string[];
  ascension: number;
};

export const CharacterClassPanel: React.FC<CharacterClassPanelProps> = (
  props
) => {
  const color = props.class.color;

  const ascensionDie = getAscensionDie(props.ascension);

  return (
    <NFlex
      vertical
      gap={12}
      style={{
        background: opacify(-0.9, color),
        width: PANEL_WIDTH,
        borderRadius: 12,
        border: `2px solid ${color}`,
        padding: 12,
      }}
    >
      <div
        style={{
          fontFamily: "Grenze",
          fontSize: 26,
          color: "white",
          fontWeight: 500,
        }}
      >
        {props.class.name}
      </div>

      {props.class.traits.map((trait) => {
        const isAcquired = props.acquiredTraits.includes(trait.key);
        return (
          <NFlex
            key={trait.key}
            vertical
            gap={12}
            style={{
              padding: 12,
              borderRadius: 12,
              opacity: isAcquired ? 1 : 0.75,
              background: isAcquired
                ? "rgba(255, 255, 255, 0.06)"
                : `repeating-linear-gradient(45deg,rgba(255, 255, 255, 0.06),rgba(255, 255, 255, 0.06) 10px,rgba(255, 255, 255, 0.09) 10px,rgba(255, 255, 255, 0.09) 20px)`,
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
    <NFlex gap={6} align="start">
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

  description = reactStringReplace(description, /(\d Caro)/g, (str, i) => (
    <NTag key={`caro#${i}`}>{str}</NTag>
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
