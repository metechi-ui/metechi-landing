import React from "react";
import Head from "next/head";

import { colors, breakpoints } from "../styles/theme";
import Nav from "../components/Nav";
import ContactForm from "../components/Contact/Form";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Metechi - Contact</title>
        <meta
          http-equiv="Content-Security-Policy"
          content="script-src 'self' https://now.sh"
        />
        <meta https-equiv="Content-type" CONTENT="text/html; charset=UTF-8" />
      </Head>
      <Nav />
      <section>
        <div className="max-container container">
          <h1 className="stagger-in second">Let’s Talk</h1>
          <ContactForm className="stagger-in third" />
        </div>

        <div className="location max-container no-padding">
          <img className="img1" src="/images/Contact/radio-city.jpg" />
          <a
            className="img2"
            target="_blank"
            href="https://www.google.com/maps/place/1270+6th+Ave,+New+York,+NY+10020/"
          >
            <img src="/images/Contact/map.jpg" />
          </a>
        </div>

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
      </section>

      <style jsx>{`
        h1 {
          font-size: 5.2rem;
          margin-bottom: 50px;
        }

        .container {
          margin-top: 60px;
          margin-bottom: 90px;
        }

        .location {
          display: flex;
          margin-bottom: 90px;
          align-items: flex-start;
        }
        .location img {
          dispay: block;
        }
        .img1 {
          width: 61.83%;
        }
        .img2 {
          width: 38.17%;
        }
        .img2 img {
          width: 100%;
          transition: opacity 0.3s;
        }
        .img2:hover img {
          opacity: 0.7;
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

        .follow {
          margin-bottom: 120px;
        }

        @media (${breakpoints.md}) {
          h1 {
            font-size: 6.2rem;
            margin-bottom: 80px;
          }
          .container {
            margin-top: 80px;
            margin-bottom: 150px;
          }

          .location {
            margin-bottom: 120px;
          }
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
    </div>
  );
};

export default Contact;
