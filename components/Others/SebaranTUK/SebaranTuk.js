import styles from "./sebaran.module.css";

function SebaranTUK() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Sebaran TUK</h1>
        <h5>LSP Gatensi Karya Konstruksi</h5>
      </div>
      <div className={styles.contentWrapper}>
        <img
          className={styles.content}
          src="/images/poster/poster-sebaran-tuk.png"
        />
      </div>
    </section>
  );
}

export default SebaranTUK;
