import { ReactNode } from "react";

type NTagProps = {
  children: ReactNode;
};

export const NTag: React.FC<NTagProps> = (props) => {
  return (
    <div
      style={{
        display: "inline-block",
        background: "rgba(255, 255, 255, 0.12)",
        borderRadius: 6,
        paddingInline: 4,
        fontWeight: 400,
        lineHeight: 1.32
      }}
    >
      {props.children}
    </div>
  );
};
