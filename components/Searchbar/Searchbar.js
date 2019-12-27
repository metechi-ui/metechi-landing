import React from "react";

import { colors } from "../../styles/theme";

const Searchbar = ({ placeholder }) => {
  return (
    <>
      <div className="searchbar">
        <input type="text" placeholder={placeholder} />
      </div>
      <style jsx>{`
        .searchbar {
          height: 32px;
          display: flex;
          align-items: center;
          border-radius: 16px;
          border: solid 1px ${colors.lightGrey};
          background-color: ${colors.white};
          padding: 0 16px;
        }

        .searchbar:focus-within {
          border: solid 1px ${colors.lightBlue};
        }

        input {
          width: 100%;
          font-size: 13px;
          letter-spacing: -0.09px;
          color: ${colors.darkGrey};
        }

        input::placeholder {
          color: ${colors.grey};
        }
      `}</style>
    </>
  );
};

export default Searchbar;
