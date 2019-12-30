import React from "react";

import { colors } from "../../styles/theme";

const TagContainer = ({ children }) => {
  return (
    <>
      <div className="tags">{children}</div>
      <style jsx>{`
        .tags {
          display: flex;
          flex-wrap: wrap;
          margin: -6px;
        }
      `}</style>
    </>
  );
};

const Tag = ({ text }) => {
  return (
    <>
      <div className="tag">{text}</div>
      <style jsx>{`
        .tag {
          height: 26px;
          display: flex;
          align-items: center;
          border-radius: 16px;
          background-color: ${colors.paleGrey};
          padding: 0 10px;
          font-size: 15px;
          letter-spacing: -0.1px;
          margin: 6px;
        }
      `}</style>
    </>
  );
};

export { Tag, TagContainer };
