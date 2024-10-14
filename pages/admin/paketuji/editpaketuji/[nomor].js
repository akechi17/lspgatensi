"use client";

import styles from "./editPaketUji.module.css";
import AdminLayout from "../../AdminLayout/AdminLayout";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

function tanggal(value) {
  return value.split("T")[0];
}

const EditPaketUjiPage = () => {
  const router = useRouter();
  const { nomor } = router.query;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // const [data, setData] = useState({
  //   jadwal_id: "",
  //   nama_tuk: "",
  //   nama_uji: "",
  //   penyelenggara: 1,
  //   tanggal_uji: "",
  // });

  useEffect(() => {
    const fetchData = async () => {
      const link = `/api/paketUji/getOne/${nomor}`;
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        // setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nomor]);

  if (loading === true) {
    return "loading";
  }

  const editPaketUjiHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/paketUji/editOne/${nomor}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          jadwal_id: data.jadwal_id,
          nama_tuk: data.nama_tuk,
          nama_uji: data.nama_uji,
          penyelenggara: parseInt(data.penyelenggara),
          tanggal_uji: tanggal(data.tanggal_uji),
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error("Network error");
      }
      if (result.message == "unauthorized") {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.error("Error POST Request: ", error);
    }

    router.push("/admin/paketuji");
  };

  // console.log(data?.data);

  return (
    <AdminLayout>
      {loading && <div>loading</div>}
      {data && (
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Edit Paket Uji : {data?.nomor_paket_uji}
          </h1>
          <form className={styles.formWrapper} onSubmit={editPaketUjiHandler}>
            <table>
              <tbody>
                <tr className={styles.form}>
                  <td>
                    <label>Nama Uji</label>
                  </td>
                  <td className={styles.row}>
                    <input
                      type="text"
                      value={data?.nama_uji}
                      onChange={(e) =>
                        setData({
                          ...data,
                          nama_uji: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr className={styles.form}>
                  <td>
                    <label>Tanggal Uji</label>
                  </td>
                  <td className={styles.row}>
                    <input
                      type="date"
                      value={tanggal(data?.tanggal_uji)}
                      onChange={(e) =>
                        setData({
                          ...data,
                          tanggal_uji: e.target.value,
                        })
                      }
                    />
                  </td>
                </tr>
                <tr className={styles.form}>
                  <td>
                    <label>ID Jadwal BNSP</label>
                  </td>
                  <td className={styles.row}>
                    <input
                      type="text"
                      value={data?.jadwal_id}
                      onChange={(e) =>
                        setData({
                          ...data,
                          jadwal_id: e.target.value,
                        })
                      }
                      required
                    />
                  </td>
                </tr>
                <tr className={styles.form}>
                  <td>
                    <label>Penyelenggara</label>
                  </td>
                  <td className={styles.row}>
                    <select
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setData({
                          ...data,
                          penyelenggara: e.target.value,
                        });
                      }}
                      value={data?.penyelenggara}
                    >
                      <option value="1">Reguler</option>
                      <option value="2">BJKW</option>
                      <option value="3">FG</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      )}
    </AdminLayout>
  );
};

export default EditPaketUjiPage;
