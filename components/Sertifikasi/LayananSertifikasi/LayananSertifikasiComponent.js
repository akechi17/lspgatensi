import styles from "./layanan.module.css";

function LayananSertifikasiComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/poster/poster-layanan-sertifikasi.png"
        />
      </div>
    </section>
  );
}

export default LayananSertifikasiComponent;
