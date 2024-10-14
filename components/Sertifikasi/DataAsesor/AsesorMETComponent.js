import React, { useEffect, useState } from "react";

const AsesorMETComponent = () => {
  const tableHead = (
    <thead style={{ color: "white", backgroundColor: "#00005e" }}>
      <tr>
        <th
          style={{
            border: "1px solid black",
            textAlign: "center",
            padding: "1px 15px",
          }}
        >
          No
        </th>
        <th
          style={{
            border: "1px solid black",
            textAlign: "center",
          }}
        >
          Nama
        </th>
        <th
          style={{
            border: "1px solid black",
            textAlign: "center",
            padding: "3px 15px",
          }}
        >
          ID Asesor
        </th>
        <th
          style={{
            border: "1px solid black",
            textAlign: "center",
            padding: "3px 15px",
          }}
        >
          Jabker SKK
        </th>
      </tr>
    </thead>
  );

  const [data, setData] = useState(null);

  useEffect(() => {
    // Your API URL
    const apiUrl = "https://siki.pu.go.id/siki-api/v2/asesor-lsp";

    // Your token value
    const token =
      "f3332337ac671c33262198340c2f7b579f7843775ecc425107f086956cbb2b1a9e96b0cc6f643d24";

    // Fetch data from the API
    const fetchDataAsesorLPJK = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            token: token,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setData(result.data);
          //   console.log(result.data.length);
          //   console.log(result.data[0]);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchDataAsesorLPJK();
    // fetchDataAsesorBNSP();
  }, []);

  return (
    // <div>
    //   {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    // </div>
    <div>
      <section
        className="pricing-area pt-100 pb-70"
        style={{
          maxWidth: "1320px",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <h1 style={{ paddingBottom: "10px", paddingTop: "30px" }}>
          Data Asesor LSP Gatensi Karya Konstruksi
        </h1>
        {data ? (
          <table
            style={{
              width: "auto",
              // margin: "auto"
            }}
          >
            {tableHead}
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{ border: "1px solid black", textAlign: "center" }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "3px 15px",
                    }}
                  >
                    {item.nama}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "3px 15px",
                      fontFamily: "serif",
                      //   textAlign: "center",
                    }}
                  >
                    {item.id_asesor}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      padding: "3px 15px",
                      fontFamily: "serif",
                      //   textAlign: "center",
                    }}
                  >
                    {item.skk_asesor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Loading...</div>
        )}
      </section>
    </div>
  );
};

export default AsesorMETComponent;
