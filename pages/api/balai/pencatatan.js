// pages/api/getData.js

import balaidb from "../../../lib/balaidb";

export default async (req, res) => {
  // Example query to fetch data
  const query =
    "SELECT id_izin, nama, nomor_registrasi_lpjk, link_e_sertifikat, tanggal_ditetapkan FROM data_pencatatans WHERE id_izin IS NOT NULL AND id_izin <> '' ORDER BY tanggal_ditetapkan DESC;";

  balaidb.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error connecting to database" });
      return;
    }

    res.status(200).json(results);
  });
};
