import { opacify } from "polished";
import { playSound } from "../utils/playSound";
import React from "react";
import { AbilityToken } from "./AbilityToken";
import { arrayOf } from "../utils/arrayOf";
import { NButton } from "../common/NButton";
import { NFlex } from "../common/NFlex";

type CharacterClass = {
  name: string;
  color: string;
};

type Transcendence = 0 | 1 | 2 | 3;
type Ascension = 1 | 2 | 3;

type CharacterClassLevel = {
  transcendence: Transcendence;
  ascension: Ascension;
};

const getAscensionDie = (ascension: Ascension) => {
  return { 1: 6, 2: 12, 3: 20 }[ascension];
};

type CharacterClassCardProps = {
  class: CharacterClass;
  classLevel: CharacterClassLevel;
  onClick?: () => void;
  onTranscend?: () => void;
  transcendDisabled?: boolean;
  onAscend?: () => void;
  ascendDisabled?: boolean;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const classColor = props.class.color;

  const ascensionDie = getAscensionDie(props.classLevel.ascension);
  const maxTranscendence = props.classLevel.transcendence === 3;
  const maxAscension = props.classLevel.ascension === 3;

  return (
    <NFlex
      align="center"
      style={{
        width: 300,
        height: 150,
        border: `2px solid ${classColor}`,
        borderRadius: 12,
        background: `linear-gradient(to bottom right, ${opacify(
          -1,
          classColor
        )} 10%, ${classColor})`,

        position: "relative",
        padding: 12,
        cursor: "pointer",
      }}
    >
      <NFlex
        vertical
        justify="space-between"
        style={{
          height: "100%",
          zIndex: 1,
        }}
      >
        <NFlex vertical gap={6}>
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

          <NFlex gap={6}>
            {arrayOf(props.classLevel.transcendence).map(() => (
              <NFlex gap={3}>
                <AbilityToken color={classColor}>{ascensionDie}</AbilityToken>
                <AbilityToken color={classColor} />
              </NFlex>
            ))}
          </NFlex>
        </NFlex>

        <NFlex gap={6}>
          <NButton
            type="solid"
            color={classColor}
            disabled={props.transcendDisabled || maxTranscendence}
            onClick={props.onTranscend}
          >
            {maxTranscendence ? "Max Transcendence" : "Transcend"}
          </NButton>
          <NButton
            type="outline"
            color={classColor}
            disabled={props.ascendDisabled || maxAscension}
            onClick={props.onAscend}
          >
            {maxAscension ? "Max Ascension" : "Ascend"}
          </NButton>
        </NFlex>
      </NFlex>

      <img
        style={{
          position: "absolute",
          right: 12,
          height: "calc(100% - 24px)",
          opacity: 0.06,
        }}
        src={`/icons/${props.class.name.replace(" ", "")}.svg`}
      />
    </NFlex>
  );
};
