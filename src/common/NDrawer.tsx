import classNames from "classnames";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const TIMEOUT = 250;

export type NDrawerProps = {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  width: number;
  className?: string;
};

export const NDrawer: React.FC<NDrawerProps> = (props) => {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => setOpen(props.open), [props.open]);

  return (
    <div
      css={`
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        justify-content: flex-end;
        z-index: 1000;
        transition: background-color ${TIMEOUT}ms ease;

        &.drawerContainer--open {
          background-color: #0000007a;
        }

        &:not(.drawerContainer--open) {
          pointer-events: none;
        }

        .drawerContainer__drawer {
          width: ${`${props.width}px`};
          height: 100%;
          background: #1b1b1b;
        }

        .drawerContainer__drawer-enter {
          transform: translateX(${`${props.width}px`});
        }

        .drawerContainer__drawer-enter-active {
          transform: translateX(0);
          transition: transform ease ${TIMEOUT}ms;
        }

        .drawerContainer__drawer-exit {
          transform: scale(1);
        }

        .drawerContainer__drawer-exit-active {
          transform: translateX(${`${props.width}px`});
          transition: transform ease ${TIMEOUT}ms;
        }
      `}
      className={classNames(props.className, { "drawerContainer--open": open })}
      onMouseDown={() => setOpen(false)}
    >
      <CSSTransition
        in={open}
        timeout={TIMEOUT}
        mountOnEnter
        unmountOnExit
        onExited={props.onClose}
        classNames="drawerContainer__drawer"
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          className="drawerContainer__drawer"
          onMouseDown={(event) => event.stopPropagation()}
        >
          {props.children}
        </div>
      </CSSTransition>
    </div>
  );
};
