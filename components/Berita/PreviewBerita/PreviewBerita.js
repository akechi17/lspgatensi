import Link from "next/link";
import Beritas from "../../../data/DataBerita";
import styles from "./previewBerita.module.css";

const PreviewBerita = () => {
  const berita = Beritas.slice(0, 6);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>BERITA TERBARU</h2>
          <h3>LSP Gatensi Karya Konstruksi</h3>
        </div>
        <div className={styles.beritas}>
          {berita.map((item, index) => (
            <Link
              href={`/berita/${item.title}`}
              className={styles.berita}
              key={index}
            >
              <img src={item.imageUrl} alt={item.title} />
              <div className={styles.caption}>
                <h4>{item.title}</h4>
                <p>By Admin | {item.date}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link className={styles.link} href="/berita">
          Berita Lainnya
        </Link>
      </div>
    </section>
  );
};

export default PreviewBerita;
