import React from "react";
import nl2br from "react-nl2br";
import classnames from "classnames";

import { breakpoints } from "../../styles/theme";

import Tile from "../../components/Tile";
import TileContainer from "../../components/Tile/Container";

const Market = ({ data }) => {
  const { title, text, tiles } = data.market || {};
  return (
    <>
      <section className="max-container about-market">
        <div className="container">
          <h2>{title}</h2>
          <p>{nl2br(text)}</p>
          <TileContainer>
            {tiles.map((tile, idx) => (
              <Tile
                key={tile.icon}
                icon={tile.icon}
                text={tile.text}
                label={tile.label}
                small
                className={classnames({
                  "no-border-bottom": idx === tiles.length - 1
                })}
              />
            ))}
          </TileContainer>
        </div>
      </section>
      <style jsx>{`
        section {
          padding-top: 90px;
        }

        h2 {
          font-size: 4.2rem;
          margin-bottom: 25px;
        }

        p {
          font-size: 2rem;
        }

        :global(.tile-container) {
          margin-top: 60px;
          margin-bottom: 90px;
        }

        @media (${breakpoints.md}) {
          section {
            padding-top: 150px;
          }
          :global(.tile-container) {
            margin-top: 160px;
            margin-bottom: 180px;
          }
          h2 {
            font-size: 5.2rem;
          }
          p {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Market;
