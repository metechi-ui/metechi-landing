import React from "react";

import { colors, breakpoints } from "../../styles/theme";

const Background = ({ children }) => {
  return (
    <div>
      <div className="form max-container wide no-padding">{children}</div>
      <style jsx>{`
        .form {
          margin-top: 60px;
          padding-top: 30px;
          padding-bottom: 80px;
          background: url("/images/form-bg.jpg") center no-repeat;
          background-size: cover;
        }

        .form :global(.field):before {
          background-color: ${colors.grey};
        }

        @media (${breakpoints.md}) {
          .form {
            margin-top: 90px;
            padding-top: 60px;
            margin-bottom: 160px;
          }
        }
      `}</style>
    </div>
  );
};

export default Background;
