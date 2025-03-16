import React from "react";
import { NFlex } from "../common/NFlex";
import { CharacterAttribute } from "../appendix/CharacterAttribute";
import { NTooltip } from "../common/NTooltip";
import { CHARACTER_CLASS_CARD_HEIGHT } from "./CharacterClassCard";

export const CHARACTER_ATTRIBUTE_SCORE_WIDTH = 115;

type CharacterAttributeScoreProps = {
  attribute: CharacterAttribute;
  score: number;
};

export const CharacterAttributeScore: React.FC<CharacterAttributeScoreProps> = (
  props
) => {
  return (
    <NFlex
      vertical
      align="center"
      justify="center"
      gap={18}
      style={{
        width: CHARACTER_ATTRIBUTE_SCORE_WIDTH,
        height: CHARACTER_CLASS_CARD_HEIGHT,
      }}
    >
      <NTooltip content={props.attribute.description}>
        <div
          css={`
            font-family: "Grenze";
            font-weight: 300;
            font-size: 28px;
          `}
        >
          {props.attribute.name}
        </div>
      </NTooltip>
      <div
        css={`
          font-family: "Reddit Sans Condensed";
          font-weight: 700;
          font-size: 64px;
        `}
      >
        {props.score}
      </div>
    </NFlex>
  );
};
