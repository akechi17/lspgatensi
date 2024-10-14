import React, { Component, useState } from "react";
import DataTUK from "./datatuk";

const FilteredComponent = () => {
  const [selectedType, setSelectedType] = useState(""); // State to store the selected type

  // Extract unique type values from DataTUK
  const typeOptions = [...new Set(DataTUK.map((item) => item.type))];

  // Function to handle type selection
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  // Filter the data based on the selected type
  const filteredData = DataTUK.filter(
    (item) => selectedType === "" || item.type === selectedType
  );

  return (
    <section className="pricing-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h1>Wilayah TUK</h1>
        </div>
        <div className="dropdown-container">
          <p>Pilih Wilayah:</p>
          <select
            className="option"
            id="typeFilter"
            onChange={handleTypeChange}
            value={selectedType}
          >
            <option value="">All</option>
            {typeOptions.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <ul className="item-container">
          {filteredData.map((item) => (
            <li className="item" key={item.id}>
              <h3>{item.name}</h3> <p>{item.lokasi}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilteredComponent;
