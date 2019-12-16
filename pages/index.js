import React, { useContext } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import nl2br from "react-nl2br";
import axios from "axios";

import { breakpoints } from "../styles/theme";
import Nav from "../components/Nav";
import AccessForm from "../components/AccessForm";
import Button from "../components/Button";
import Cards from "../components/Home/Cards";
import Tiles from "../components/Home/Tiles";
import Banks from "../components/Home/Banks";
import Investors from "../components/Home/Investors";
import Product from "../components/Home/Product";
import { ModalContext } from "../context/ModalContext";

const HeroWithNoSSR = dynamic(() => import("../components/Home/Hero"), {
  ssr: false
});

const HeroBtn = ({ label }) => {
  const [, dispatch] = useContext(ModalContext);
  return (
    <Button
      className="stagger-in third"
      primary
      label="Get Access"
      onClick={() => dispatch({ type: "show" })}
    />
  );
};

const Home = ({ data = {} }) => {
  return (
    <div>
      <Head>
        <title>Metechi</title>
      </Head>

      <Nav />

      <section className="home-title max-container flex-column justify-center-md align-center-md">
        <h1 className="stagger-in">{nl2br(data.title)}</h1>
        <p className="stagger-in second">{nl2br(data.subTitle)}</p>
        <HeroBtn label={nl2br(data.heroCta)} />
      </section>

      <section className="hero-wrapper">
        <HeroWithNoSSR />
      </section>

      <div className="overflow-hidden">
        <Cards data={data} />

        <Tiles data={data} />

        <Banks data={data} />

        <Investors data={data} />

        <Product data={data} />

        <div className="form-wrapper">
          <AccessForm />
        </div>
      </div>

      <style jsx>{`
        h1 {
          font-size: 4.2rem;
          text-align: left;
          margin-top: 60px;
          margin-bottom: 10px;
        }
        h1,
        p,
        .home-title :global(.button) {
          z-index: 1;
        }
        p {
          font-size: 2rem;
          margin-bottom: 30px;
        }

        :global(.access-form) {
          padding-top: 60px;
        }

        .hero-wrapper {
          height: 800px;
          margin-top: -200px;
          margin-bottom: -100px;
          position: relative;
        }
        .hero-wrapper:after {
          content: "";
          height: 100px;
          width: 100%;
          left: 0;
          bottom: 0;
          position: absolute;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .form-wrapper {
          padding: 30px 0 60px;
        }

        @media (${breakpoints.md}) {
          h1 {
            font-size: 6.2rem;
            text-align: center;
          }
          p {
            font-size: 2.4rem;
            margin-bottom: 40px;
          }
          .form-wrapper {
            padding: 60px 0 90px;
          }
        }
      `}</style>
    </div>
  );
};

Home.getInitialProps = async () => {
  try {
    const { data } = await axios.get("/json/home.json");
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export default Home;
