import React from "react";
import PesertaComponent from "../components/Sertifikasi/Peserta/PesertaComponent";
import Navbar from "../components/Layouts/Navbar/Navbar";
import Head from "next/head";

const PesertaPage = () => {
  return (
    <>
      <Head>
        <title>Data Pemohon | LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <PesertaComponent />
    </>
  );
};

export default PesertaPage;
