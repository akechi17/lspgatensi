import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar/Navbar";
// import Footer from "../components/Layouts/Footer";
import Head from "next/head";
import RuangLingkupComponent from "../components/Sertifikasi/Ruang Lingkup/RuangLingkupComponent";
import Data from "../data/DataRuangLingkup";

const AlurSertifikasi = () => {
  // console.log(Data);
  let subklas = [];
  const subklases = Data.map((items) => items.subklas);
  // console.log(subklases);
  subklases.forEach((item) => {
    if (!subklas.includes(item)) {
      subklas.push(item);
    }
  });
  // console.log(subklas);
  let subs = subklas.join(", ");
  // console.log(subs);

  return (
    <>
      <Head>
        <title>Ruang Lingkup - LSP Gatensi Karya Konstruksi</title>
        <meta
          name="description"
          content={`LSP Gatensi Karya Kontruksi atau LSP GKK adalah Lembaga Sertifikasi Profesi yang menawarkan Sertifikat Kompetensi Kerja (SKK) bidang Teknik Sipil. Diantaranya adalah ${subs}`}
          key="desc"
        />
        <meta property="og:title" content="LSP Gatensi Karya Konstruksi" />
        <meta
          property="og:description"
          content="Ruang Lingkup - LSP Gatensi Karya Kontruksi atau LSP GKK adalah Lembaga Sertifikasi Profesi yang menawarkan Sertifikat Kompetensi Kerja (SKK) bidang Teknik Sipil"
        />
        <meta property="og:image" content="/images/logo-color.webp" />
      </Head>
      <Navbar />
      <RuangLingkupComponent />
    </>
  );
};

export default AlurSertifikasi;
