"use client";

import { useState } from "react";
import styles from "./asesor.module.css";
import { useEffect } from "react";

const AsesorComponent = () => {
  const [dataAsesor, setDataAsesor] = useState(null);
  const [jumlahAsesor, setJumlahAsesor] = useState(null);
  const [asesor, setAsesor] = useState(null);
  const [asesorSKK, setAsesorSKK] = useState(null);
  const [loading, setLoading] = useState(false);
  const [namaQuery, setNamaQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/asesor/getAll");

        if (!response.ok) {
          throw new Error("Network not OK");
        }

        const result = await response.json();
        // const data = await response.json();
        // console.log(result.data[0].namaAsesor);
        const data = Object.values(
          result.data.reduce((acc, current) => {
            const { namaAsesor, ...rest } = current;
            if (!acc[namaAsesor]) {
              acc[namaAsesor] = { namaAsesor, ...rest };
            }
            return acc;
          }, {})
        ).sort((a, b) =>
          a.namaAsesor > b.namaAsesor ? 1 : b.namaAsesor > a.namaAsesor ? -1 : 0
        );
        // .filter((item) =>
        //   item?.namaAsesor?.toLowerCase().includes(namaQuery.toLowerCase())
        // );
        setAsesor(result.data);
        setDataAsesor(data);
        setLoading(false);
        setJumlahAsesor(result.asesorsCount);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchData();
    // setLoading(false);
  }, []);

  // console.log(dataAsesor);

  const handleClickNama = () => {
    setLoading(true);
    let namas = [];
    if (asesorSKK?.length > 0) {
      const dataNew = asesor.reduce((unique, item) => {
        // console.log(item.namaAsesor == namaQuery);
        if (item.namaAsesor === namaQuery) {
          namas.push(item);
        }
        return namas;
      }, []);

      if (dataNew.length > 0) {
        setAsesorSKK(dataNew);
      } else {
        setAsesorSKK("Data tidak ditemukan");
      }

      // console.log(dataNew);
    } else {
      setAsesorSKK("Data tidak ditemukan");
    }
    setLoading(false);
    // setDataAsesor(dataNew);
  };

  // if (loading) {
  //   return "loading";
  // }

  // const sortedData = dataAsesor.sort((a, b) =>
  //   a.nama > b.nama ? 1 : b.nama > a.nama ? -1 : 0
  // );

  // .reduce((x, current) => {
  //   const { namaAsesor, ...rest } = current;
  //   x[namaAsesor] = x[namaAsesor] || [];
  //   x[namaAsesor].push({ ...rest });
  //   return x;
  // })

  // const dataAsesors = [
  //   { namaAsesor: "John", id: 1 },
  //   { namaAsesor: "Jane", id: 2 },
  //   { namaAsesor: "John", id: 3 },
  //   { namaAsesor: "Bob", id: 4 },
  // ];

  //

  // console.log(asesorSKK);

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Daftar Asesor</h1>
        <h5>LSP Gatensi Karya Konstruksi</h5>
        <h5 style={{ paddingTop: "20px" }}>Jumlah Asesor: {jumlahAsesor}</h5>
      </div>
      <div className={styles.filter}>
        <label>Nama Asesor</label>
        <input
          list="asesor"
          onChange={(e) => {
            setNamaQuery(e.target.value);
          }}
        ></input>
        <datalist id="asesor">
          <option value={""}></option>
          {dataAsesor?.map((item) => (
            <option key={item.namaAsesor} value={item.namaAsesor}>
              {item.namaAsesor}
            </option>
          ))}
        </datalist>
        <button type="button" onClick={handleClickNama}>
          Cari
        </button>
      </div>
      {loading ? (
        "loading"
      ) : asesorSKK === "Data tidak ditemukan" ? (
        <p style={{ margin: "auto" }}>Data tidak ditemukan</p>
      ) : (
        asesorSKK?.length > 0 && (
          <>
            <p className={styles.jumlahSKK}>Jumlah SKK: {asesorSKK.length}</p>
            <table className={styles.table}>
              <thead className={styles.head}>
                <tr>
                  <th className={styles.headCell}>No</th>
                  <th className={styles.headCell}>Nama</th>
                  <th className={styles.headCell}>JabKer</th>
                  <th className={styles.headCell}>Domisili</th>
                  <th className={styles.headCell}>No. Registrasi</th>
                  <th className={styles.headCell}>Tanggal Habis SKK/SKA</th>
                  <th className={styles.headCell}>Tanggal Habis ASKOM</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                <td colSpan="4">Loading</td>
              </tr> */}
                {asesorSKK.map((data, index) => (
                  <tr className={styles.cell} key={index}>
                    <td className={`${styles.rowCell} ${styles.centerItem}`}>
                      {index + 1}
                    </td>
                    <td
                      className={styles.rowCell}
                      style={{ textTransform: "uppercase" }}
                    >
                      {data.namaAsesor}
                    </td>
                    <td
                      className={styles.rowCell}
                      style={{ textTransform: "uppercase" }}
                    >
                      {data.jabatanKerja}
                    </td>
                    <td
                      style={{ textAlign: "center" }}
                      className={styles.rowCell}
                    >
                      {data.kotaDom}
                    </td>
                    <td
                      style={{ textAlign: "center" }}
                      className={styles.rowCell}
                    >
                      {data.metAsesor}
                    </td>
                    <td
                      style={{ textAlign: "center" }}
                      className={styles.rowCell}
                    >
                      {data.tanggalHabis && data.tanggalHabis.split("T")[0]}
                    </td>
                    <td
                      style={{ textAlign: "center" }}
                      className={styles.rowCell}
                    >
                      {data.tanggalHabisDua &&
                        data.tanggalHabisDua.split("T")[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      )}
    </section>
  );
};

export default AsesorComponent;
