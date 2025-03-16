import { opacify } from "polished";
import { CharacterClass } from "../appendix/CharacterClass";
import { NFlex } from "../common/NFlex";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import { getAscensionDie } from "./CharacterClassCard";

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
        background: opacify(-0.8, color),
        width: 420,
        height: 800,
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
            vertical
            gap={12}
            style={{
              padding: 12,
              borderRadius: 12,
              opacity: isAcquired ? 1 : 0.5,
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
                ascensionDie={ascensionDie}
              />
            )}

            <TraitEntry
              color={color}
              name={trait.perk.name}
              description={trait.perk.description}
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
  ascensionDie?: number;
};

const TraitEntry: React.FC<TraitEntryProps> = (props) => {
  return (
    <NFlex gap={6} align="start">
      {
        <CharacterAbilityIcon color={props.color}>
          {props.ascensionDie}
        </CharacterAbilityIcon>
      }
      <NFlex vertical gap={3}>
        <div style={{ fontSize: 20, fontWeight: 700, lineHeight: "25px" }}>
          {props.name}
        </div>
        <div
          style={{
            lineHeight: 1.4,
            opacity: 0.8,
            fontFamily: "Reddit Sans",
            fontWeight: 300,
          }}
        >
          {props.description}
        </div>
      </NFlex>
    </NFlex>
  );
};
