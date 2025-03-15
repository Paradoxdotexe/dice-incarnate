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

const getAscensionDie = (ascension: number) => {
  return { 0: 6, 1: 12, 2: 20 }[ascension];
};

type CharacterClassCardProps = {
  class: CharacterClass;
  acquired: number;
  maxAcquired: number;
  ascension: number;
  maxAscension: number;
  onClick?: () => void;
  onAcquire?: (change: number) => void;
  acquireDisabled?: boolean;
  onAscend?: (change: number) => void;
  ascendDisabled?: boolean;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const classColor = props.class.color;

  const ascensionDie = getAscensionDie(props.ascension);
  const hasMaxAcquired = props.acquired === props.maxAcquired;
  const hasMaxAscension = props.ascension === props.maxAscension;

  const gradientStart = opacify(-0.95, classColor);
  const gradientEnd = opacify(-0.1, classColor);
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

          <NFlex gap={3}>
            {arrayOf(props.acquired).map(() => (
              <>
                {!!props.maxAscension && (
                  <CharacterAbilityIcon color={classColor}>
                    {ascensionDie}
                  </CharacterAbilityIcon>
                )}
                <CharacterAbilityIcon color={classColor} />
              </>
            ))}
          </NFlex>
        </NFlex>

        <NFlex gap={6}>
          <NButton
            type="solid"
            color={classColor}
            disabled={props.acquireDisabled}
            onClick={() => {
              if (!hasMaxAcquired) {
                props.onAcquire?.(1);
              }
            }}
            onRightClick={() => {
              if (!!props.acquired) {
                props.onAcquire?.(-1);
                // if acquisition is reduced to zero, reduce ascension to zero too
                if (props.acquired === 1) {
                  props.onAscend?.(-props.ascension);
                }
              }
            }}
            style={{
              width: 104,
            }}
          >
            {hasMaxAcquired ? "Max Acquired" : "Acquire"}
          </NButton>
          {!!props.maxAscension && (
            <NButton
              type="outline"
              color={classColor}
              disabled={props.ascendDisabled || !props.acquired}
              onClick={() => {
                if (!hasMaxAscension) {
                  props.onAscend?.(1);
                }
              }}
              onRightClick={() => {
                if (!!props.ascension) {
                  props.onAscend?.(-1);
                }
              }}
              style={{ width: 113 }}
            >
              {hasMaxAscension ? "Max Ascension" : "Ascend"}
            </NButton>
          )}
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
