// pages/api/getData.js

import balaidb from "../../../lib/regulerdb";

export default async (req, res) => {
  // Example query to fetch data
  const query =
    // "SELECT id_izin, nama, nomor_registrasi_lpjk, link_e_sertifikat, tanggal_ditetapkan FROM data_pencatatans WHERE id_izin IS NOT NULL AND id_izin <> '' ORDER BY tanggal_ditetapkan DESC;";
    "SELECT nik, id_izin, nama, created FROM personals ORDER BY created DESC; ";
  // "SELECT nik, id_izin, nama , created FROM personals WHERE YEAR(created) = YEAR(CURDATE() - INTERVAL 1 MONTH) AND MONTH(created) = MONTH(CURDATE() - INTERVAL 1 MONTH); ";

  balaidb.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error connecting to database" });
      return;
    }

    res.status(200).json(results);
  });
};
