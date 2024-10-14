import Navbar from "../components/Layouts/Navbar/Navbar";
import AlurSertifikasiComponent from "../components/Sertifikasi/AlurSertifikasi/AlurSertifikasiComponent";
import Head from "next/head";

const AlurSertifikasi = () => {
  return (
    <>
      <Head>
        <title>Alur Sertifikasi - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <AlurSertifikasiComponent />
    </>
  );
};

export default AlurSertifikasi;
