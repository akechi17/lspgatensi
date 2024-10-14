import styles from "./tentangKami.module.css";

const TentangKamiContent = () => {
  const tentangKamiArray = [
    {
      title: "Skema",
      image: "/images/tentang lsp/tentang-lsp-2.png",
      desc: "Sesuai dengan kebijakan yang mengatur mengenai batasan lingkup kompetensi kerja yang dapat ditangani, maka layanan LSP GKK ada dalam bidang jasa konstruksi klasifikasi Sipil dengan 228 Skema Jabatan Kerja dan 19 Sub Klasifikasi.",
    },
    {
      title: "Tempat Uji",
      image: "/images/tentang lsp/tentang-lsp-3.png",
      desc: "Tempat Uji Sertifikasi Kompetensi Kerja LSP GKK tersedia di beberapa daerah provinsi se Indonesia, bekerjasama dengan Badan Pengurus Daerah GAPENSI & GATENSI, Mitra TUK Mandiri, Dinas Pemerintahan, serta Perusahaan Negeri & Swasta.",
    },
    {
      title: "Pelayanan",
      image: "/images/tentang lsp/tentang-lsp-4.png",
      desc: "Pelayanan sertifikasi oleh admin resmi LSP GKK terpercaya, melayani kebutuhan SKK para profesional di bidang konstruksi dengan kualifikasi dan kompetensi yang sesuai dengan standar yang telah ditetapkan.",
    },
  ];

  return (
    <section className={styles.container}>
      {/* <div className="row legalitas"> */}
      <div className={styles.about}>
        <div>
          <h1 className={styles.title}>Tentang LSP GKK</h1>
          <p className={styles.caption}>
            LSP Gatensi Karya Konstruksi (GKK) adalah Lembaga Sertifikasi
            Profesi yang dibentuk oleh Gabungan Ahli Teknik Nasional Indonesia
            (GATENSI) pada 7 Januari 2021.
            <br />
            <br />
            Tujuan pembentukan LSP GKK adalah untuk ikut berperan serta dalam
            program pemerintah terkait pembinaan dan pengembangan kompetensi
            tenaga ahli yang kompeten, profesional dan berintegritas dengan
            profesinya sebagai pemegang Sertifikat Profesi Tenaga Konstruksi.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/tentang lsp/tentang-lsp-1.png" />
        </div>
      </div>
      <div className={styles.aboutThreeContainer}>
        {tentangKamiArray.map((item, index) => (
          <div className={styles.aboutContainer} key={index}>
            <h1 className={styles.titleLow}>{item.title}</h1>
            <div className={styles.smallImgContainer}>
              <img src={item.image} className={styles.smallImg} />
            </div>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TentangKamiContent;
