import ShieldIcon from "../assets/icons/Shield.svg?react";
import StarIcon from "../assets/icons/Star.svg?react";

type AbilityTokenProps = {
  color: string;
  children?: string;
};

export const AbilityToken: React.FC<AbilityTokenProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
    </div>
  );
};
