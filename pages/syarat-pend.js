import Head from "next/head";
import Navbar from "../components/Layouts/Navbar/Navbar";
// import Footer from "../components/Layouts/Footer";
import PersyaratanPendidikanComponent from "../components/Sertifikasi/PersyaratanPendidikanComponent/PersyaratanPendidikanComponent";

function syaratBanding() {
  return (
    <>
      <Head>
        <title>Persyaratan Pendidikan | LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <PersyaratanPendidikanComponent />
    </>
  );
}

export default syaratBanding;
