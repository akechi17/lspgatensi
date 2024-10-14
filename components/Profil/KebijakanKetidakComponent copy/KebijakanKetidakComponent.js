import styles from "./kebijakanKetidak.module.css";

function KebijakanKetidakComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/poster/poster-kebijakan-ketidakberpihakan.png"
        />
      </div>
    </section>
  );
}

export default KebijakanKetidakComponent;
