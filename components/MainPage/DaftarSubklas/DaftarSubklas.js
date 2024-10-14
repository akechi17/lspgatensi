import Link from "next/link";
import styles from "./daftarSubklas.module.css";

const DaftarSubklas = () => {
  const jabker = [
    { nama: "Gedung", icon: "gedung" },
    { nama: "Material", icon: "material" },
    { nama: "Jalan", icon: "jalan" },
    { nama: "Jembatan", icon: "jembatan" },
    { nama: "Bendung dan Bendungan", icon: "bendung bendungan" },
    { nama: "Irigasi dan Rawa", icon: "irigasi rawa" },
    { nama: "Sungai dan Pantai", icon: "sungai pantai" },
    { nama: "Air Tanah dan Air Baku", icon: "air tanah air baku" },
    { nama: "Bangunan Air Minum", icon: "bangunan air minum" },
    { nama: "Drainase Perkotaan", icon: "drainase perkotaan" },
    { nama: "Bangunan Persampahan", icon: "bangunan persampahan" },
    { nama: "Bangunan Air Limbah", icon: "bangunan air limbah" },
    { nama: "Geoteknik dan Pondasi", icon: "geoteknik pondasi" },
    { nama: "Jalan Rel", icon: "jalan rel" },
    { nama: "Geodesi", icon: "geodesi" },
    { nama: "Grouting", icon: "grouting" },
    { nama: "Terowongan", icon: "terowongan" },
    { nama: "Bangunan Pelabuhan", icon: "bangunan pelabuhan" },
    { nama: "Pembongkaran Bangunan", icon: "pembongkaran bangunan" },
  ];

  return (
    <section className={styles.servicesSection}>
      {/* <div className="section-title"> */}
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>
          <span style={{ fontSize: "15px" }}>LSP Gatensi Karya Konstruksi</span>
          <br />
          LAYANAN KAMI
          <br />
          {/* <span>Daftar Subklasifikasi Sipil</span> */}
        </h2>
        <div className={styles.seperateDesc}>
          <p className={styles.caption}>
            LSP Gatensi Karya Konstruksi saat ini dapat melayani permohonan
            Sertifikasi Kompetensi Kerja untuk{" "}
            <b className={styles.boldCaption}>
              228 Jabatan Kerja dalam 19 Subklasifikasi Sipil
            </b>
            .
          </p>
          <p className={styles.lowerCaption}>
            {/* Daftar Subklasifikasi Sipil */}
          </p>
        </div>
      </div>

      <div className={`row ${styles.jabker}`}>
        {jabker.map((item, index) => (
          <Link href="/ruang-lingkup" key={index}>
            <div className={`${styles.singleServicesBox} `}>
              <div className={styles.text}>
                <h3 className={styles.jabkerTitle}>{item.nama}</h3>
                <div className={styles.serviceBtn}>
                  Jabatan Kerja
                  <i className="flaticon-right"></i>
                </div>
              </div>
              <img
                className={styles.image}
                src={`images/icon jabker/${item.icon}.png`}
                width={30}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DaftarSubklas;
