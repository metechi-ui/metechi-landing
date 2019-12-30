import React from "react";

import { colors, breakpoints } from "../../styles/theme";

const FollowUs = () => {
  return (
    <>
      <div className="follow justify-center">
        <div>
          <h2>Follow Us</h2>
          <div>
            <a
              target="_blank"
              href="https://www.twitter.com/metechi"
              className="social-icon icon-twitter"
            />
            <a
              target="_blank"
              href="https://www.facebook.com/Metechi-1190578191118346"
              className="social-icon icon-facebook"
            />
            <a
              target="_blank"
              href="https://www.linkedin.com/company/metechi"
              className="social-icon icon-linkedin"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .follow {
          margin-bottom: 120px;
        }

        h2 {
          text-align: center;
          font-size: 4.2rem;
          margin-bottom: 60px;
        }

        .social-icon {
          font-size: 3rem;
          color: ${colors.blueyGrey};
          margin-right: 50px;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-block;
        }

        .social-icon:hover {
          transform: translateY(-2px);
        }

        .social-icon.icon-facebook:hover {
          color: ${colors.facebook};
        }

        .social-icon.icon-twitter:hover {
          color: ${colors.twitter};
        }

        .social-icon.icon-linkedin:hover {
          color: ${colors.linkedin};
        }

        .social-icon:last-child {
          margin-right: 0;
        }

        @media (${breakpoints.md}) {
          .follow {
            margin-bottom: 180px;
          }

          h2 {
            font-size: 5.2rem;
            margin-bottom: 80px;
          }

          .social-icon {
            font-size: 3.4rem;
            margin-right: 65px;
          }
        }
      `}</style>
    </>
  );
};

export default FollowUs;
