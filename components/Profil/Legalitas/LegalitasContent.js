import styles from "./legalitas.module.css";

function LegalitasContent() {
  const content = [
    {
      title: "Lisensi Lembaga Sertifikasi Badan Usaha",
      image: "lisensi-bnsp.png",
    },
    {
      title: "Legalitas LSP Gatensi Karya Konstruksi",
      image: "sk-ketua-bnsp.png",
    },
    {
      title: "Anggota KADIN",
      image: "kta-kadin.png",
    },
    {
      title: "Nomor Induk Usaha",
      image: "nib-1.png",
    },
  ];

  // const rowDua = [
  //   {
  //     title: "Anggota KADIN",
  //     image: "kta-kadin.png",
  //   },
  //   {
  //     title: "Nomor Induk Usaha",
  //     image: "nib-1.png",
  //   },
  // ];
  return (
    <section className={styles.container}>
      {content.map((item) => (
        <figure className={styles.wrapper}>
          <h4 className={styles.title}>{item.title}</h4>
          <img
            className={styles.image}
            src={`/images/legalitas/${item.image}`}
          />
        </figure>
      ))}
      {/* <div className="row legalitas">
        {rowDua.map((item) => (
          <figure className="coloumn">
            <h4>{item.title}</h4>
            <img src={`/images/legalitas/${item.image}`} />
          </figure>
        ))}
      </div> */}
    </section>
  );
}

export default LegalitasContent;
