import ShieldIcon from "../assets/icons/Shield.svg?react";
import SparkleIcon from "../assets/icons/Sparkle.svg?react";
import { NFlex } from "../common/NFlex";

type CharacterAbilityIconProps = {
  color: string;
};

export const CharacterAbilityIcon: React.FC<CharacterAbilityIconProps> = (
  props
) => {
  return (
    <NFlex align="center" justify="center" style={{ position: "relative" }}>
      <ShieldIcon style={{ width: 24, height: 24, color: props.color }} />

      <div style={{ position: "absolute", color: "white" }}>
        <SparkleIcon style={{ fontSize: 16, marginBottom: -2 }} />
      </div>
    </NFlex>
  );
};
