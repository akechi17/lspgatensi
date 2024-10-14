import Link from "next/link";
import styles from "./banding.module.css";

function BandingComponent() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Keluhan & Banding</h1>
      <h1 className={styles.title}>Kantor Kami</h1>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.315425095936!2d106.8298607!3d-6.2862144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2107e4f123b%3A0x9c07f514a8d9694b!2sGraha%20Gapensi!5e0!3m2!1sen!2sid!4v1702978175850!5m2!1sen!2sid"
          width="600"
          height="450"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ margin: "auto" }}
        ></iframe>
      </div>
      <div className={styles.linkKeluhan}>
        <Link
          href="https://forms.gle/hYc9Wk3p7cZLrc4V7"
          target="_blank"
          className={styles.button}
        >
          AJUKAN KELUHAN
        </Link>
      </div>

      <div className={styles.isiBanding}>
        <h1 className={styles.title}>Syarat Banding</h1>
        <div className={styles.containerIsi}>
          <h2>Administrasi :</h2>
          <ul>
            <li>
              Mengajukan permohonan banding ke LSP GKK dan akan didisposisikan
              kepada komite banding dengan menggunakan FR.AK.04 paling lambat
              1x24 jam kerja sejak keputusan ditetapkan
            </li>
            <li>Mengirimkan gugatan banding ke : Manajer Sertifikasi</li>
            <li>TKK mengajukan banding melalui Web LSP GKK</li>
            <li>
              Penyelesaian banding dijawab paling lambat 7 (tujuh) hari kerja
              setelah dokumen lengkap
            </li>
          </ul>
        </div>
        <div className={styles.containerIsi}>
          <h2>Kelengkapan Dokumen :</h2>
          <ul>
            <li>TKK menyampaikan dengan surat resmi, ditandatangani</li>
            <li>
              Menyampaikan pengajuan banding yang berisi:
              <ul>
                <li>Keputusan LSP GKK yang di gugat banding;</li>
                <li>
                  Uraian kronologis atas anggapan penyimpangan yang dilakukan
                  LSP GKK;
                </li>
                <li>
                  Sebutkan pasal-pasal dalam peraturan, prosedur atau instruksi
                  kerja yang dianggap menyimpang, dalam penerapannya; dan
                </li>
                <li>
                  Bukti fisik yang dapat dipakai untuk mendukung alasan banding;
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <br />
        <div className={styles.link}>
          <Link
            href="https://forms.gle/W7PRjK9vB1vTNQvr8"
            target="_blank"
            className={styles.button}
          >
            AJUKAN BANDING
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BandingComponent;
