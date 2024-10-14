import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar/Navbar";
// import ContentJadwalSertifikasi from "../components/Others/ContentJadwalSertifikasi";
// import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import Jadwal from "../components/Others/Jadwal/Jadwal";

class PanduanSertifikasi extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Jadwal - LSP Gatensi Karya Konstruksi</title>
        </Head>
        <Navbar />
        <Jadwal />
      </>
    );
  }
}

export default PanduanSertifikasi;
