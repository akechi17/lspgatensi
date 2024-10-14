import React from "react";
import Navbar from "../../components/Layouts/Navbar/Navbar";
import BeritaList from "../../components/Berita/BeritaList/BeritaList";
import styles from "./berita.module.css";
import Head from "next/head";

const Berita = () => {
  return (
    <div>
      <Head>
        <title>Berita Terkini | LSP GKK</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Berita Terkini</h1>

        <BeritaList />
      </div>
    </div>
  );
};

export default Berita;
