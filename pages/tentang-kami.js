import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar/Navbar";
import TentangKamiContent from "../components/Profil/TentangKamiContent/TentangKamiContent";
// // import Footer from "../components/Layouts/Footer";
import Head from "next/head";

class TentangKami extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Tentang Kami - LSP Gatensi Karya Konstruksi</title>
        </Head>
        <Navbar />
        <TentangKamiContent />
      </>
    );
  }
}

export default TentangKami;
