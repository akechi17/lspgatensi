import { motion, useScroll } from "framer-motion";
import styles from "./contentBerita.module.css";
import Image from "next/image";
import { FacebookShare, LinkedinShare, TwitterShare } from "react-share-kit";

const ContentBerita = ({ date, title, content, image }) => {
  const { scrollYProgress } = useScroll();

  const titleToLink = (value) => {
    return value.split(" ").join("%20");
  };

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <article className="pricing-area pt-100 pb-70">
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.date}>{date}</div>
            <h1 className={styles.title}>{title}</h1>
          </div>

          <Image
            className={styles.image}
            src={image}
            alt={title}
            height={700}
            width={800}
          />
        </div>
        <div className={`section-title ${styles.berita}`}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className={styles.shareLinksWrapper}>
          <h2 className={styles.shareLinksTitle}>Share</h2>
          <div className={styles.shareLinks}>
            <FacebookShare
              url={`https://lspgatensi.id/berita/${title}`}
              quote={title}
              hashtag="#KonstruksiSipil"
              size={"50px"}
            />

            <TwitterShare
              url={`https://lspgatensi.id/berita/${titleToLink(title)}`}
              title={title}
              size={"50px"}
            />

            <LinkedinShare
              url={`https://lspgatensi.id/berita/${title}`}
              size={"50px"}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default ContentBerita;
