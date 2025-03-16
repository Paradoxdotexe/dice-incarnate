import React from "react";
import { NFlex } from "../common/NFlex";

type CharacterAttributeScoreProps = {
  name: string;
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
          font-family: "Reddit Sans Condensed";
          font-weight: 700;
          font-size: 60px;
        `}
      >
        {props.score}
      </div>
    </NFlex>
  );
};
