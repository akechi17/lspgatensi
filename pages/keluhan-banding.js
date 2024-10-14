import Head from "next/head";
import Navbar from "../components/Layouts/Navbar/Navbar";
// import Footer from "../components/Layouts/Footer";
import BandingComponent from "../components/Sertifikasi/Banding/BandingComponent";

function syaratBanding() {
  return (
    <>
      <Head>
        <title>Keluhan & Banding | LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <BandingComponent />
    </>
  );
}

export default syaratBanding;
