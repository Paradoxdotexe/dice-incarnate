import classNames from "classnames";
import { lighten, opacify } from "polished";
import { CSSProperties, ReactNode, useRef } from "react";

type NButtonProps = {
  children: ReactNode;
  color?: string;
  type?: "solid" | "outline";
  disabled?: boolean;
  onClick?: () => void;
  onRightClick?: () => void;
  style?: CSSProperties;
};

export const NButton: React.FC<NButtonProps> = (props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const color = props.color ?? "#424242";
  const type = props.type ?? "solid";

  return (
    <button
      ref={ref}
      className={classNames({
        "NButton--disabled": props.disabled,
      })}
      css={`
        outline: none;
        font-family: "Reddit Sans Condensed";
        font-size: 16px;
        border-radius: 6px;
        min-height: 0;
        height: fit-content;
        cursor: pointer;
        padding-inline: 6px;
        color: white;
        background: ${type === "solid" ? color : opacify(-0.8, color)};
        border: 1px solid ${color};
        transition: all 150ms ease;
        white-space: nowrap;

        &.NButton--disabled {
          cursor: auto;
          opacity: 0.5;
        }

        &:hover:not(.NButton--disabled) {
          background: ${type === "solid"
            ? lighten(0.1, color)
            : opacify(-0.6, color)};
          border-color: ${type === "solid" ? lighten(0.1, color) : ""};
        }
      `}
      onClick={
        props.disabled
          ? undefined
          : (event) => {
              event.stopPropagation();
              props.onClick?.();
            }
      }
      onMouseUp={(event) => {
        if (event.button === 2) {
          props.onRightClick?.();
        }
      }}
      style={props.style}
    >
      {props.children}
    </button>
  );
};
