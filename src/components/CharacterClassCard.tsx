import { lighten, opacify } from "polished";
import { playSound } from "../utils/playSound";
import { useState } from "react";
import React from "react";
import { AbilityToken } from "./AbilityToken";

type CharacterClass = {
  name: string;
  color: string;
};

type CharacterClassCardProps = {
  class: CharacterClass;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const classColor = props.class.color;
  return (
    <div
      style={{
        width: 300,
        height: 150,
        border: `2px solid ${classColor}`,
        borderRadius: 12,
        background: `linear-gradient(to bottom right, ${opacify(
          -1,
          classColor
        )} 10%, ${classColor})`,
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: 12,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          zIndex: 1
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
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
          <div style={{ display: "flex", gap: 4 }}>
            <AbilityToken color={classColor}>12</AbilityToken>
            <AbilityToken color={classColor} />
            <AbilityToken color={classColor}>12</AbilityToken>
            <AbilityToken color={classColor} />
            <AbilityToken color={classColor}>12</AbilityToken>
            <AbilityToken color={classColor} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 4 }}>
          <button style={{ background: classColor, borderColor: classColor }}>
            Transcend
          </button>
          <button style={{ background: "none", borderColor: classColor }}>
            Ascend
          </button>
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          right: 12,
          height: "calc(100% - 24px)",
          opacity: 0.06,
        }}
        src={`/icons/${props.class.name.replace(" ", "")}.svg`}
      />
    </div>
  );
};
