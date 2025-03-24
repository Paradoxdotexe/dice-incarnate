import { ReactNode } from "react";
import ShieldIcon from "../assets/icons/Shield.svg?react";
import StarIcon from "../assets/icons/Star.svg?react";
import { NFlex } from "../common/NFlex";

type CharacterAbilityIconProps = {
  color: string;
  children?: ReactNode;
};

export const CharacterAbilityIcon: React.FC<CharacterAbilityIconProps> = (
  props
) => {
  return (
    <NFlex align="center" justify="center">
      <ShieldIcon style={{ width: 24, height: 24, color: props.color }} />
      <div
        style={{
          position: "absolute",
          color: "white",
        }}
      >
        {props.children ? (
          <div
            style={{
              fontFamily: "Reddit Sans Condensed",
              fontWeight: 600,
              fontSize: 13,
              marginTop: -1,
            }}
          >
            {props.children}
          </div>
        ) : (
          <StarIcon style={{ width: 14, marginTop: 1 }} />
        )}
      </div>
    </NFlex>
  );
};
