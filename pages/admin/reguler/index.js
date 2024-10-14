import React from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import styles from "./regulerPage.module.css";

const RegulerPage = () => {
  return (
    <AdminLayout>
      <div className={styles.wrapper}>
        <h1>Sertifikat Balai</h1>
        <p style={{ fontSize: "20px" }}>
          Total Data: <b>000</b>
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>No Surat</th>
              <th>Nama Uji</th>
              <th>Nama TUK</th>
              <th>Tanggal Uji</th>
              <th>Wilayah</th>
              <th>Penyelenggara</th>
              <th>Provinsi</th>
              <th>ID Jadwal</th>
              <th>Jumlah Asesi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No</td>
              <td>No Surat</td>
              <td>Nama Uji</td>
              <td>Nama TUK</td>
              <td>Tanggal Uji</td>
              <td>Wilayah</td>
              <td>Penyelenggara</td>
              <td>Provinsi</td>
              <td>ID Jadwal</td>
              <td>Jumlah Asesi</td>
            </tr>
            <tr>
              <td>No</td>
              <td>No Surat</td>
              <td>Nama Uji</td>
              <td>Nama TUK</td>
              <td>Tanggal Uji</td>
              <td>Wilayah</td>
              <td>Penyelenggara</td>
              <td>Provinsi</td>
              <td>ID Jadwal</td>
              <td>Jumlah Asesi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default RegulerPage;
