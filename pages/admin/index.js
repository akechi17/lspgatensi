"use client";
import { useSession } from "next-auth/react";
import AdminLayout from "./AdminLayout/AdminLayout";
import styles from "./adminPage.module.css";
import Link from "next/link";

const AdminPage = () => {
  const { data, status } = useSession();
  const date = new Date();
  const hour = date.getHours();
  // const minute = date.getMinutes();

  if (status === "loading") {
    return "loading";
  }

  const time = (hour) => {
    if (hour >= 0 && hour <= 11) {
      return "Pagi";
    }
    if (hour >= 11 && hour <= 15) {
      return "Siang";
    }
    if (hour >= 15 && hour <= 18) {
      return "Sore";
    }
    if (hour >= 18 && hour <= 24) {
      return "Malam";
    }
  };

  return (
    <AdminLayout>
      <div className={styles.container}>
        <h2 className="pt-100 pb-70">
          Selamat {time(hour)},
          <br />
          <font style={{ fontSize: "30px" }}>{data?.user?.name}</font>
          {/* <font style={{ fontSize: "30px" }}>Welcome to Admin Page,</font>
          <br />
          {data.user.name} */}
        </h2>
        <div className={styles.menuWrapper}>
          <Link className={styles.menu} href="/admin/paketuji">
            Paket Uji
          </Link>
          <Link
            className={`${styles.menuDisabled} ${styles.menu}`}
            // href="/admin/mygatensi"
            href="#"
          >
            My Gatensi
          </Link>
          <Link className={styles.menu} href="/admin/reguler">
            Reguler
          </Link>
          <Link className={styles.menu} href="/admin/balai">
            Balai
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
