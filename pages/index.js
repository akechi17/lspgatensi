import React, { StrictMode } from "react";
import Navbar from "../components/Layouts/Navbar/Navbar";
import DaftarSubklas from "../components/MainPage/DaftarSubklas/DaftarSubklas";
import ComponentCarousel from "../components/MainPage/ComponentCarousel";
// import Customers from "../components/MainPage/Customers/Customers";
import FunFacts from "../components/MainPage/FunFacts/FunFacts";
import Menu from "../components/Layouts/Menu/Menu";
import Head from "next/head";
import { motion } from "framer-motion";
import PreviewBerita from "../components/Berita/PreviewBerita/PreviewBerita";
import Customers from "../components/MainPage/Customers/Customers";
// import { scroll } from "framer-motion";

const Index = () => {
  // const { data, status } = useSession();

  // const emailSession = data.user.email;

  // console.log({ emailSession, status });
  // scroll((progress) => console.log(progress));

  return (
    <StrictMode>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Head>
          <title>Home - LSP Gatensi Karya Konstruksi</title>
          <meta
            name="description"
            content="LSP Gatensi Karya Kontruksi atau LSP GKK adalah Lembaga Sertifikasi Profesi yang menawarkan Sertifikat Kompetensi Kerja (SKK) bidang Teknik Sipil"
            key="desc"
          />
          <meta property="og:title" content="LSP Gatensi Karya Konstruksi" />
          <meta
            property="og:description"
            content="Home - LSP Gatensi Karya Kontruksi atau LSP GKK adalah Lembaga Sertifikasi Profesi yang menawarkan Sertifikat Kompetensi Kerja (SKK) bidang Teknik Sipil"
          />
          <meta property="og:image" content="/images/logo-color.webp" />
        </Head>
        <Navbar />
        {/* <MainBanner /> */}

        <ComponentCarousel />

        <FunFacts />

        {/* <Menu /> */}

        <DaftarSubklas />

        {/* <TentangKamiContent /> */}

        <Customers />
        <Menu />
        <PreviewBerita />
      </motion.div>
    </StrictMode>
  );
};

export default Index;
