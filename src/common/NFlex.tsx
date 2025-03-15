import { CSSProperties, ReactNode } from "react";

type NFlexProps = {
  children: ReactNode;
  align?: "center" | "start" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
  vertical?: boolean;
  gap?: number | string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

export const NFlex: React.FC<NFlexProps> = (props) => {
  return (
    <div
      css={`
        display: flex;
        align-items: ${props.align};
        justify-content: ${props.justify};
        flex-direction: ${props.vertical ? "column" : "row"};
      `}
      style={{ gap: props.gap, ...props.style }}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
