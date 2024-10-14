"use client";

import styles from "./deletePaketUji.module.css";
import AdminLayout from "../../AdminLayout/AdminLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

function tanggal(value) {
  return value.split("T")[0];
}

const DeletePaketUjiPage = () => {
  const router = useRouter();
  const { nomor } = router.query;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const deleteHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/paketUji/deleteOne/${nomor}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
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

  return (
    <AdminLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Delete Paket Uji</h1>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <b>Nomor Paket Uji</b>
              </td>
              <td>
                <b>:</b>
              </td>
              <td>{data.nomor_paket_uji}</td>
            </tr>
            <tr>
              <td>
                <b>Nama Uji</b>
              </td>
              <td>
                <b>:</b>
              </td>
              <td>{data.nama_uji}</td>
            </tr>
            <tr>
              <td>
                <b>Tanggal Uji</b>
              </td>
              <td>
                <b>:</b>
              </td>
              <td>{tanggal(data.tanggal_uji)}</td>
            </tr>
          </tbody>
        </table>
        <form className={styles.formWrapper} onSubmit={deleteHandler}>
          <button type="submit" className={styles.button}>
            Delete
          </button>
          <Link
            href={"/admin/paketuji"}
            type="submit"
            className={styles.cancelButton}
          >
            Cancel
          </Link>
        </form>
      </div>
    </AdminLayout>
  );
};

export default DeletePaketUjiPage;
