import React from "react";
import classnames from "classnames";

import Tile, { TileContainer } from "../../components/Tile";

const icons = [
  "HP/deal-size.svg",
  "HP/aum.svg",
  "HP/ticket.svg",
  "HP/qualified.svg",
  "HP/vetted.svg"
];

const Tiles = ({ data }) => {
  const { tiles = [] } = data;
  return (
    <>
      <section className="max-container">
        <TileContainer>
          {tiles.map(
            ({ label, text }, idx) =>
              idx < 3 && (
                <Tile
                  key={icons[idx]}
                  icon={icons[idx]}
                  label={label}
                  text={text}
                />
              )
          )}
        </TileContainer>
        <TileContainer>
          {tiles.map(
            ({ label, text }, idx) =>
              idx > 2 && (
                <Tile
                  key={icons[idx]}
                  icon={icons[idx]}
                  label={label}
                  text={text}
                  className={classnames({
                    "no-border-bottom": idx === tiles.length - 1
                  })}
                />
              )
          )}
        </TileContainer>
      </section>
      <style jsx>{`
        section {
          margin-bottom: 200px;
        }
      `}</style>
    </>
  );
};

export default Tiles;
