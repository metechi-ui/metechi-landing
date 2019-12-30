import React from "react";
import nl2br from "react-nl2br";

import { colors, breakpoints } from "../../styles/theme";

const Header = ({ title, cta, image, color, onClick }) => {
  return (
    <>
      <header className="full-abs-before">
        <div className="max-container wide with-padding">
          <div className="container">
            <h1 className="stagger-in third">{nl2br(title)}</h1>
            <a className="cta stagger-in third" onClick={onClick}>
              {cta}
              <div className="triangle white" />
            </a>
          </div>
        </div>
        <figure className="full-abs-after" />
      </header>

      <style jsx>{`
        @keyframes bgIn {
          from {
            transform: skewY(-5deg) scaleY(0);
          }
          to {
            transform: skewY(0deg) scaleY(1);
          }
        }

        @keyframes dcaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        header {
          position: relative;
          margin-top: -96px;
        }

        header:before {
          background-color: ${color};
          transform-origin: left top;
          animation: bgIn 0.6s backwards;
          z-index: -1;
        }

        .container {
          padding-top: 150px;
          padding-bottom: 50px;
        }

        h1 {
          font-size: 5.2rem;
          color: ${colors.white};
        }

        figure {
          height: 450px;
          background-image: url(${image});
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          filter: sepia(100%) hue-rotate(190deg) saturate(500%);
          animation: dcaleIn 0.5s 0.6s backwards;
        }

        .cta {
          display: inline-block;
          font-size: 1.5rem;
          font-weight: 500;
          color: ${colors.white};
          cursor: pointer;
          margin-top: 80px;
        }

        .cta .triangle {
          transform: rotate(90deg);
          margin-left: 20px;
        }

        @media (${breakpoints.md}) {
          .container {
            padding-top: 180px;
          }

          h1 {
            font-size: 6.2rem;
          }

          figure {
            position: absolute;
            top: 0;
            right: 0;
            bottom: -50px;
            width: 50%;
            height: auto;
          }

          .cta {
            margin-top: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
