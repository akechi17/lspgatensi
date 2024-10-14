import styles from "./persyPend.module.css";

function PersyaratanPendidikanComponent() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Persyaratan Pendidikan</h1>
      <div className={styles.contentWrapper}>
        <iframe
          className={styles.content}
          src="/files/persyaratan-pendidikan.pdf"
        />
      </div>
    </section>
  );
}

export default PersyaratanPendidikanComponent;
