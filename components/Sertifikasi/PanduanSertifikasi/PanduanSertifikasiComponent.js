import styles from "./panduan.module.css";

function PanduanSertifikasiComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/poster/poster-panduan-sertifikasi.png"
        />
      </div>
    </section>
  );
}

export default PanduanSertifikasiComponent;
