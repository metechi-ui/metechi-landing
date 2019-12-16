import React from "react";

import { colors, breakpoints } from "../../styles/theme";

const TileContainer = ({ children }) => {
  return (
    <>
      <div className="tile-container">{children}</div>
      <style jsx>{`
        @media (${breakpoints.md}) {
          .tile-container {
            display: flex;
            border-bottom: solid 1px ${colors.lightGrey};
          }

          .tile-container:last-child {
            border-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default TileContainer;
