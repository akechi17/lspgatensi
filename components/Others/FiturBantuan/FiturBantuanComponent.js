import Image from "next/image";
import styles from "./fiturBantuan.module.css";
import Link from "next/link";

function FiturBantuanComponent() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Pengajuan TUK</h1>
      <div className={styles.optionWrapper}>
        <div className={styles.option}>
          <Image
            src="/images/pengajuanTuk/tukMandiri.png"
            className={styles.imageTop}
            width={600}
            height={600}
            alt="pembentukan tuk mandiri sertifikasi teknik sipil"
          />
          <h2 className={styles.optionTitle}>Syarat Pendirian TUK Mandiri</h2>
          <ol>
            <li>
              Dapat dibentuk oleh BPD Gatensi, BPC Gapensi, dan organisasi atau
              badan usaha.
            </li>
            <li>
              Memiliki 2 (dua) Asesor dalam radius tempat tinggal lingkup
              wilayah Kabupaten/Kota.
            </li>
            <li>
              Mengajukan permohonan pengajuan TUK Mandiri, dengan lampiran
              dokumen berupa:
            </li>
            <ul>
              <li>Surat Permohonan Pengajuan Kerjasama TUK Mandiri</li>
              <li>
                Surat Keputusan Pembentukan Tempat Uji Kompetensi dari BPD
                Gatensi, BPC Gapensi, dan organisasi atau badan usaha
              </li>
              <li>Struktur Organisasi TUK Mandiri</li>
              <li>SOP TUK Mandiri</li>
              <li>Buku Panduan Mutu TUK Mandiri</li>
              <li>Sarana dan Prasarana TUK Mandiri</li>
            </ul>
          </ol>
          <p>
            Setelah melakukan pengajuan TUK Mandiri ke LSP Gatensi Karya
            Konstruksi, kemudian akan diadakan Verifikasi TUK Mandiri secara
            online oleh Tim LSP dan Asesor Lisensi agar dapat diverifikasi
            kesiapan TUK Mandiri
          </p>
          <div className={styles.buttonWrapper}>
            <b>Ajukan TUK Mandiri</b>
            <Link
              className={styles.button}
              target="_blank"
              href="https://api.whatsapp.com/send?phone=6281119082888"
            >
              Kontak Kami
            </Link>
          </div>
        </div>
        <div className={styles.option}>
          <Image
            src="/images/pengajuanTuk/tukSewaktu.png"
            className={styles.imageTop}
            width={600}
            height={600}
            alt="pembentukan tuk sewaktu sertifikasi teknik sipil"
          />
          <h2 className={styles.optionTitle}>Syarat Pendirian TUK Sewaktu</h2>
          <ol>
            <li>
              Isi form online pengajuan TUK Sewaktu LSP Gatensi Karya
              Konstruksi.
            </li>
            <li>
              Penanggung Jawab TUK wajib melampirkan KTP atau tanda pengenal
              lainnya di form online pengajuan.
            </li>
            <li>
              Pastikan ketersediaan sarana dan prasarana pendukung TUK Sewaktu
              sesuai dengan jabatan kerja yang diajukan untuk dilaksanakan uji
              kompetensi.
            </li>
            <li>
              Lampirkan foto-foto sarana dan prasarana mulai dari Gedung, meja
              dan kursi, fasilitas internet serta persyaratan lainnya yang
              tertuang di form pendaftaran
            </li>
          </ol>
          <p>
            Setelah melakukan pengajuan TUK Sewaktu ke LSP Gatensi Karya
            Konstruksi, kemudian akan diadakan Verifikasi TUK Sewaktu secara
            online atau oflline oleh Tim LSP dan Asesor Kompetensi agar dapat
            diverifikasi kesiapan TUK Sewaktu
          </p>
          <div className={styles.buttonWrapper}>
            <b>Ajukan TUK Sewaktu</b>
            <div>
              <Link
                className={styles.button}
                target="_blank"
                href="https://bit.ly/tuksewaktugkk"
              >
                Link Google form
              </Link>
              atau
              <Link
                className={styles.button}
                href="/files/formtuksewaktu.docx"
                download
              >
                Download Form
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="/images/poster/poster-pengajuan-tuk.png"
        />
      </div> */}
    </section>
  );
}

export default FiturBantuanComponent;
