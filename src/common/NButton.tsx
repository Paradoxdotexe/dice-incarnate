import classNames from "classnames";
import { lighten, opacify } from "polished";
import { ReactNode, useEffect, useRef } from "react";

type NButtonProps = {
  children: ReactNode;
  color: string;
  type: "solid" | "outline";
  disabled?: boolean;
  onClick?: () => void;
  onRightClick?: () => void;
};

export const NButton: React.FC<NButtonProps> = (props) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      event?.preventDefault();
    };

    ref.current?.addEventListener("contextmenu", onContextMenu);

    return () => {
      ref.current?.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return (
    <button
      ref={ref}
      className={classNames({
        "NButton--disabled": props.disabled,
      })}
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

        &.NButton--disabled {
          cursor: auto;
          opacity: 0.5;
        }

        &:hover:not(.NButton--disabled) {
          background: ${props.type === "solid"
            ? lighten(0.1, props.color)
            : opacify(-0.8, props.color)};
          border-color: ${props.type === "solid"
            ? lighten(0.1, props.color)
            : ""};
        }
      `}
      onClick={props.disabled ? undefined : props.onClick}
      onMouseUp={(event) => {
        if (event.button === 2) {
          props.onRightClick?.();
        }
      }}
    >
      {props.children}
    </button>
  );
};
