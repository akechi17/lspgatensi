import Navbar from "../components/Layouts/Navbar/Navbar";
import KebijakanKetidakComponent from "../components/Profil/KebijakanKetidakComponent copy/KebijakanKetidakComponent";
import Head from "next/head";

const KebijakanKetidakberpihakkan = () => {
  return (
    <>
      <Head>
        <title>
          Kebijakan Ketidakberpihakan - LSP Gatensi Karya Konstruksi
        </title>
      </Head>
      <Navbar />
      <KebijakanKetidakComponent />
    </>
  );
};

export default KebijakanKetidakberpihakkan;
