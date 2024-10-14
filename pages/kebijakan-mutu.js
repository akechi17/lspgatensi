import Navbar from "../components/Layouts/Navbar/Navbar";
import KebijakanMutuComponent from "../components/Profil/KebijakanMutuComponent/KebijakanMutuComponent";
import Head from "next/head";

const KebijakanMutu = () => {
  return (
    <>
      <Head>
        <title>Kebijakan Mutu - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <KebijakanMutuComponent />
    </>
  );
};

export default KebijakanMutu;
