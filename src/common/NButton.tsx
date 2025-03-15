import { lighten, opacify } from "polished";
import { ReactNode } from "react";

type NButtonProps = {
  children: ReactNode;
  color: string;
  type: "solid" | "outline";
  disabled?: boolean;
  onClick?: () => void;
};

export const NButton: React.FC<NButtonProps> = (props) => {
  return (
    <button
      css={`
        outline: none;
        font-family: "Saira Condensed";
        font-size: 16px;
        border-radius: 6px;
        min-height: 0;
        height: fit-content;
        cursor: pointer;
        padding-inline: 6px;
        color: white;
        background: ${props.type === "solid" ? props.color : "none"};
        border: 1px solid ${props.color};
        transition: all 150ms ease;

        &:disabled {
          pointer-events: none;
          opacity: 0.5;
        }

        &:hover {
          background: ${props.type === "solid"
            ? lighten(0.1, props.color)
            : opacify(-0.8, props.color)};
          border-color: ${props.type === "solid"
            ? lighten(0.1, props.color)
            : ""};
        }
      `}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
