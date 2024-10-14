import React, { useState } from "react";
import styles from "./peserta.module.css";
import kodeJabker from "../../../data/kodeJabker";

// const showTanggal = (date) => {
//   const newDate = date.split("T");
//   return newDate[0];
// };

function getKodeJabker(kode) {
  const obj = kodeJabker.find((item) => (item.kode_jabker = kode));
  return obj.nama;
}

const PesertaComponent = () => {
  const [nik, setNik] = useState("");
  const [dataDB, setDataDB] = useState(null);
  // const [dataPersonals, setDataPersonals] = useState(null);
  const [errorMess, setErrorMess] = useState(null);
  // return <div>Under Construction</div>

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseSQL = await fetch("/api/getPemohon", {
        method: "POST",
        headers: {
          nik,
        },
      });

      if (!responseSQL.ok) {
        throw new Error("NIK Tidak Ditemukan!");
      }

      const data = await responseSQL.json();
      // const idIzin = (await data.id_izin) || (await data.ID_IjinPersonal);

      // console.log(data);
      // console.log(getKodeJabker(data.jabatan_kerja));

      // const responseSiki = await fetch(
      //   `/api/getSikiPemohon/?id_izin=${idIzin}`,
      //   {
      //     method: "POST",
      //   }
      // );

      // const dataSiki = await responseSiki.json();

      // console.log(idIzin);
      setDataDB(data);
      // setDataPersonals();
      setErrorMess();
      // setDataPersonals(dataSiki); // You can handle the data as needed
    } catch (error) {
      setErrorMess("NIK Tidak Ditemukan!");

      console.error("There was an error fetching the data:", error);
      // console.log(error);
    }
  };

  // console.log(dataDB);
  // console.log(dataPersonals);
  // console.log(
  //   getKodeJabker(dataPersonals.data.klasifikasi_kualifikasi[0].jabatan_kerja)
  // );
  // console.log(errorMess);

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Cari Data Pemohon</h1>
        <form className={styles.filter} onSubmit={handleSearchSubmit}>
          <label>Masukkan NIK : </label>
          <input
            type="text"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            Cari
          </button>
        </form>
        {
          errorMess ? (
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td>
                    <p>{errorMess}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : dataDB?.ID_IjinPersonal ? (
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td>ID Izin </td>
                  <td>{dataDB.ID_IjinPersonal}</td>
                </tr>
                <tr>
                  <td>Nama </td>
                  <td>{dataDB.Nama}</td>
                </tr>
                <tr>
                  <td>NIK </td>
                  <td>{dataDB.NIK}</td>
                </tr>
                <tr>
                  <td>Jabatan Kerja </td>
                  <td>{getKodeJabker(dataDB.jabatan_kerja)}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            dataDB?.id_izin && (
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <td>ID Izin </td>
                    <td>{dataDB.id_izin}</td>
                  </tr>
                  <tr>
                    <td>Nama </td>
                    <td>{dataDB.nama}</td>
                  </tr>
                  <tr>
                    <td>NIK </td>
                    <td>{dataDB.nik}</td>
                  </tr>
                </tbody>
              </table>
            )
          )

          // dataPersonals?.nama ? (
          //   <table className={styles.table}>
          //     <tbody>
          //       <tr>
          //         <td>Nama</td>
          //         <td>{dataPersonals.nama}</td>
          //       </tr>
          //       <tr>
          //         <td>ID Izin</td>
          //         <td>{dataPersonals.id_izin}</td>
          //       </tr>
          //     </tbody>
          //   </table>
          // ) : (
          //   dataPersonals?.Nama && (
          //     <table className={styles.table}>
          //       <tbody>
          //         <tr>
          //           <td>Nama</td>
          //           <td>{dataPersonals.Nama}</td>
          //         </tr>
          //         <tr>
          //           <td>ID Izin</td>
          //           <td>{dataPersonals.ID_IjinPersonal}</td>
          //         </tr>
          //         <tr>
          //           <td>Jabatan Kerja</td>
          //           <td>{dataPersonals.jabatan_kerja}</td>
          //         </tr>
          //       </tbody>
          //     </table>
          //   )
          // )
        }
      </div>
    </>
  );
};

export default PesertaComponent;
