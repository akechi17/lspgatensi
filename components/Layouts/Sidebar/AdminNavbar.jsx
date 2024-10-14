"use client";
import Link from "../../../utils/ActiveLink";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import { useState } from "react";
import styles from "./adminNavbar.module.css";

const AdminNavbar = () => {
  const [state, setState] = useState({ display: false, collapsed: true });
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const toggleNavbar = () => {
    setState({
      collapsed: false,
    });
  };

  const { collapsed } = state;

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";

  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/admin">
                <a className={`${styles.logoWrapper} navbar-brand`}>
                  <span className={styles.logo}>AdminLSP</span>
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/admin" activeClassName="active">
                      <a className="nav-link">Dashboard</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/admin/paketuji" activeClassName="active">
                      <a className="nav-link">Paket Uji</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Pencatatan <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                    <motion.ul variants={variants} className="dropdown-menu">
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href="/admin/mygatensi" activeClassName="active">
                          <a className="nav-link">MyGatensi</a>
                        </Link>
                      </motion.li>
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href="/admin/reguler" activeClassName="active">
                          <a className="nav-link">Reguler</a>
                        </Link>
                      </motion.li>
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href="/admin/balai" activeClassName="active">
                          <a className="nav-link">Balai</a>
                        </Link>
                      </motion.li>
                    </motion.ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Account <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                    <motion.ul variants={variants} className="dropdown-menu">
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link href="/admin/settings">
                          <a className="nav-link">Settings</a>
                        </Link>
                      </motion.li>
                      <motion.li
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a className="nav-link">Logout</a>
                        </div>
                      </motion.li>
                    </motion.ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
