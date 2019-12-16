import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import resetStyles from "../styles/reset";
import typographyStyles from "../styles/typography";
import utilsStyles from "../styles/utils";
import buttonStyles from "../styles/button";
import fieldStyles from "../styles/field";
import icons from "../styles/icons";
import Footer from "../components/Footer";
import Button from "../components/Button";

import { breakpoints } from "../styles/theme";

const ThankYou = () => {
  const [active, set] = useState(true);

  if (!active) return null;

  return (
    <>
      <Head>
        <META
          HTTP-EQUIV="Content-type"
          CONTENT="text/html; charset=UTF-8"
        ></META>
      </Head>
      <div className="thank-you flex justify-center">
        <div className="full-abs" onClick={() => set(false)} />
        <article className="stagger-in">
          <h2>Thank You!</h2>
          <p>Our team will contact you shortly</p>
          <Button primary small onClick={() => set(false)} label="Close" />
        </article>

        <style jsx global>{`
          .thank-you {
            text-align: center;
            align-items: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 300;
            padding: 20px 25px;
          }
          .full-abs {
            background-color: rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }

          article {
            background-color: #fff;
            position: relative;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
            padding: 30px 25px;
            width: 100%;
            max-width: 520px;
          }

          h2 {
            font-size: 3.8rem;
            margin-bottom: 15px;
          }

          p {
            font-size: 2rem;
            margin-bottom: 30px;
          }

          @media (${breakpoints.md}) {
            h2 {
              font-size: 4.2rem;
              margin-bottom: 20px;
            }

            p {
              font-size: 1.9rem;
            }
          }
        `}</style>
        <style jsx global>{`
          body {
            height: ${active ? "100%" : "auto"};
            overflow-y: ${active ? "hidden" : "auto"};
          }
        `}</style>
      </div>
    </>
  );
};

const Page = ({ children }) => {
  const router = useRouter();

  return (
    <div className="page">
      {children}
      <Footer />

      {router.query.thankyou && <ThankYou />}

      <style jsx global>
        {resetStyles}
      </style>
      <style jsx global>
        {typographyStyles}
      </style>
      <style jsx global>
        {utilsStyles}
      </style>
      <style jsx global>
        {buttonStyles}
      </style>
      <style jsx global>
        {fieldStyles}
      </style>
      <style jsx global>
        {icons}
      </style>

      <style jsx global>{`
        .max-container:not(.no-padding) {
          padding-right: 25px;
          padding-left: 25px;
        }

        @media (${breakpoints.md}) {
          .max-container {
            max-width: 1160px;
            margin-right: auto;
            margin-left: auto;
            padding-right: 35px;
            padding-left: 35px;
          }
          .max-container.wide {
            max-width: 1320px;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
