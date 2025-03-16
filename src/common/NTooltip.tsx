import { ReactNode, useMemo } from "react";
import { Tooltip } from "react-tooltip";

type NTooltipProps = {
  children: ReactNode;
  content: ReactNode;
};

export const NTooltip: React.FC<NTooltipProps> = (props) => {
  const id = useMemo(() => Math.random().toString().slice(2, 10), []);

  return (
    <>
      <div data-tooltip-id={id} style={{ cursor: "pointer" }}>
        {props.children}
      </div>
      <Tooltip
        id={id}
        place="right"
        style={{
          zIndex: 500,
          maxWidth: 400,
          lineHeight: 1.5,
          borderRadius: 12,
          fontSize: 15,
          background: '#2c2c2c'
        }}
        delayShow={300}
        opacity={1}
      >
        {props.content}
      </Tooltip>
    </>
  );
};
