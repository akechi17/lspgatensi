"use client";
import Link from "next/link";
import AdminLayout from "../AdminLayout/AdminLayout";
import styles from "./paketUji.module.css";
import { useState, useEffect } from "react";

function tanggal(input) {
  return input.split("T")[0];
}

function penyelenggaraan(input) {
  if (input == 1) {
    return "Reguler";
  } else if (input == 2) {
    return "BJKW";
  } else if (input == 3) {
    return "FG";
  }
}

const PaketUji = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [tableColumns, setTableColumns] = useState({
  //   no: true,
  //   noSurat: false,
  //   namaUji: false,
  //   idJadwal: false,
  //   namaTUK: true,
  //   tanggalUji: true,
  //   wilayah: false,
  //   penyelenggara: false,
  //   provinsi: false,
  //   jumlahAsesi: false,
  //   edit: true,
  //   delete: true,
  // });

  // TABLE
  const [showTableColumnOptions, setShowTableColumnOptions] = useState(false);
  const [noSuratColumn, setNoSuratColumn] = useState(true);
  const [namaUjiColumn, setNamaUjiColumn] = useState(true);
  const [idJadwalColumn, setIdJadwalColumn] = useState(true);
  const [namaTukColumn, setNamaTukColumn] = useState(true);
  const [tanggalUjiColumn, setTanggalUjiColumn] = useState(true);
  const [wilayahColumn, setWilayahColumn] = useState(false);
  const [penyelenggaraColumn, setPenyelenggaraColumn] = useState(false);
  const [provinsiColumn, setProvinsiColumn] = useState(false);
  const [jmlAsesiColumn, setJmlAsesiColumn] = useState(false);

  // FOR FILTER
  const [filterOptions, setFilterOptions] = useState(false);
  const [tukQuery, setTukQuery] = useState("");
  const [tanggalUjiQuery, setTanggalUjiQuery] = useState("");
  const [idJadwalQuery, setIDJadwalQuery] = useState("");
  const [penyelenggaraQuery, setPenyelenggaraQuery] = useState(0);

  // const DATA_PER_PAGE = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Bearer token from localStorage

        const response = await fetch("/api/paketUji/getAll");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const filteredData = data?.data
    ?.filter((item) => item.nama_tuk.toLowerCase().includes(tukQuery))
    .filter(
      (item) =>
        tanggal(item.tanggal_uji) === tanggalUjiQuery ||
        tanggal(item.tanggal_uji) == "" ||
        tanggalUjiQuery == ""
    )
    .filter(
      (item) =>
        item.jadwal_id?.includes(idJadwalQuery) ||
        item.jadwal_id == undefined ||
        idJadwalQuery == undefined
    )
    .filter(
      (item) =>
        item.penyelenggara == penyelenggaraQuery ||
        item.penyelenggara == 0 ||
        penyelenggaraQuery == 0
    );

  const penyelenggaraTableHandler = () => {
    setPenyelenggaraColumn(!penyelenggaraColumn);
  };
  const wilayahTableHandler = () => {
    setWilayahColumn(!wilayahColumn);
  };
  const provinsiTableHandler = () => {
    setProvinsiColumn(!provinsiColumn);
  };
  const jmlAsesiTableHandler = () => {
    setJmlAsesiColumn(!jmlAsesiColumn);
  };
  const tanggalUjiTableHandler = () => {
    setTanggalUjiColumn(!tanggalUjiColumn);
  };
  const namaTukTableHandler = () => {
    setNamaTukColumn(!namaTukColumn);
  };
  const idJadwalTableHandler = () => {
    setIdJadwalColumn(!idJadwalColumn);
  };
  const namaUjiTableHandler = () => {
    setNamaUjiColumn(!namaUjiColumn);
  };
  const noSuratTableHandler = () => {
    setNoSuratColumn(!noSuratColumn);
  };

  // console.log(tanggalUjiQuery);
  // console.log(data.data[3].jadwal_id);
  // console.log(penyelenggaraColumn);

  return (
    <AdminLayout>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Paket Uji</h1>
          </div>
          <div>
            <Link
              href="/admin/paketuji/addpaketuji"
              className={styles.addUjiButton}
            >
              Add Uji
            </Link>
          </div>
        </div>
        <div className={styles.filter}>
          <button
            className={styles.filterButton}
            onClick={() => setFilterOptions(!filterOptions)}
          >
            Filter
          </button>

          {filterOptions && (
            <table className={styles.filterWrapper}>
              <tbody>
                <tr className={styles.form}>
                  <td>
                    <label>TUK</label>
                  </td>
                  <td className={styles.row}>
                    <input
                      type="text"
                      onChange={(e) => setTukQuery(e.target.value)}
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
                      onChange={(e) => setTanggalUjiQuery(e.target.value)}
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
                      onChange={(e) => setIDJadwalQuery(e.target.value)}
                    />
                  </td>
                </tr>
                <tr className={styles.form}>
                  <td>
                    <label>Penyelenggara</label>
                  </td>
                  <td className={styles.row}>
                    <select
                      onChange={(e) => setPenyelenggaraQuery(e.target.value)}
                    >
                      <option value="0">Semua</option>
                      <option value="1">Reguler</option>
                      <option value="2">BJKW</option>
                      <option value="3">FG</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div>
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <div>
              {/* Render your component using the fetched data */}
              {data && (
                <div>
                  <div className={styles.tableHeader}>
                    <h3 style={{ textAlign: "center", padding: "30px 0" }}>
                      Total Data: {filteredData.length}
                    </h3>
                    <div>
                      <div
                        className={styles.tableColumnButton}
                        onClick={() =>
                          setShowTableColumnOptions(!showTableColumnOptions)
                        }
                      >
                        View
                      </div>
                      {showTableColumnOptions && (
                        <div className={styles.tableOptions}>
                          <label>
                            <input
                              type="checkbox"
                              checked={noSuratColumn}
                              onChange={noSuratTableHandler}
                            />
                            No Surat
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={namaUjiColumn}
                              onChange={namaUjiTableHandler}
                            />
                            Nama Uji
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={idJadwalColumn}
                              onChange={idJadwalTableHandler}
                            />
                            ID Jadwal BNSP
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={namaTukColumn}
                              onChange={namaTukTableHandler}
                            />
                            Nama TUK
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={tanggalUjiColumn}
                              onChange={tanggalUjiTableHandler}
                            />
                            Tanggal Uji
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={wilayahColumn}
                              onChange={wilayahTableHandler}
                            />
                            Wilayah
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={penyelenggaraColumn}
                              onChange={penyelenggaraTableHandler}
                            />
                            Penyelenggara
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={provinsiColumn}
                              onChange={provinsiTableHandler}
                            />
                            Provinsi
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              checked={jmlAsesiColumn}
                              onChange={jmlAsesiTableHandler}
                            />
                            Jml Asesi
                          </label>
                        </div>
                      )}
                    </div>
                  </div>

                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>No</th>
                        {noSuratColumn && <th>No Surat</th>}
                        {namaUjiColumn && <th>Nama Uji</th>}
                        {idJadwalColumn && <th>ID Jadwal BNSP</th>}
                        {namaTukColumn && <th>Nama TUK</th>}
                        {tanggalUjiColumn && <th>Tanggal Uji</th>}

                        {wilayahColumn && <th>Wilayah</th>}
                        {penyelenggaraColumn && <th>Penyelenggara</th>}
                        {provinsiColumn && <th>Provinsi</th>}
                        {jmlAsesiColumn && <th>Jml Asesi</th>}
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    {loading ? (
                      <tbody>
                        <tr>Loading</tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {filteredData.length === 0 ? (
                          <tr style={{ padding: "30px" }}>
                            <td colSpan="12" style={{ textAlign: "center" }}>
                              <h2 style={{ padding: "20px" }}>NoData</h2>
                            </td>
                          </tr>
                        ) : (
                          filteredData.map((item) =>
                            item.deleted_at === null ? (
                              <tr key={item.nomor}>
                                <td style={{ textAlign: "center" }}>
                                  {item.nomor}
                                </td>
                                {noSuratColumn && (
                                  <td>{item.nomor_paket_uji}</td>
                                )}
                                {namaUjiColumn && <td>{item.nama_uji}</td>}
                                {idJadwalColumn && <td>{item.jadwal_id}</td>}
                                {namaTukColumn && <td>{item.nama_tuk}</td>}
                                {tanggalUjiColumn && (
                                  <td>{tanggal(item.tanggal_uji)}</td>
                                )}
                                {wilayahColumn && (
                                  <td style={{ textAlign: "center" }}> - </td>
                                )}
                                {penyelenggaraColumn && (
                                  <td>{penyelenggaraan(item.penyelenggara)}</td>
                                )}
                                {provinsiColumn && (
                                  <td style={{ textAlign: "center" }}> - </td>
                                )}
                                {jmlAsesiColumn && (
                                  <td style={{ textAlign: "center" }}> - </td>
                                )}
                                <td>
                                  <Link
                                    href={`/admin/paketuji/editpaketuji/${item.nomor}`}
                                    className={styles.editButton}
                                  >
                                    <i className="fa fa-pencil-alt" />
                                  </Link>
                                </td>
                                <td>
                                  <Link
                                    style={{ paddingLeft: "10px" }}
                                    href={`/admin/paketuji/deletepaketuji/${item.nomor}`}
                                    className={styles.deleteButton}
                                  >
                                    <i className="fa fa-trash" />
                                  </Link>
                                </td>
                              </tr>
                            ) : (
                              <tr key={item.nomor} style={{ color: "red" }}>
                                <td style={{ textAlign: "center" }}>
                                  {item.nomor}
                                </td>
                                {noSuratColumn && (
                                  <td>{item.nomor_paket_uji}</td>
                                )}
                                {namaUjiColumn && <td>{item.nama_uji}</td>}
                                {idJadwalColumn && <td>{item.jadwal_id}</td>}
                                {namaTukColumn && <td>{item.nama_tuk}</td>}
                                {tanggalUjiColumn && (
                                  <td>{tanggal(item.tanggal_uji)}</td>
                                )}
                                {wilayahColumn && (
                                  <td style={{ textAlign: "center" }}> - </td>
                                )}
                                {penyelenggaraColumn && (
                                  <td>{penyelenggaraan(item.penyelenggara)}</td>
                                )}
                                {provinsiColumn && (
                                  <td style={{ textAlign: "center" }}> - </td>
                                )}
                                {jmlAsesiColumn && (
                                  <td style={{ textAlign: "center" }}> - </td>
                                )}
                                <td style={{ textAlign: "center" }}>Deleted</td>
                                <td style={{ textAlign: "center" }}>Deleted</td>
                              </tr>
                            )
                          )
                        )}
                      </tbody>
                    )}
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.paginationWrapper}>
          {/* <select value={currentPage} onChange={handleChangePage}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <option key={index + 1} value={index + 1}>
                Page {index + 1}
              </option>
            ))}
          </select> */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default PaketUji;
