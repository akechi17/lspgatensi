import Link from "next/link";
import styles from "./table.module.css";

export const RuangLingkupTable = (props) => {
  // console.log(props.data[0].link);
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.headCell}>No</th>
          <th className={styles.headCell}>Jabatan Kerja</th>
          <th className={styles.headCell}>Jenjang</th>
          <th className={styles.headCell}>SKKNI</th>
          <th className={styles.headCell}>Skema</th>
          <th className={styles.headCell}>Subklas</th>
          <th className={`${styles.headCell} ${styles.skema}`}>Skema</th>
        </tr>
      </thead>
      <tbody>
        {props.data.length == 0 ? (
          <tr style={{ padding: "30px", minWidth: "70%" }}>
            <td colSpan="12" style={{ textAlign: "center" }}>
              <h2 style={{ padding: "20px" }}>NoData</h2>
            </td>
          </tr>
        ) : (
          props.data.map((items) => (
            <tr key={items.no} className={styles.cell}>
              <td className={`${styles.rowCell} ${styles.centerItem}`}>
                {items.no}
              </td>
              <td className={styles.rowCell}>{items["nama-skema"]}</td>
              <td className={`${styles.rowCell} ${styles.centerItem}`}>
                {items.jenjang}
              </td>
              <td className={`${styles.rowCell} ${styles.centerItem}`}>
                {items["acuan-skkni"]}
              </td>
              <td className={`${styles.rowCell} ${styles.centerItem}`}>
                {items["skema-sertifikasi"]}
              </td>
              <td
                className={`${styles.rowCell} ${styles.centerItem} ${styles.subklas}`}
              >
                {items.subklas}
              </td>
              <td
                className={`${styles.rowCell} ${styles.centerItem} ${styles.skema}`}
              >
                {items.link && (
                  <Link
                    href={items.link}
                    target="_blank"
                    className={styles.link}
                  >
                    Lihat
                  </Link>
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
