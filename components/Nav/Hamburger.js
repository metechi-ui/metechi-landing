import React from "react";
import classnames from "classnames";

import { colors } from "../../styles/theme";

const Hamburger = ({ active, onClick, light }) => {
  return (
    <>
      <div
        className={classnames("hamburger hamburger--squeeze", {
          "is-active": active,
          light
        })}
        onClick={() => onClick(!active)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <style jsx>{`
        .hamburger {
          padding: 10px;
          cursor: pointer;
        }

        .hamburger.is-active .hamburger-inner,
        .hamburger.is-active .hamburger-inner::before,
        .hamburger.is-active .hamburger-inner::after {
          width: 26px;
          background-color: ${colors.darkGrey};
        }

        .hamburger-box {
          width: 26px;
          height: 13px;
          position: relative;
        }

        .hamburger-inner {
          top: 50%;
          margin-top: -2px;
        }

        .hamburger-inner,
        .hamburger-inner::before,
        .hamburger-inner::after {
          width: 26px;
          height: 2px;
          background-color: ${colors.darkGrey};
          border-radius: 2px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }

        .hamburger.light .hamburger-inner,
        .hamburger.light .hamburger-inner::before,
        .hamburger.light .hamburger-inner::after {
          background-color: #fff;
        }

        .hamburger-inner::after {
          width: 16px;
          right: 0;
        }

        .hamburger-inner::before,
        .hamburger-inner::after {
          content: "";
          display: block;
        }

        .hamburger-inner::before {
          top: -7px;
        }

        .hamburger-inner::after {
          bottom: -7px;
        }

        .hamburger--squeeze .hamburger-inner {
          transition-duration: 0.075s;
          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .hamburger--squeeze .hamburger-inner::before {
          transition: top 0.075s 0.12s ease, opacity 0.075s ease;
        }

        .hamburger--squeeze .hamburger-inner::after {
          transition: bottom 0.075s 0.12s ease,
            transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        .hamburger--squeeze.is-active .hamburger-inner {
          transform: rotate(45deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .hamburger--squeeze.is-active .hamburger-inner::before {
          top: 0;
          opacity: 0;
          transition: top 0.075s ease, opacity 0.075s 0.12s ease;
        }

        .hamburger--squeeze.is-active .hamburger-inner::after {
          bottom: 0;
          transform: rotate(-90deg);
          transition: bottom 0.075s ease,
            transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      `}</style>
    </>
  );
};

export default Hamburger;
