"use client";
import React, { useState } from "react";
import AdminLayout from "../AdminLayout/AdminLayout";
import styles from "./settingsPage.module.css";

const SettingsPage = () => {
  const [token, setToken] = useState("");
  const [title, setTitle] = useState("Input Token");

  const saveToLocal = (e) => {
    e.preventDefault();
    // console.log(token);
    localStorage.setItem("token", token);
    setTitle("Token Saved!");
  };
  return (
    <AdminLayout>
      {/* SettingsPage */}
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h2 className={styles.label}>{title}</h2>
          <form onSubmit={saveToLocal} className={styles.form}>
            <input
              className={styles.input}
              placeholder="token..."
              onChange={(e) => setToken(e.target.value)}
            />
            <button type="submit" className={styles.button}>
              Save
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingsPage;
