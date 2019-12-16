import { useState, useEffect } from "react";
let timeout;

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    y: 0,
    direction: ""
  });

  const listener = () => {
    setScroll(prev => ({
      y: window.scrollY,
      direction: prev.y > window.scrollY ? "up" : "down"
    }));
  };

  useEffect(() => {
    setScroll({
      y: window.scrollY,
      direction: ""
    });
    window.addEventListener("scroll", () => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }
      timeout = window.requestAnimationFrame(function() {
        listener();
      });
    });
    return () => {
      window.removeEventListener("scroll", listener);
      window.cancelAnimationFrame(timeout);
    };
  }, []);

  return scroll;
};
