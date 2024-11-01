import "../styles/style.scss";
import "../styles/responsive.scss";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";

import App from "next/app";
import Head from "next/head";
import Loader from "../components/Shared/Loader";
import GoTop from "../components/Shared/GoTop";
import WaButton from "../components/Shared/WaButton";
import AuthProvider from "../providers/AuthProvider";
import Footer from "../components/Layouts/Footer/Footer";

import Router from "next/router";
import { initGA, logPageView } from "../lib/ga";

export default class MyApp extends App {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );

    // Initialize Google Analytics if the measurement ID is available
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (measurementId) {
      initGA(measurementId);
      logPageView(window.location.pathname);

      // Track page views on route change
      Router.events.on("routeChangeComplete", logPageView);
    }
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }

    // Remove Google Analytics listener on component unmount
    Router.events.off("routeChangeComplete", logPageView);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <AuthProvider>
          <Component {...pageProps} />

          {/* Preloader */}
          <Loader loading={this.state.loading} />

          {/* Go Top Button */}
          <GoTop scrollStepInPx='50' delayInMs='10.50' />
          <WaButton />
          <Footer />
        </AuthProvider>
      </>
    );
  }
}
