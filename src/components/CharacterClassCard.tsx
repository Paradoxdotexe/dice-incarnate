import { opacify } from "polished";
import React from "react";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import { NFlex } from "../common/NFlex";
import { CharacterClass } from "../appendix/CharacterClass";

export const CHARACTER_CLASS_CARD_WIDTH = 240;
export const CHARACTER_CLASS_CARD_HEIGHT = 120;

export const getAscensionDie = (ascension: number) => {
  return { 0: 6, 1: 12, 2: 20 }[ascension] as number;
};

type CharacterClassCardProps = {
  class: CharacterClass;
  acquiredTraits: string[];
  ascension: number;
  onClick?: () => void;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const color = props.class.color;

  const ascensionDie = getAscensionDie(props.ascension);

  const gradientStart = opacify(-1, color);
  const gradientEnd = opacify(-0.1, color);
  const gradient = `linear-gradient(to bottom right, ${gradientStart} 18%, ${gradientEnd})`;

  // second gradient is used to avoid choppiness
  const antiChopGradientEnd = opacify(-0.95, color);
  const antiChopGradient = `linear-gradient(${gradientStart} 14%, ${antiChopGradientEnd})`;

  const ascendable = !!props.acquiredTraits.filter(
    (traitKey) =>
      props.class.traits.find((trait) => trait.key === traitKey)!.ascendable
  ).length;

  let className = props.class.name;
  if (props.class.ascensionNames && ascendable) {
    className += `: ${props.class.ascensionNames[props.ascension]}`;
  }

  return (
    <NFlex
      align="center"
      style={{
        width: CHARACTER_CLASS_CARD_WIDTH,
        height: CHARACTER_CLASS_CARD_HEIGHT,
        border: `2px solid ${color}`,
        borderRadius: 12,
        background: `${gradient}, ${antiChopGradient}`,
        position: "relative",
        padding: 12,
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={props.onClick}
    >
      <NFlex
        vertical
        justify="space-between"
        style={{
          height: "100%",
          zIndex: 1,
        }}
      >
        <NFlex vertical gap={12}>
          <div
            style={{
              fontFamily: "Grenze",
              fontSize: 26,
              color: "white",
              fontWeight: 500,
            }}
          >
            {className}
          </div>

          <NFlex gap={3}>
            {props.acquiredTraits.map((traitKey) => {
              const trait = props.class.traits.find(
                (trait) => trait.key === traitKey
              )!;

              return (
                <CharacterAbilityIcon color={color}>
                  {trait.ascendable && ascensionDie}
                </CharacterAbilityIcon>
              );
            })}
          </NFlex>
        </NFlex>
      </NFlex>

      <img
        style={{
          position: "absolute",
          right: 12,
          height: "calc(100% - 24px)",
          opacity: 0.06,
        }}
        src={`/icons/${props.class.key}.svg`}
        alt=""
      />
    </NFlex>
  );
};
