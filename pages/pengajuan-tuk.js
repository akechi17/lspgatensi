import FiturBantuanComponent from "../components/Others/FiturBantuan/FiturBantuanComponent";
import Navbar from "../components/Layouts/Navbar/Navbar";
// import Footer from "../components/Layouts/Footer";
import Head from "next/head";

function PengajuanTuk() {
  return (
    <>
      <Head>
        <title>Fitur Bantuan - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <FiturBantuanComponent />
    </>
  );
}

export default PengajuanTuk;
