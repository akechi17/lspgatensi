import Link from "next/link";
import Beritas from "../../../data/DataBerita";
import styles from "./beritaList.module.css";

const BeritaList = () => {
  //   console.log(Beritas);
  return (
    <div className={styles.wrapper}>
      {Beritas.map((item, index) => (
        <div className={styles.card} key={index}>
          {/* <div className={styles.imageWrapper}> */}
          <img className={styles.image} src={item.imageUrl} />
          {/* </div> */}

          <div className={styles.texts}>
            <span className={styles.date}>{item.date}</span>
            <Link href={`/berita/${item.title}`}>
              <h2 className={styles.title}>{item.title}</h2>
            </Link>
            <div
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
            <Link className={styles.linkTo} href={`/berita/${item.title}`}>
              Baca Selengkapnya...
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeritaList;
