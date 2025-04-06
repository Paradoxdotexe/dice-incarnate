import { CSSProperties, MouseEventHandler, ReactNode } from "react";

type NFlexProps = {
  children: ReactNode;
  align?: "center" | "start" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  vertical?: boolean;
  gap?: number | string;
  wrap?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  onMouseUp?: MouseEventHandler<HTMLDivElement>;
};

export const NFlex: React.FC<NFlexProps> = (props) => {
  return (
    <div
      css={`
        display: flex;
        flex-wrap: ${props.wrap ? "wrap" : ""};
        align-items: ${props.align};
        justify-content: ${props.justify};
        flex-direction: ${props.vertical ? "column" : "row"};
      `}
      style={{ gap: props.gap, ...props.style }}
      className={props.className}
      onClick={props.onClick}
      onMouseUp={props.onMouseUp}
    >
      {props.children}
    </div>
  );
};
