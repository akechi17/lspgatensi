import LegalitasContent from "../components/Profil/Legalitas/LegalitasContent";
import Navbar from "../components/Layouts/Navbar/Navbar";
import Head from "next/head";

const Legalitas = () => {
  return (
    <>
      <Head>
        <title>Legalitas - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <LegalitasContent />
    </>
  );
};

export default Legalitas;
