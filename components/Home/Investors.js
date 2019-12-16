import React, { useContext } from "react";
import nl2br from "react-nl2br";

import { ModalContext } from "../../context/ModalContext";
import { colors, breakpoints } from "../../styles/theme";

const Avatar = ({ author }) => {
  const { name, position } = author || {};
  const [, dispatch] = useContext(ModalContext);

  return (
    <>
      <div
        className="author align-center"
        onClick={() => dispatch({ type: "show" })}
      >
        <div className="avatar-info">
          <p className="avatar-title align-center">
            <span className="label">{position}</span>
            <span className="triangle blue" />
          </p>
          <p className="avatar-name">{name}</p>
        </div>
        <img src="/images/HP/stephanie.jpg" alt="stephanie.jpg" />
      </div>
      <style jsx>{`
        .align-center {
          cursor: pointer;
        }

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          order: 1;
        }

        .avatar-info {
          margin-left: 20px;
          order: 2;
        }

        .avatar-title {
          font-size: 1.6rem;
          font-weight: 500;
        }

        .label {
          color: ${colors.lightBlue};
          flex: 1;
        }

        .avatar-name {
          font-size: 1.5rem;
          margin-top: 2px;
        }

        .triangle {
          margin-left: 15px;
          transition: transform 0.2s;
        }

        .author:hover .triangle {
          transform: translateX(10px);
        }

        @media (${breakpoints.md}) {
          img {
            order: 2;
          }

          .avatar-info {
            order: 1;
            margin-right: 20px;
            margin-left: 0;
          }

          .avatar-title {
            flex-direction: row-reverse;
          }
          .triangle {
            margin-left: 0;
            margin-right: 20px;
            transform: scaleX(-1);
          }
          .author:hover .triangle {
            transform: scaleX(-1) translateX(10px);
          }
        }
      `}</style>
    </>
  );
};

const Investors = ({ data = {} }) => {
  const { title, text, title2, text2, author } = data.participants || {};
  return (
    <>
      <section>
        <div className="investors">
          <div className="investors-container">
            <h2>{title}</h2>
            <p className="info">{nl2br(text)}</p>
            <h2 className="title2">{title2}</h2>
            <p className="info">{nl2br(text2)}</p>
            <hr />
            <Avatar author={author} />
          </div>
        </div>
        <div className="phone-container">
          <figure className="phone">
            <figure className="phone-frame" />
          </figure>
        </div>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
        }

        .investors {
          flex: 1;
          order: 2;
          display: flex;
          flex-direction: column;
          padding: 100px 25px;
        }

        .investors-container {
          max-width: 630px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        h2 {
          font-size: 3.8rem;
        }

        .info {
          font-size: 1.8rem;
          margin-top: 15px;
          max-width: 420px;
        }

        .title2 {
          margin-top: 80px;
        }

        hr {
          width: 50px;
          border: solid 1px ${colors.lightBlue};
          margin-top: 50px;
          margin-bottom: 50px;
        }

        .phone {
          flex: 1;
          position: relative;
          max-width: 305px;
          height: 600px;
          background-image: url("/images/HP/screen_02.jpg");
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
          margin: 0 auto;
        }

        .phone-frame {
          position: absolute;
          top: -23px;
          right: -4px;
          left: -4px;
          bottom: -24px;
          background-image: url("/images/mobile-frame.png");
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .phone-container {
          flex: 1;
        }

        @media (${breakpoints.md}) {
          section {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
          }

          .investors {
            order: 1;
            padding: 40px 90px;
          }

          .investors-container {
            align-items: flex-end;
            text-align: right;
          }

          .phone {
            margin: initial;
            max-width: 370px;
            height: 720px;
          }

          .phone-container {
            order: 2;
            padding-left: 60px;
          }

          h2 {
            font-size: 4.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Investors;
