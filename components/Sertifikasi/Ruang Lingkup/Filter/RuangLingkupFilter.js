import styles from "./filter.module.css";

const RuangLingkupFilter = (props) => {
  const subklasesArray = props.data.map((items) => items.subklas);
  const jenjangsArray = props.data.map((items) => items.jenjang);
  const subklases = [];
  const jenjangs = [];
  subklasesArray.forEach((item) => {
    if (!subklases.includes(item)) {
      subklases.push(item);
    }
  });
  jenjangsArray.forEach((item) => {
    if (!jenjangs.includes(item)) {
      jenjangs.push(item);
    }
  });

  // const handleSubklasValue = (event) => {
  //   props.filterValue(event.target.value);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.option}>
        <span className={styles.heading}>Pilih Subklas:</span>
        <select
          onChange={(event) => {
            props.filterValue(event.target.value);
          }}
          className={styles.select}
        >
          <option key="all" value="">
            Semua
          </option>
          {subklases.map((items) => (
            <option key={items}>{items}</option>
          ))}
        </select>
      </div>
      <div className={styles.option}>
        <span className={styles.heading}>Pilih Jenjang:</span>
        <select
          onChange={(event) => {
            // console.log(event.target.value);
            props.jenjangValue(event.target.value);
          }}
          className={styles.select}
        >
          <option key="all" value="">
            Semua
          </option>
          <option key={"1"}>1</option>
          <option key={"2"}>2</option>
          <option key={"3"}>3</option>
          <option key={"4"}>4</option>
          <option key={"5"}>5</option>
          <option key={"6"}>6</option>
          <option key={"7"}>7</option>
          <option key={"8"}>8</option>
          <option key={"9"}>9</option>
        </select>
      </div>
    </div>
  );
};

export default RuangLingkupFilter;
