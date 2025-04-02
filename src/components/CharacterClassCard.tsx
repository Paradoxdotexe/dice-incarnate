import { opacify } from "polished";
import React from "react";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import { NFlex } from "../common/NFlex";
import { CharacterClassState } from "../database/collections/Character";
import { CharacterClassDocument } from "../database/collections/CharacterClass";

export const CHARACTER_CLASS_CARD_WIDTH = 240; // 36 * 6 + 24
export const CHARACTER_CLASS_CARD_HEIGHT = 120;

type CharacterClassCardProps = {
  class: CharacterClassDocument;
  classState?: CharacterClassState;
  onClick?: () => void;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const color = props.class.color;

  const ascension = props.classState?.ascension ?? 1;

  const gradientStartColor = opacify(-1, color);
  const gradientEndColor = opacify(-0.1, color);
  const gradient = `linear-gradient(to bottom right, ${gradientStartColor} 18%, ${gradientEndColor})`;

  // second gradient is used to avoid choppiness
  const antiChopGradientEndColor = opacify(-0.95, color);
  const antiChopGradient = `linear-gradient(${gradientStartColor} 14%, ${antiChopGradientEndColor})`;

  // use boxShadow to highlight ascension
  let boxShadow = "";
  const boxShadowColor = opacify(-0.25, color);
  if (ascension == 2) {
    boxShadow = `0 0 0 2px #1b1b1b, -2px 2px 0 2px ${boxShadowColor}`;
  }
  if (ascension >= 3) {
    boxShadow = `0 0 0 2px #1b1b1b, 0 0 0 4px ${boxShadowColor}`;
  }
  if (ascension >= 4) {
    boxShadow += `, 0 2px 0 4px #1b1b1b , 0 4px 0 4px ${boxShadowColor}`;
  }
  if (ascension == 5) {
    boxShadow += `, 0 -2px 0 4px #1b1b1b , 0 -4px 0 4px ${boxShadowColor}`;
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
        boxShadow,
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
            {props.class.name}{" "}
            {props.classState &&
              props.class.ascendable &&
              ["I", "II", "III", "IV", "V"][ascension - 1]}
          </div>

          <NFlex gap={3}>
            {props.classState?.traits.map((traitKey) => {
              const feature = props.class.features.find(
                (feature) => feature.key === traitKey
              )!;

              return (
                <CharacterAbilityIcon key={traitKey} color={color}>
                  {feature.getMana()}
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
