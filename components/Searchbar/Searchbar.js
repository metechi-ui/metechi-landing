import React from "react";

import { colors } from "../../styles/theme";

const Searchbar = ({ withIcon, ...props }) => {
  return (
    <>
      <div className="searchbar">
        <input type="text" {...props} />
        {withIcon && <i className="icon-search-icon" />}
      </div>
      <style jsx>{`
        .searchbar {
          position: relative;
          height: 32px;
          display: flex;
          align-items: center;
          border-radius: 16px;
          border: solid 1px ${colors.lightGrey};
          background-color: ${colors.white};
          padding-left: 16px;
          padding-right: 36px;
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

        i {
          position: absolute;
          top: calc(50% - 8px);
          right: 8px;
          font-size: 16px;
          color: ${colors.grey};
        }
      `}</style>
    </>
  );
};

export default Searchbar;
