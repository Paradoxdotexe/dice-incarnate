import { lighten } from "polished";
import { playSound } from "../utils/playSound";
import { useState } from "react";
import React from "react";

type CharacterClass = {
  name: string;
  color: string;
  icon: string;
};

type CharacterClassCardProps = {
  class: CharacterClass;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const lightColor = lighten(0.15, props.class.color);
  const darkColor = lighten(-0.1, props.class.color);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div
        style={{
          width: 192,
          height: 192,
          border: `5px solid ${lightColor}`,
          borderRadius: 24,
          background: `radial-gradient(${lightColor}, ${darkColor})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          paddingTop: 16,
        }}
      >
        <img src={`/icons/${props.class.icon}.svg`} style={{ width: 125 }} />
        <div style={{ color: lightColor, fontSize: 20 }}>
          {props.class.name}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 13,
        }}
      >
        {[...new Array(5)].map((_, i) => (
          <CharacterClassLevelChip key={i} color={lightColor} />
        ))}
      </div>
    </div>
  );
};

type CharacterClassLevelChipProps = {
  color: string;
};

const CharacterClassLevelChip: React.FC<CharacterClassLevelChipProps> = (
  props
) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div
      style={{
        width: 22,
        height: 22,
        background: toggled ? props.color : "black",
        border: `2px solid ${props.color}`,
        borderRadius: 3,
        transform: "rotateZ(45deg)",
        cursor: "pointer",
      }}
      onClick={() =>
        playSound("/sounds/LevelUp.mp3").then(() => setToggled(!toggled))
      }
    ></div>
  );
};
