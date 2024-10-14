import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./menu.module.css";

function Menu() {
  const menu = [
    { nama: "JADWAL UJI", icon: "jadwal", link: "jadwal" },
    { nama: "WILAYAH TUK", icon: "wilayah-tuk", link: "list-tuk" },
    { nama: "SEBARAN TUK", icon: "sebaran-tuk", link: "sebaran-tuk" },
  ];

  return (
    <motion.section
      className={styles.menuContainer}
      style={{ position: "relative" }}
    >
      {menu.map((item) => (
        <Link href={`/${item.link}`} key={item.nama} className={styles.daMenu}>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            whileInView={{ y: 1 }}
          >
            <div className={styles.card}>
              <div className={styles.cardBody}>
                <img
                  className={styles.image}
                  src={`images/menu-icons/${item.icon}.svg`}
                />
                <h5 className={styles.menuCaption}>{item.nama}</h5>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.section>
  );
}

export default Menu;
