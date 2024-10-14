// pages/api/getPemohon.js

// import regulerdb from "../../../lib/regulerdb";
import balaidb from "../../../lib/balaidb";
import mygatensidb from "../../../lib/mygatensidb";

export default async (req, res) => {
  const nik = req.headers.nik;
  const mygatensiQuery = `SELECT mypersonal.NIK, mypersonal.ID_IjinPersonal, mypersonal.Nama, myklasifikasikualifikasi.jabatan_kerja, myklasifikasikualifikasi.Created FROM mypersonal JOIN myklasifikasikualifikasi ON myklasifikasikualifikasi.ID_Ijinklasifikasikualifikasi = mypersonal.ID_IjinPersonal WHERE mypersonal.NIK = ${nik};`;
  // const regulerQuery = `SELECT nik, id_izin, nama, created FROM personals WHERE nik = ${nik};`;
  const balaiQuery = `SELECT nik, id_izin, nama, created FROM personals WHERE nik = ${nik};`;

  mygatensidb.query(mygatensiQuery, (mygatensiErr, mygatensiResults) => {
    if (mygatensiErr) {
      console.error(mygatensiErr);
      res.status(500).json({ error: "Error to connect to RegulerDB" });
      return;
    }
    // regulerdb.query(regulerQuery, (regulerErr, regulerResults) => {
    //   if (regulerErr) {
    //     console.error(regulerErr);
    //     res.status(500).json({ error: "Error to connect to RegulerDB" });
    //     return;
    //   }
    balaidb.query(balaiQuery, (balaiErr, balaiResults) => {
      if (balaiErr) {
        console.error(balaiErr);
        res.status(500).json({ error: "Error to connect to BalaiDB" });
        return;
      }

      const mergedResults = [
        ...mygatensiResults,
        // ...regulerResults,
        ...balaiResults,
      ];

      const sortedResults = mergedResults.sort(
        (a, b) => new Date(b.created) - new Date(a.created)
      );

      const latestResults = sortedResults[0];

      res.status(200).json(latestResults);
    });
    // });
  });
};
