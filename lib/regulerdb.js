import mysql from "mysql";

const regulerdb = mysql.createConnection({
  host: "103.150.87.31",
  user: "lspgatensi_admin_reguler",
  password: "T^W5$^1x1Qy^",
  database: "lspgatensi_reguler",
});

regulerdb.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to Reguler database");
});

export default regulerdb;
