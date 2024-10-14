// import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import styles from "./customers.module.css";
// import { motion } from "framer-motion";

function Customers() {
  const customers = [
    "adhi",
    "au",
    "au2",
    "bnsp",
    "bosowa",
    "brantas",
    "bumn",
    "gatensi",
    "its",
    "nindya",
    "pupr",
    "ugm",
    "uho",
    "umim",
    "ung",
    "unhas",
    "uny",
    "waskita",
  ];
  const size = 120;

  return (
    <>
      <section id="partner" className={styles.container}>
        <div className={styles.partnerTitle}>
          <h3 className={styles.captionH3}>LSP GATENSI KARYA KONSTRUKSI</h3>
          <h2 className={styles.captionH2}>BEKERJA SAMA DENGAN</h2>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.logoScroll}>
            <div className={styles.leftToRightt}>
              {customers.map((item, index) => (
                <Image
                  width={size}
                  height={size}
                  src={`/images/logo-kerjasama/${item}.png`}
                  alt={`Logo Kerjasama dengan ${item}`}
                  key={index}
                  className={styles.image}
                />
              ))}
              {customers.map((item, index) => (
                <Image
                  width={size}
                  height={size}
                  src={`/images/logo-kerjasama/${item}.png`}
                  alt={`Logo Kerjasama dengan ${item}`}
                  key={index}
                  className={styles.image}
                />
              ))}
              {customers.map((item, index) => (
                <Image
                  width={size}
                  height={size}
                  src={`/images/logo-kerjasama/${item}.png`}
                  alt={`Logo Kerjasama dengan ${item}`}
                  key={index}
                  className={styles.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customers;
