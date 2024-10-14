import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Layouts/Navbar/Navbar";
import berita from "../../../data/DataBerita";
import { useRouter } from "next/router";
import ContentBerita from "../../../components/Berita/ContentBerita/ContentBerita";
import Head from "next/head";

// export async function generateMetadata() {
//   return {
//     title: "a",
//     description: "a",
//   };
// }
const SingleBerita = () => {
  // console.log(slug);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  // console.log(router.query.slug.includes(" "));
  useEffect(() => {
    try {
      let slug = router.query.slug;
      if (!slug.includes(" ")) {
        slug = router.query.slug.split("%20").join(" ");
      }
      const beritaThis = berita.find((items) => items.title.includes(slug));
      setData(beritaThis);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  });

  if (loading) {
    return (
      <>
        <Head>
          <meta
            name="description"
            content="LSP Gatensi Karya Konstruksi, LSP Konstruksi Lembaga Sertifikasi Profesi GATENSI gatensi GAPENSI gapensi Konstruksi organisasi asosiasi konstruksi gabungan tenaga ahli konstruksi nasional sipil sertifikasi profesi sertifikat bnsp portal perizinan pu pupr badan nasional sertifikasi profesi"
          />
          <title>LSP Gatensi Karya Konstruksi</title>
        </Head>
        <p>Loading</p>;
      </>
    );
  }
  return (
    <>
      {data && (
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.title} />
        </Head>
      )}
      <Navbar />
      {data && (
        <ContentBerita
          date={data.date}
          title={data.title}
          content={data.content}
          image={data.imageUrl}
        />
      )}
    </>
  );
};

export default SingleBerita;
