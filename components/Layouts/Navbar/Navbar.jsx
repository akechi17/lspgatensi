"use client";
import React from "react";
import Link from "../../../utils/ActiveLink";
import { motion } from "framer-motion";
import ProfilNav from "./ProfileNavMenu";
import SertifikasiNav from "./SertifikasiNavMenu";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const { status } = useSession();
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
      collapsed: !collapsed,
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
      <nav id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/logo-color.webp"
                    className="white-logo"
                    alt="logo lsp gatensi karya konstruksi"
                  />
                  <img
                    src="/images/logo-color.webp"
                    className="black-logo"
                    alt="logo lsp gatensi karya konstruksi"
                  />
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
                    <Link href="/" activeClassName="active">
                      <a className="nav-link">Beranda</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/berita" activeClassName="active">
                      <a className="nav-link">Berita</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about-us" activeClassName="active">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Profil <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>
                    <motion.ul variants={variants} className="dropdown-menu">
                      {ProfilNav.map((item, index) => (
                        <motion.li
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          key={index}
                        >
                          <Link href={item.link}>
                            <a className="nav-link">{item.title}</a>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/sertifikasi">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Sertifikasi <i className="fas fa-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      {SertifikasiNav.map((item, index) => (
                        <motion.li
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          key={index}
                        >
                          <Link href={item.link}>
                            <a className="nav-link">{item.title}</a>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/pengajuan-tuk" activeClassName="active">
                      <a className="nav-link">Pengajuan TUK</a>
                    </Link>
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

export default Navbar;
