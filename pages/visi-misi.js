import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar/Navbar";
// // import Footer from "../components/Layouts/Footer";
import VisiMisiComponent from "../components/Profil/VisiMisi/VisiMisiComponent";
import Head from "next/head";

class visiMisi extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Visi Misi - LSP Gatensi Karya Konstruksi</title>
        </Head>
        <Navbar />
        <VisiMisiComponent />
      </>
    );
  }
}

export default visiMisi;
