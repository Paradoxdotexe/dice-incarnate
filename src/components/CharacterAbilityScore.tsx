import React from "react";
import { NFlex } from "../common/NFlex";

type CharacterAbilityScoreProps = {
  name: string;
  score: number;
};

export const CharacterAbilityScore: React.FC<CharacterAbilityScoreProps> = (
  props
) => {
  return (
    <NFlex
      vertical
      align="center"
      justify="center"
      gap={12}
      style={{ width: 150 }}
    >
      <div
        css={`
          font-family: "Grenze";
          font-weight: 400;
          font-size: 30px;
        `}
      >
        {props.name}
      </div>
      <div
        css={`
          font-family: "Saira Condensed";
          font-weight: 700;
          font-size: 60px;
        `}
      >
        {props.score}
      </div>
    </NFlex>
  );
};
