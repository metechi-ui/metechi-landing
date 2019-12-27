import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { colors } from "../styles/theme";
import { scrollTo } from "../utils/scrollTo";

import Nav from "../components/Nav";
import Header from "../components/Header";
import AccessForm from "../components/AccessForm";
import FormBackground from "../components/AccessForm/Background";
import Market from "../components/About/Market";
import Team from "../components/About/Team";

const AboutUs = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Metechi - About Us</title>
        <meta https-equiv="Content-type" content="text/html; charset=UTF-8" />
      </Head>

      <Nav light />

      <Header
        title={data.title}
        cta="Learn More"
        image="/images/About/office-space.jpg"
        color={colors.blue}
        onClick={() => scrollTo(document.querySelector(".about-market"))}
      />

      <Market data={data} />

      <Team data={data} />

      <FormBackground>
        <AccessForm />
      </FormBackground>
    </div>
  );
};

AboutUs.getInitialProps = async () => {
  const res = await fetch("https://about.metechi.com/about.json", {
    credentials: "include"
  });
  const data = await res.json();
  return { data };
};

export default AboutUs;
