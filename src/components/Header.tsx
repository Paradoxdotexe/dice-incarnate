import { css } from "styled-components";
import { NFlex } from "../common/NFlex";

export const Header: React.FC<{
  children?: string;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}> = (props) => {
  return (
    <NFlex
      align="center"
      gap={6}
      style={{
        fontWeight: "600",
        fontSize: 14,
        visibility: !props.children ? "hidden" : undefined,
        whiteSpace: "nowrap",
        ...props.style,
      }}
      css={`
        &::after,
        &::before {
          content: "";
          display: block;
          flex: 1;
          height: 1px;
          background: #727272;
        }

        ${props.align === "left" &&
        css`
          &::before {
            flex: none;
            width: 24px;
          }
        `}

        ${props.align === "right" &&
        css`
          &::after {
            flex: none;
            width: 24px;
          }
        `}
      `}
    >
      {props.children}
    </NFlex>
  );
};
