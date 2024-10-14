import styles from "./kebijakanMutu.module.css";

function KebijakanMutuComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/poster/poster-kebijakan-mutu.png"
        />
      </div>
    </section>
  );
}

export default KebijakanMutuComponent;
