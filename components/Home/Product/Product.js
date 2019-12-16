import React from "react";

import { colors, breakpoints } from "../../../styles/theme";
import ProductItem from "./Item";

const icons = [
  "match-icon.svg",
  "share-icon.svg",
  "collaborate-icon.svg",
  "communicate-icon.svg",
  "monitor-icon.svg"
];

const Product = ({ data }) => {
  const { title, items = [] } = data.product || {};
  return (
    <>
      <section className="product">
        <div className="max-container wide justify-center-md">
          <div className="product-text">
            <div className="product-container">
              <h2>{title}</h2>

              <div className="items-wrapper">
                {items.map(({ label, text }, idx) => (
                  <ProductItem
                    key={icons[idx]}
                    icon={icons[idx]}
                    title={label}
                    text={text}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="tablet-container">
            <div className="tablet">
              <div className="tablet-frame"></div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          padding-top: 120px;
          margin-top: 0;
          margin-bottom: 80px;
          position: relative;
        }
        section:before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          right: 0;
          left: 0;
          background-color: ${colors.smoke};
          bottom: 10%;
        }

        h2 {
          font-size: 3.8rem;
        }

        button {
          margin-top: 80px;
          padding: 0 50px;
        }

        .tablet-container {
          width: 100%;
          margin-left: 50px;
          margin-top: 80px;
          transform: translateY(50px);
        }

        .tablet {
          background-image: url("/images/HP/screen_03.jpg");
          background-size: contain;
          background-position: top;
          background-repeat: no-repeat;
          width: 500px;
          height: 385px;
          position: relative;
        }

        .tablet-frame {
          position: absolute;
          top: -4.5%;
          right: -3.5%;
          left: -3.5%;
          bottom: -4.5%;
          background-image: url("/images/tablet-frame.png");
          background-size: contain;
          background-position: top;
          background-repeat: no-repeat;
        }

        @media (${breakpoints.md}) {
          section {
            margin-top: -20px;
            padding-top: 180px;
            margin-bottom: 120px;
          }

          h2 {
            font-size: 4.6rem;
          }

          .product-text {
            width: 50%;
          }

          .product-container {
            max-width: 620px;
            margin-left: auto;
            padding: 0;
          }

          .items-wrapper {
            padding-right: 80px;
          }

          .tablet-container {
            width: 50%;
            margin-left: 0;
            margin-top: 100px;
            transform: translateY(80px);
          }

          .tablet {
            width: 1160px;
            height: 891px;
          }
        }
      `}</style>
    </>
  );
};

export default Product;
