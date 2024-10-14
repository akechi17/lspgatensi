"use client";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Navbar from "../../components/Layouts/Navbar/Navbar";
import styles from "./login.module.css";
import Image from "next/image";
import Head from "next/head";

const login = () => {
  const router = useRouter();
  const { data, status } = useSession();
  // const status = "authenticated";
  // console.log({ data, status });
  if (status == "loading") {
    return "loading";
  }

  if (status === "authenticated") {
    if (
      data?.user.email === "dimasnyoman1@gmail.com" ||
      data?.user.email === "lspsertifikasi@gmail.com" ||
      data?.user.email === "gatensikaryakonstruksi@gmail.com"
    ) {
      router.push("/admin");
    }
    router.push("/");
  }
  return (
    <>
      <Head>
        <title>Login | LSP Gatensi</title>
      </Head>
      <Navbar />
      <article className={`${styles.wrapper} pt-100 pb-70`}>
        <div className={styles.box}>
          <div className={styles.opt} onClick={() => signIn("google")}>
            <Image src="/images/google.svg" alt="" width={40} height={40} />{" "}
            <span className={styles.signInText}>Sign In with Google</span>
          </div>
        </div>
      </article>
    </>
  );
};

export default login;
