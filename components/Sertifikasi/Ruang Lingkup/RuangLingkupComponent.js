import { useState } from "react";
import Data from "../../../data/DataRuangLingkup";
import RuangLingkupFilter from "./Filter/RuangLingkupFilter";
import { RuangLingkupTable } from "./Table/RuangLingkupTable";
import styles from "./ruangLingkup.module.css";

const RuangLingkupComponent = () => {
  const [filterSelect, setFilterSelect] = useState("");
  const [jenjangSelect, setJenjangSelect] = useState("");
  const filterSelected = (value) => {
    setFilterSelect(value);
  };

  const jenjangSelected = (value) => {
    setJenjangSelect(value);
  };

  const filteredData = Data.filter(
    (item) => item.subklas === filterSelect || filterSelect === ""
  ).filter((item) => item.jenjang === jenjangSelect || jenjangSelect === "");

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Ruang Lingkup LSP GKK</h1>

      <RuangLingkupFilter
        jenjangValue={jenjangSelected}
        filterValue={filterSelected}
        data={Data}
      />
      <RuangLingkupTable data={filteredData} />
    </section>
  );
};

export default RuangLingkupComponent;
