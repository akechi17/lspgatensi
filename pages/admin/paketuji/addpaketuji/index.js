"use client";
import styles from "./addPaketUji.module.css";
import AdminLayout from "../../AdminLayout/AdminLayout";
import { useState } from "react";
import { useRouter } from "next/router";

const AddPaketUjiPage = () => {
  const router = useRouter();
  const [postData, setPostData] = useState({
    nama_tuk: "",
    nama_uji: "",
    penyelenggara: 1,
    tanggal_uji: "",
  });

  const handlePostRequest = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/paketUji/create", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          nama_uji: postData.nama_uji,
          nama_tuk: postData.nama_tuk,
          tanggal_uji: postData.tanggal_uji,
          penyelenggara: parseInt(postData.penyelenggara),
        }),
      });
      const result = await response.json();
      console.log(await result);
      if (!response.ok) {
        throw new Error("Network error");
      }
      if (result.message == "unauthorized") {
        throw new Error("Unauthorized");
      }
      console.log("POST Success");
      // console.log(postData);
      router.push("/admin/paketuji");
    } catch (error) {
      console.error("Error POST Request: ", error);
    }
  };

  return (
    <AdminLayout>
      <div className={styles.wrapper}>
        <h1>Add Paket Uji</h1>
        <form className={styles.formWrapper} onSubmit={handlePostRequest}>
          <div className={styles.form}>
            <label>Nama Uji</label>
            <input
              type="text"
              onChange={(e) =>
                setPostData({ ...postData, nama_uji: e.target.value })
              }
              required
            />
          </div>
          <div className={styles.form}>
            <label>TUK</label>
            <input
              type="text"
              onChange={(e) =>
                setPostData({ ...postData, nama_tuk: e.target.value })
              }
            />
          </div>
          <div className={styles.form}>
            <label>Tanggal Uji</label>
            <input
              type="date"
              onChange={(e) =>
                setPostData({ ...postData, tanggal_uji: e.target.value })
              }
              required
            />
          </div>
          <div className={styles.form}>
            <label>Penyelenggara</label>
            <select
              onChange={(e) =>
                setPostData({
                  ...postData,
                  penyelenggara: parseInt(e.target.value),
                })
              }
            >
              <option value="1">Reguler</option>
              <option value="2">BJKW</option>
              <option value="3">FG</option>
            </select>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddPaketUjiPage;
