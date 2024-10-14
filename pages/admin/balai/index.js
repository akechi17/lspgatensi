// pages/index.js

import React, { useState, useEffect } from "react";
import styles from "./balaiPage.module.css";
import Link from "next/link";
import AdminLayout from "../AdminLayout/AdminLayout";

const showTanggal = (date) => {
  const newDate = date.split("T");
  return newDate[0];
};

const BalaiPage = () => {
  const [dataPencatatan, setDataPencatatan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //FETCH
    const fetchData = async () => {
      try {
        const responseDataPencatatan = await fetch("/api/balai/pencatatan");
        const resultDataPencatatan = await responseDataPencatatan.json();

        setDataPencatatan(resultDataPencatatan);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const DATA_PER_PAGE = 20;
  const totalPages = Math.ceil(dataPencatatan.length / DATA_PER_PAGE);

  const handleChangePage = (event) => {
    setCurrentPage(parseInt(event.target.value, 10));
  };

  const indexOfLastData = currentPage * DATA_PER_PAGE;
  const indexOfFirstData = indexOfLastData - DATA_PER_PAGE;
  const currentData = dataPencatatan.slice(indexOfFirstData, indexOfLastData);

  // console.log({ data, status });

  return (
    <>
      <AdminLayout>
        <div className={styles.wrapper}>
          <h1>Sertifikat Balai</h1>
          <p style={{ fontSize: "20px" }}>
            Total Pencatatan: <b>{dataPencatatan.length}</b>
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID Izin</th>
                <th>Nama</th>
                <th>Tanggal Penerbitan</th>
                <th>Sertifikat</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id_izin}>
                  <td className={styles.td}>{item.id_izin}</td>
                  <td>{item.nama}</td>
                  <td style={{ textAlign: "center" }}>
                    {showTanggal(item.tanggal_ditetapkan)}
                  </td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <Link
                      target="_blank"
                      href={item.link_e_sertifikat}
                      className={styles.linkSertif}
                      style={
                        item.link_e_sertifikat
                          ? { backgroundColor: "green" }
                          : { backgroundColor: "red" }
                      }
                    >
                      Open
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.paginationWrapper}>
            <select value={currentPage} onChange={handleChangePage}>
              {Array.from({ length: totalPages }).map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  Page {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default BalaiPage;
