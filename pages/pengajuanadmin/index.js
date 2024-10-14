"use client";
import { useState } from "react";
import Navbar from "../../components/Layouts/Navbar/Navbar";
import styles from "./pengajuanAdmin.module.css";

const PengajuanAdmin = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(error);
  };

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Pengajuan Akun Admin TUK</h1>
        <form onSubmit={handleSubmit}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Nama sesuai KTP</td>
                <td>:</td>
                <td className={styles.input}>
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({
                        ...data,
                        namaAdmin: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>NIK</td>
                <td>:</td>
                <td className={styles.input}>
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({
                        ...data,
                        nik: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Jenis Kelamin</td>
                <td>:</td>
                <td className={styles.input}>
                  <select
                    onChange={(e) => {
                      setData({
                        ...data,
                        jenisKelamin: e.target.value,
                      });
                    }}
                  >
                    <option value=""> </option>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td className={styles.input}>
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({
                        ...data,
                        email: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Nomor HP</td>
                <td>:</td>
                <td className={styles.input}>
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({
                        ...data,
                        nomorHp: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>

              {/* <tr>
                <td>Nama TUK</td>
                <td>:</td>
                <td className={styles.input}>
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({
                        ...data,
                        namaTuk: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr> */}

              <tr>
                <td>Akun</td>
                <td>:</td>
                <td className={styles.input}>
                  <select
                    onChange={(e) => {
                      setData({
                        ...data,
                        akunPlatform: e.target.value,
                      });
                    }}
                  >
                    <option value=""> </option>
                    <option value="Reguler">Reguler</option>
                    <option value="Balai">Balai</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
        {error}
      </div>
    </>
  );
};

export default PengajuanAdmin;
