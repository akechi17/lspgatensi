import styles from "./alurSertifikasi.module.css";

function AlurSertifikasiComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/poster/poster-alur-sertifikasi.png"
        />
      </div>
    </section>
  );
}

export default AlurSertifikasiComponent;
