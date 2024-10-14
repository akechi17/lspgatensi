import React from "react";
import AsesorComponent from "../components/Sertifikasi/DataAsesor/AsesorComponent";
import Navbar from "../components/Layouts/Navbar/Navbar";
import Head from "next/head";
// import Footer from "../components/Layouts/Footer";
// import AsesorMETComponent from "../components/Sertifikasi/DataAsesor/AsesorMETComponent";

const dataAsesor = () => {
  return (
    <>
      <Head>
        <title>Daftar Asesor - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      {/* <AsesorMETComponent /> */}
      <AsesorComponent />
    </>
  );
};

export default dataAsesor;
