import styles from "./strukturOrganisasi.module.css";

const StrukturOrganisasiContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          // src="/images/poster/poster-struktur-organisasi.png"
          src="/images/poster/struktur-organisasi.jpg"
        />
      </div>
    </section>
  );
};

export default StrukturOrganisasiContent;
