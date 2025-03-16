import { opacify } from "polished";
import React from "react";
import { CharacterAbilityIcon } from "./CharacterAbilityIcon";
import { arrayOf } from "../utils/arrayOf";
import { NButton } from "../common/NButton";
import { NFlex } from "../common/NFlex";
import { CharacterClass } from "../appendix/CharacterClass";

export const CHARACTER_CLASS_CARD_WIDTH = 243;
export const CHARACTER_CLASS_CARD_HEIGHT = 129;

export const getAscensionDie = (ascension: number) => {
  return { 0: 6, 1: 12, 2: 20 }[ascension] as number;
};

type CharacterClassCardProps = {
  class: CharacterClass;
  acquired: number;
  ascension: number;
  onClick?: () => void;
  onAcquire?: (change: number) => void;
  acquireDisabled?: boolean;
  onAscend?: (change: number) => void;
  ascendDisabled?: boolean;
};

export const CharacterClassCard: React.FC<CharacterClassCardProps> = (
  props
) => {
  const color = props.class.color;

  const ascensionEnabled = !!props.class.traits[0].ability;
  const ascensionDie = getAscensionDie(props.ascension);

  const maxAcquired = props.class.traits.length;
  const maxAscension = ascensionEnabled ? 2 : 0;
  const hasMaxAcquired = props.acquired === maxAcquired;
  const hasMaxAscension = props.ascension === maxAscension;

  const gradientStart = opacify(-1, color);
  const gradientEnd = opacify(-0.1, color);
  const gradient = `linear-gradient(to bottom right, ${gradientStart} 18%, ${gradientEnd})`;

  // second gradient is used to avoid choppiness
  const antiChopGradientEnd = opacify(-0.95, color);
  const antiChopGradient = `linear-gradient(${gradientStart} 14%, ${antiChopGradientEnd})`;

  return (
    <NFlex
      align="center"
      style={{
        width: 243,
        height: 129,
        border: `2px solid ${color}`,
        borderRadius: 12,
        background: `${gradient}, ${antiChopGradient}`,
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
                {ascensionEnabled && (
                  <CharacterAbilityIcon color={color}>
                    {ascensionDie}
                  </CharacterAbilityIcon>
                )}
                <CharacterAbilityIcon color={color} />
              </>
            ))}
          </NFlex>
        </NFlex>

        <NFlex gap={6}>
          <NButton
            type="solid"
            color={color}
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
              width: 101,
            }}
          >
            {hasMaxAcquired ? "Max Acquired" : "Acquire"}
          </NButton>
          {ascensionEnabled && !!props.acquired && (
            <NButton
              type="outline"
              color={color}
              disabled={props.ascendDisabled}
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
              style={{ width: 108 }}
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
