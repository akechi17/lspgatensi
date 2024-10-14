import Navbar from "../components/Layouts/Navbar/Navbar";
import LayananSertifikasiComponent from "../components/Sertifikasi/LayananSertifikasi/LayananSertifikasiComponent";
import Head from "next/head";

const LayananSertifikasi = () => {
  return (
    <>
      <Head>
        <title>Layanan Sertifikasi - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <LayananSertifikasiComponent />
    </>
  );
};

export default LayananSertifikasi;
