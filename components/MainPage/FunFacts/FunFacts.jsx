import FunFactsNumber from "./FunFactsNumber";
import { motion } from "framer-motion";
import styles from "./funFacts.module.css";

export default function FunFacts() {
  const limits = [
    { nama: "Asesor", quantity: 468 },
    { nama: "TUK Mandiri", quantity: 30 },
    { nama: "TUK Sewaktu", quantity: 211 },
    { nama: "Sertifikat Tercetak", quantity: 25800 },
  ];

  return (
    <section className={styles.funFactsArea}>
      {limits.map((item, index) => (
        <motion.div
          className={styles.angkaFunFacts}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={index}
        >
          <div className={styles.singleFunFacts}>
            <div className={styles.inline}>
              <FunFactsNumber limit={item.quantity} />
              <p>+</p>
            </div>
            <p className={styles.caption}>{item.nama}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
