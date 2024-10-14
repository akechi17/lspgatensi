import Navbar from "../components/Layouts/Navbar/Navbar";
import BiayaComponent from "../components/Biaya/BiayaComponent";
import Head from "next/head";

const Biaya = () => {
  return (
    <>
      <Head>
        <title>Biaya SKK Sipil - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <BiayaComponent />
    </>
  );
};

export default Biaya;
