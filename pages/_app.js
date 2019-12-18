import React from "react";
import Router from "next/router";
import { ModalProvider } from "../context/ModalContext";

import App from "next/app";
import Page from "../layout/Page";
import PageAnimation from "../components/PageAnimation";
import Modal from "../components/Modal";
import { Mixpanel } from "../analytics/Mixpanel";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    Mixpanel.init();

    Router.events.on("routeChangeStart", url => {
      Mixpanel.track("Navigation", { page: url });
      this.setState({
        loading: true
      });
    });
    Router.events.on("routeChangeComplete", () => {
      this.setState({
        loading: false
      });
    });
    Router.events.on("routeChangeError", () => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { loading } = this.state;

    return (
      <ModalProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
        <PageAnimation loading={loading} />
        <Modal />
      </ModalProvider>
    );
  }
}

export default MyApp;
