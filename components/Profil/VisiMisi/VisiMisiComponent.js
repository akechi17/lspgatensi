import styles from "./visiMisi.module.css";

function VisiMisiComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/poster/poster-visi-misi.png"
        />
      </div>
    </section>
  );
}

export default VisiMisiComponent;
