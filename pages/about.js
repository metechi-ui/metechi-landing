import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import nl2br from "react-nl2br";

import { colors, breakpoints } from "../styles/theme";
import { scrollTo } from "../utils/scrollTo";

import Nav from "../components/Nav";
import AccessForm from "../components/AccessForm";
import Market from "../components/About/Market";
import Team from "../components/About/Team";

const AboutUs = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Metechi - About Us</title>
        <meta https-equiv="Content-type" CONTENT="text/html; charset=UTF-8" />
      </Head>

      <Nav light />

      <header className="full-abs-before">
        <div className="max-container wide with-padding">
          <div className="container">
            <h1 className="stagger-in third">{nl2br(data.title)}</h1>
            <a
              className="learn-more stagger-in third"
              onClick={() => scrollTo(document.querySelector(".about-market"))}
            >
              Learn More
              <div className="triangle white" />
            </a>
          </div>
        </div>
        <figure className="full-abs-after" />
      </header>

      <Market data={data} />

      <Team data={data} />

      <div className="form max-container wide no-padding">
        <AccessForm />
      </div>

      <style jsx>{`
        @keyframes bgIn {
          from {
            transform: skewY(-5deg) scaleY(0);
          }
          to {
            transform: skewY(0deg) scaleY(1);
          }
        }

        header {
          position: relative;
          margin-top: -96px;
        }
        header:before {
          background-color: ${colors.blue};
          transform-origin: left top;
          animation: bgIn 0.6s backwards;
          z-index: -1;
        }

        .container {
          padding-top: 150px;
          padding-bottom: 50px;
        }

        h1 {
          font-size: 5.2rem;
          color: ${colors.white};
        }

        @keyframes dcaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        figure {
          height: 450px;
          background-image: url("/images/About/office-space.jpg");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          filter: sepia(100%) hue-rotate(190deg) saturate(500%);
          animation: dcaleIn 0.5s 0.6s backwards;
        }

        .form {
          margin-top: 60px;
          padding-top: 30px;
          padding-bottom: 80px;
          background: url(/images/form-bg.jpg) center no-repeat;
          background-size: cover;
        }

        .form :global(.field):before {
          background-color: #c7ccd8;
        }

        .learn-more {
          display: inline-block;
          font-size: 1.5rem;
          font-weight: 500;
          color: ${colors.white};
          cursor: pointer;
          margin-top: 80px;
        }

        .learn-more .triangle {
          transform: rotate(90deg);
          margin-left: 20px;
        }

        @media (${breakpoints.md}) {
          .container {
            padding-top: 180px;
          }

          h1 {
            font-size: 6.2rem;
          }

          figure {
            position: absolute;
            top: 0;
            right: 0;
            bottom: -50px;
            width: 50%;
            height: auto;
          }

          .form {
            margin-top: 90px;
            padding-top: 60px;
            margin-bottom: 160px;
          }

          .learn-more {
            margin-top: 250px;
          }
        }
      `}</style>
    </div>
  );
};

AboutUs.getInitialProps = async () => {
  const res = await fetch("https://about.metechi.com/about.json", {
    mode: "no-cors"
  });
  const data = await res.json();
  return { data };
};

export default AboutUs;
