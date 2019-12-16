import React from "react";

import { breakpoints } from "../../../styles/theme";

const Item = ({ icon, title, text }) => {
  return (
    <div className="container flex">
      <img src={`/images/Icons/${icon}`} alt={icon} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <style jsx>{`
        img {
          height: 34px;
          margin-right: 30px;
        }

        .container {
          margin-top: 60px;
        }

        h3 {
          font-size: 2.5rem;
          letter-spacing: -0.17px;
        }

        p {
          font-size: 1.7rem;
          opacity: 0.7;
        }

        @media (${breakpoints.md}) {
          .container {
            margin-top: 80px;
          }

          h3 {
            font-size: 2.8rem;
            letter-spacing: -0.19px;
          }
        }
      `}</style>
    </div>
  );
};

export default Item;
