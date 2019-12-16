import React from "react";
import nl2br from "react-nl2br";

import { colors } from "../../styles/theme";

const AvatarInfo = ({ name, position, info, img, linkedin }) => {
  return (
    <>
      <article>
        <div className="avatar">
          <figure style={{ backgroundImage: `url(/images/About/${img})` }} />
          <div className="justify-space-between align-center">
            <div className="avatar-wrapper">
              <h3>{name}</h3>
              <p className="avatar-title">{position}</p>
            </div>
            {linkedin && (
              <div>
                <a
                  target="_blank"
                  href={linkedin}
                  className="icon-linkedin avatar-icon"
                />
              </div>
            )}
          </div>
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p className="avatar-title">{position}</p>
          <p className="info-text">{nl2br(info)}</p>
          {linkedin && (
            <div className="info-icon-wrapper">
              <a
                target="_blank"
                href={linkedin}
                className="icon-linkedin info-icon"
              />
            </div>
          )}
        </div>
      </article>
      <style jsx>{`
        article {
          position: relative;
        }

        article:hover .info {
          opacity: 1;
          transform: translateY(0) skewY(0deg);
        }

        figure {
          height: 0;
          padding-bottom: 130%;
          background-color: ${colors.smoke};
          background-position: top center;
          background-size: cover;
        }

        h3 {
          font-size: 2.6rem;
          margin-bottom: 5px;
        }

        .avatar-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: ${colors.grey};
        }

        .avatar-icon {
          font-size: 1.5rem;
          color: ${colors.blueyGrey};
          text-decoration: none;
        }

        .avatar-wrapper {
          margin-top: 15px;
        }

        .info {
          position: absolute;
          width: 100%;
          min-height: 80%;
          bottom: -5px;
          left: 20px;
          display: flex;
          flex-direction: column;
          padding: 50px 30px 30px 30px;
          background-color: ${colors.iceBlue};
          opacity: 0;
          transition: all 0.3s;
          transform: translateY(20px) skewY(3deg);
          transform-origin: left top;
        }

        .info-text {
          font-size: 1.7rem;
          margin-top: 30px;
          margin-bottom: 20px;
        }

        .info-icon {
          font-size: 1.5rem;
          color: ${colors.lightBlue};
          text-decoration: none;
        }

        .info-icon-wrapper {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </>
  );
};

export default AvatarInfo;
