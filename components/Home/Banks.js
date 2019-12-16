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
        <img src="/images/HP/charles.jpg" alt="charles.jpg" />
        <div className="avatar-info">
          <p className="avatar-title">
            {position} <span className="triangle blue" />
          </p>
          <p className="avatar-name">{name}</p>
        </div>
      </div>
      <style jsx>{`
        .align-center {
          cursor: pointer;
        }
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .avatar-info {
          margin-left: 20px;
        }

        .avatar-title {
          font-size: 1.6rem;
          font-weight: 500;
          color: ${colors.lightBlue};
        }

        .avatar-name {
          font-size: 1.5rem;
          margin-top: 2px;
        }

        .triangle {
          margin-left: 20px;
          transition: transform 0.2s;
        }

        .author:hover .triangle {
          transform: translateX(10px);
        }
      `}</style>
    </>
  );
};

const Banks = ({ data }) => {
  const { title, text1, text2, author } = data.banks || {};

  return (
    <>
      <section className="justify-center-md">
        <div className="tablet-container">
          <figure className="tablet">
            <figure className="tablet-frame" />
          </figure>
        </div>

        <div className="banks">
          <div className="banks-container">
            <h2>{title}</h2>
            <p className="info" style={{ marginBottom: "25px" }}>
              {nl2br(text1)}
            </p>
            <p className="info">{nl2br(text2)}</p>
            <hr />
            <Avatar author={author} />
          </div>
        </div>
      </section>
      <style jsx>{`
        section {
          margin-bottom: 60px;
        }

        .tablet-container {
          flex: 1;
          padding-right: 50px;
          direction: rtl;
          width: 55%;
        }

        .tablet {
          position: relative;
          width: 500px;
          height: 377px;
          background-image: url("/images/HP/screen_01.jpg");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        .tablet-frame {
          position: absolute;
          top: -4.45%;
          right: -4.35%;
          left: -4.35%;
          bottom: -4.45%;
          background-image: url("/images/tablet-frame.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        .banks {
          flex: 1;
          padding: 60px 25px;
        }

        .banks-container {
          max-width: 630px;
        }

        h2 {
          font-size: 3.8rem;
          margin-bottom: 15px;
        }

        .info {
          font-size: 1.8rem;
          max-width: 420px;
        }

        hr {
          width: 50px;
          border: solid 1px ${colors.lightBlue};
          margin-top: 50px;
          margin-bottom: 50px;
        }

        @media (${breakpoints.downXl}) {
          .tablet-container {
            width: 45%;
          }
        }

        @media (${breakpoints.downMd}) {
          .tablet-container {
            width: 100%;
            direction: ltr;
          }
        }
        @media (${breakpoints.downSm}) {
          .tablet-container {
            direction: rtl;
          }
        }

        @media (${breakpoints.md}) {
          section {
            margin-bottom: 200px;
          }

          .tablet {
            width: 800px;
            height: 600px;
          }

          .tablet-container {
            padding-right: 0;
          }

          .banks {
            padding: 40px 90px;
          }

          h2 {
            font-size: 4.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Banks;
