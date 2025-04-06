import { useEffect } from "react";

export const useFrozenScroll = (frozen: boolean) => {
  useEffect(() => {
    const html = document.documentElement;

    const hasScrollbar = html.scrollHeight > html.clientHeight;

    if (frozen) {
      html.style.overflow = "hidden";

      if (hasScrollbar) {
        html.style.paddingRight = "16px";
      }
    } else {
      html.style.overflow = "";
      html.style.paddingRight = "";
    }
  }, [frozen]);
};
