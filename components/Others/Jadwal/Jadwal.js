import styles from "./jadwal.module.css";

const Jadwal = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Jadwal Uji SKK</h1>
        <h5>
          Jadwal Kegiatan Sertifikasi LSP Gatensi Karya Konstruksi di Seluruh
          Indonesia
        </h5>
      </div>
      <div className={styles.contentWrapper}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&showTitle=0&showPrint=0&src=Z2F0ZW5zaWthcnlha29uc3RydWtzaUBnbWFpbC5jb20&color=%23039BE5"
          frameborder="0"
          className={styles.content}
        ></iframe>
      </div>
    </section>
  );
};

export default Jadwal;
