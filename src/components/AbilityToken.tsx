import { ReactNode } from "react";
import ShieldIcon from "../assets/icons/Shield.svg?react";
import StarIcon from "../assets/icons/Star.svg?react";
import { NFlex } from "../common/NFlex";

type AbilityTokenProps = {
  color: string;
  children?: ReactNode;
};

export const AbilityToken: React.FC<AbilityTokenProps> = (props) => {
  return (
    <NFlex align="center" justify="center">
      <ShieldIcon style={{ width: 26, color: props.color }} />
      <div
        style={{
          position: "absolute",
          color: "white",
        }}
      >
        {props.children ? (
          <div
            style={{
              fontFamily: "Saira Extra Condensed",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            {props.children}
          </div>
        ) : (
          <StarIcon style={{ width: 16 }} />
        )}
      </div>
    </NFlex>
  );
};
