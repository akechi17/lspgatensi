import Link from "next/link";
import styles from "./biaya.module.css";

function BiayaComponent() {
  const luring = [
    {
      jenjang: "9",
      biaya: "Rp. 3.500.000",
    },
    {
      jenjang: "8",
      biaya: "Rp. 2.500.000",
    },
    {
      jenjang: "7",
      biaya: "Rp. 1.500.000",
    },
    {
      jenjang: "7 (Fresh Graduate)",
      biaya: "Rp. 700.000",
    },
    {
      jenjang: "6",
      biaya: "Rp. 1.000.000",
    },
    {
      jenjang: "5",
      biaya: "Rp. 900.000",
    },
    {
      jenjang: "4",
      biaya: "Rp. 800.000",
    },
    {
      jenjang: "3",
      biaya: "Rp. 700.000",
    },
    {
      jenjang: "2",
      biaya: "Rp. 600.000",
    },
    {
      jenjang: "1",
      biaya: "Rp. 500.000",
    },
  ];
  const onsite = [
    {
      jenjang: "9",
      biaya: "-",
    },
    {
      jenjang: "8",
      biaya: "-",
    },
    {
      jenjang: "7",
      biaya: "-",
    },
    {
      jenjang: "7 (Fresh Graduate)",
      biaya: "-",
    },
    {
      jenjang: "6",
      biaya: "Rp. 325.000",
    },
    {
      jenjang: "5",
      biaya: "Rp. 325.000",
    },
    {
      jenjang: "4",
      biaya: "Rp. 325.000",
    },
    {
      jenjang: "3",
      biaya: "Rp. 250.000",
    },
    {
      jenjang: "2",
      biaya: "Rp. 250.000",
    },
    {
      jenjang: "1",
      biaya: "Rp. 250.000",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Rincian Biaya Sertifikasi Kompetensi Konstruksi</h2>
        <p>
          Rincian biaya mengacu kepada ketentuan
          <b> Kementerian Pekerjaan Umum dan Perumahan Rakyat</b>
        </p>
      </div>
      <div className={styles.containerBiaya}>
        <div className={styles.biayasContainer}>
          <h3 className={styles.biayaTitle}>Luring</h3>
          <table className={styles.table}>
            <tbody className={styles.biayas}>
              {luring.map((item) => (
                <tr className={styles.biayaRow}>
                  <td className={styles.jenjang} key={item}>
                    Jenjang {item.jenjang}
                  </td>
                  <td className={styles.biaya}>{item.biaya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.biayasContainer}>
          <h3 className={styles.biayaTitle}>Onsite</h3>
          <table className={styles.table}>
            <tbody className={styles.biayas}>
              {onsite.map((item) => (
                <tr className={styles.biayaRow}>
                  <td className={styles.jenjang} key={item}>
                    Jenjang {item.jenjang}
                  </td>
                  <td className={styles.biaya}>{item.biaya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Link
          href="https://api.whatsapp.com/send?phone=6281119082888"
          target="_blank"
          className={styles.button}
        >
          AJUKAN SKK
        </Link>
      </div>
    </section>
  );
}

export default BiayaComponent;
