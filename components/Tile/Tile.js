import React from "react";
import nl2br from "react-nl2br";
import classnames from "classnames";

import { colors, breakpoints } from "../../styles/theme";

const Tile = ({ style, className, icon, label, text, small }) => {
  return (
    <>
      <div style={style} className={classnames("tile", className)}>
        <img src={`/images/${icon}`} alt={icon} />
        {!small && <p className="tile-label">{label}</p>}
        <h3 className="tile-text">{nl2br(text)}</h3>
        {small && <p className="tile-label small">{label}</p>}
      </div>
      <style jsx>{`
        .tile {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 30px 10px 0;
        }
        .tile:not(.no-border-bottom):after {
          content: "";
          display: block;
          margin-top: 50px;
          width: 220px;
          border-bottom: solid 1px ${colors.lightGrey};
        }

        .tile-label {
          font-size: 2rem;
          font-weight: 500;
          color: ${colors.grey};
          margin-top: 15px;
        }
        .tile-label.small {
          font-size: 1.8rem;
          margin-top: 10px;
        }

        .tile-text {
          font-size: 3.8rem;
          text-align: center;
        }

        @media (${breakpoints.md}) {
          .tile {
            padding: ${small ? "0" : "70px"} 20px;
            border-right: solid 1px ${colors.lightGrey};
          }

          .tile:last-child {
            border-right: 0;
          }
          .tile:after {
            content: none !important;
          }

          .tile-label {
            font-size: 2.2rem;
            margin-top: 20px;
          }

          .tile-text {
            font-size: 4.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Tile;
