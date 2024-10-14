import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar/Navbar";
// import Footer from "../components/Layouts/Footer";
import StrukturOrganisasiContent from "../components/Profil/StrukturOrganisasi/StrukturOrganisasiContent";
import Head from "next/head";

class StrukturOrganisasi extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Struktur Organisasi - LSP Gatensi Karya Konstruksi</title>
        </Head>
        <Navbar />
        <StrukturOrganisasiContent />
      </>
    );
  }
}

export default StrukturOrganisasi;
