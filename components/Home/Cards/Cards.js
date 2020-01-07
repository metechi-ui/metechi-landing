import React from "react";
import nl2br from "react-nl2br";

import { colors, breakpoints } from "../../../styles/theme";
import Card from "./Card";

const Cards = ({ data }) => {
  const { title, text } = data.locations || {};
  return (
    <>
      <section>
        <div className="cards-wrapper flex">
          <article>
            <h2>{title}</h2>
            <p>{nl2br(text)}</p>
          </article>

          <div className="cards flex">
            <Card
              className="second"
              delay={0}
              deals={[
                {
                  image: "sf-cover.jpg",
                  title: "Soma, SF",
                  label: "Senior",
                  num: 75
                },
                {
                  image: "brooklyn-cover.jpg",
                  title: "Brooklyn, NY",
                  label: "Mezz/B Note",
                  num: 50
                }
              ]}
            />

            <Card
              className="first"
              delay={1000}
              deals={[
                {
                  image: "manhattan-cover.jpg",
                  title: "Manhattan, NY",
                  label: "Mezz/B Note",
                  num: 80
                },
                {
                  image: "boston-cover.jpg",
                  title: "Boston, MA",
                  label: "Senior",
                  num: 35
                }
              ]}
            />
            <Card
              className="third"
              delay={2200}
              deals={[
                {
                  image: "dallas-cover.jpg",
                  title: "Downtown, Dallas",
                  label: "Senior",
                  num: 30
                },
                {
                  image: "miami-cover.jpg",
                  title: "Miami, FL",
                  label: "Mezz/B Note",
                  num: 40
                }
              ]}
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          margin: 0 auto;
          margin-bottom: 120px;
          max-width: 1160px;
        }
        .cards-wrapper {
          height: 580px;
          position: relative;
          background-image: url("/images/HP/grow-bg.jpg");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          margin: 0 auto 270px;
          padding-top: 40px;
          max-width: 100%;
        }

        article {
          max-width: 480px;
          margin-left: 25px;
          margin-right: 25px;
          flex: 1;
        }
        h2 {
          font-size: 3.8rem;
          color: ${colors.white};
          margin-bottom: 15px;
        }

        p {
          font-size: 1.8rem;
          color: ${colors.white};
          margin-bottom: 20px;
        }

        .cards {
          align-items: flex-start;
          justify-content: flex-end;
          flex-wrap: wrap;
          width: 420px;
          margin-top: 50px;
        }

        @media (${breakpoints.md}) {
          section {
            width: calc(100vw - 80px);
          }
          .cards-wrapper {
            height: 615px;
            padding-top: 80px;
            margin-bottom: 0;
            flex-direction: row;
            align-items: flex-start;
          }

          article {
            margin-left: 70px;
          }
          h2 {
            font-size: 4.6rem;
            margin-bottom: 20px;
          }

          .cards {
            transform: translateX(20px);
            width: 490px;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Cards;
