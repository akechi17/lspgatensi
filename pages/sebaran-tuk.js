import Navbar from "../components/Layouts/Navbar/Navbar";
import Head from "next/head";
import SebaranTUK from "../components/Others/SebaranTUK/SebaranTuk";

const SebaranTuk = () => {
  return (
    <>
      <Head>
        <title>Sebaran TUK - LSP Gatensi Karya Konstruksi</title>
      </Head>
      <Navbar />
      <SebaranTUK />
    </>
  );
};

export default SebaranTuk;
