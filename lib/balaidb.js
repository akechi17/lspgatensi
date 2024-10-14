import mysql from "mysql";

const balaidb = mysql.createConnection({
  host: process.env.BALAI_HOST,
  user: process.env.BALAI_USER,
  password: process.env.BALAI_PASS,
  database: process.env.BALAI_DB,
});

balaidb.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to Balai database");
});

export default balaidb;
