import { opacify } from "polished";
import React from "react";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import { arrayOf } from "../utils/arrayOf";
import { NButton } from "../common/NButton";
import { NFlex } from "../common/NFlex";

type CharacterClass = {
  name: string;
  color: string;
};

export type Transcendence = 0 | 1 | 2 | 3;
export type Ascension = 0 | 1 | 2;

export type CharacterClassLevel = {
  transcendence: Transcendence;
  ascension: Ascension;
};

const getAscensionDie = (ascension: Ascension) => {
  return { 0: 6, 1: 12, 2: 20 }[ascension];
};

type CharacterClassCardProps = {
  class: CharacterClass;
  classLevel: CharacterClassLevel;
  onClick?: () => void;
  onTranscend?: (increment: 1 | -1) => void;
  transcendDisabled?: boolean;
  onAscend?: (increment: 1 | -1) => void;
  ascendDisabled?: boolean;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const classColor = props.class.color;

  const ascensionDie = getAscensionDie(props.classLevel.ascension);
  const minTranscendence = props.classLevel.transcendence === 0;
  const minAscension = props.classLevel.ascension === 0;
  const maxTranscendence = props.classLevel.transcendence === 3;
  const maxAscension = props.classLevel.ascension === 2;

  const gradientStart = opacify(-0.95, classColor);
  const gradientEnd = opacify(-0.10, classColor);
  const gradient = `linear-gradient(to bottom right, ${gradientStart} 15%, ${gradientEnd})`;
  // second gradient is used to avoid choppiness
  const gradientSmoother = `linear-gradient(${gradientStart}, ${gradientStart})`;

  return (
    <NFlex
      align="center"
      style={{
        width: 300,
        height: 150,
        border: `2px solid ${classColor}`,
        borderRadius: 12,
        background: `${gradient}, ${gradientSmoother}`,
        position: "relative",
        padding: 12,
        cursor: "pointer",
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
                <CharacterAbilityIcon color={classColor}>
                  {ascensionDie}
                </CharacterAbilityIcon>
                <CharacterAbilityIcon color={classColor} />
              </NFlex>
            ))}
          </NFlex>
        </NFlex>

        <NFlex gap={6}>
          <NButton
            type="solid"
            color={classColor}
            disabled={props.transcendDisabled || maxTranscendence}
            onClick={() => props.onTranscend?.(1)}
            onRightClick={() => !minTranscendence && props.onTranscend?.(-1)}
          >
            {maxTranscendence ? "Max Transcendence" : "Transcend"}
          </NButton>
          <NButton
            type="outline"
            color={classColor}
            disabled={props.ascendDisabled || maxAscension}
            onClick={() => props.onAscend?.(1)}
            onRightClick={() => !minAscension && props.onAscend?.(-1)}
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
