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

export default class MyApp extends App {
  // Preloader
  state = {
    loading: true,
  };
  componentDidMount() {
    this.timerHandle = setTimeout(
      () => this.setState({ loading: false }),
      2000
    );
  }
  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta
            name="description"
            content="LSP Gatensi Karya Konstruksi, LSP Konstruksi Lembaga Sertifikasi Profesi GATENSI gatensi GAPENSI gapensi Konstruksi organisasi asosiasi konstruksi gabungan tenaga ahli konstruksi nasional sipil sertifikasi profesi sertifikat bnsp portal perizinan pu pupr badan nasional sertifikasi profesi"
          />
          <title>LSP Gatensi Karya Konstruksi</title> */}
        </Head>
        <AuthProvider>
          <Component {...pageProps} />

          {/* Preloader */}
          <Loader loading={this.state.loading} />

          {/* Go Top Button */}
          <GoTop scrollStepInPx="50" delayInMs="10.50" />
          <WaButton />
          <Footer />
        </AuthProvider>
      </>
    );
  }
}
