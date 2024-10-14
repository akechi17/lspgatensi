import Link from "next/link";
import ProfilNav from "../Navbar/ProfileNavMenu";
import SertifikasiNav from "../Navbar/SertifikasiNavMenu";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footerBox}>
        <div className={styles.roww}>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>Profil Kami</h3>
            {ProfilNav.map((item, index) => (
              <Link href={item.link} key={index}>
                <p className={styles.details}>{item.title}</p>
              </Link>
            ))}
          </div>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>Sertifikasi</h3>
            {SertifikasiNav.map((item, index) => (
              <Link href={item.link} key={index}>
                <p className={styles.details}>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.roww}>
          <div className={styles.column}>
            <h3 className={styles.subtitle}>Kontak Kami</h3>
            <p className={styles.details}>Email</p>
            <Link href="mailto:rindadwi@lspgatensi.id">
              <p>rindadwi@lspgatensi.id</p>
            </Link>
            <Link href="mailto:cs@lspgatensi.id">
              <p>cs@lspgatensi.id</p>
            </Link>
            <p className={styles.subtitle}>Telepon / WA</p>
            <Link href="https://api.whatsapp.com/send?phone=6281119082888">
              <p className={styles.details}>+62811 1908 2888 (WA)</p>
            </Link>
            <div className={styles.medSos}>
              <h3 className={styles.subtitle}>Media Sosial</h3>
              <div className={styles.mediaIcon}>
                <Link
                  href="https://www.instagram.com/lspgatensi"
                  target="_blank"
                  className={styles.link}
                >
                  <i className="fab fa-instagram" /> Instagram
                </Link>
                <Link
                  href="https://www.linkedin.com/company/pt-lsp-gatensi-karya-konstruksi/mycompany/"
                  target="_blank"
                  className={styles.link}
                >
                  <i className="fab fa-linkedin" /> LinkedIn
                </Link>
                <Link
                  href="https://web.facebook.com/profile.php?id=100086749051589"
                  target="_blank"
                  className={styles.link}
                >
                  <i className="fab fa-facebook" /> FaceBook
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.alamat}>
              <h3 className={styles.subtitle}>Alamat Kantor</h3>
              {/* <p className={styles.details}>
                PT. Lembaga Sertifikasi Profesi Gatensi Karya Konstruksi
              </p>
              <Link
                href="https://www.google.com/maps/place/Graha+Gapensi/@-6.2862144,106.8272858,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f2107e4f123b:0x9c07f514a8d9694b!8m2!3d-6.2862144!4d106.8298607!16s%2Fg%2F1yfjlrts1?entry=ttu"
                target="_blank"
              > */}
              <p className={styles.details}>
                Graha Gapensi - Jl. Raya Ragunan No. C-1, Jati Padang Pasar
                Minggu Jakarta
              </p>
              {/* </Link> */}
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.315425095936!2d106.8298607!3d-6.2862144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2107e4f123b%3A0x9c07f514a8d9694b!2sGraha%20Gapensi!5e0!3m2!1sen!2sid!4v1702978175850!5m2!1sen!2sid"
                  width="280"
                  height="200"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{ margin: "auto" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        &copy; 2023 PT. LSP Gatensi Karya Konstruksi - All Rights Reserved
      </div>
    </>
  );
}
