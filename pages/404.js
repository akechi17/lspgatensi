import React, { Component } from "react";
import Link from "next/link";

class Coustom404 extends Component {
  render() {
    return (
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="/images/404.jpg" alt="Image" />

                <h3>Halaman tidak ditemukan</h3>

                <p>
                  Halaman yang Anda cari tidak ada atau namanya telah berubah
                  atau untuk sementara tidak bisa diakses.
                </p>

                <Link href="/" className="default-btn-one">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coustom404;
