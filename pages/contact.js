import React from "react";
import Head from "next/head";

import { breakpoints } from "../styles/theme";
import Nav from "../components/Nav";
import FollowUs from "../components/FollowUs";
import ContactForm from "../components/Contact/Form";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Metechi - Contact</title>
        <meta https-equiv="Content-type" content="text/html; charset=UTF-8" />
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

        <FollowUs />
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
        }
      `}</style>
    </div>
  );
};

export default Contact;
