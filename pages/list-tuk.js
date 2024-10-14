import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar/Navbar";
// import Footer from "../components/Layouts/Footer";
import TUK from "../components/Tuk/TUK";
import Head from "next/head";

class Services extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Daftar TUK - LSP Gatensi Karya Konstruksi</title>
        </Head>
        <Navbar />
        <TUK />
      </>
    );
  }
}

export default Services;
