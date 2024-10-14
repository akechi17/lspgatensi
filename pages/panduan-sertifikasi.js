import Navbar from "../components/Layouts/Navbar/Navbar";
import PanduanSertifikasiComponent from "../components/Sertifikasi/PanduanSertifikasi/PanduanSertifikasiComponent";
import Head from "next/head";

const PanduanSertifikasi = () => {
  return (
    <>
      <Head>
        <title>Panduan Sertifikasi - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <PanduanSertifikasiComponent />
    </>
  );
};

export default PanduanSertifikasi;
