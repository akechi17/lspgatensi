import mysql from "mysql";

const mygatensidb = mysql.createConnection({
  host: "147.139.174.124",
  user: "mygatensi_select",
  password: "LSP@gkk2022",
  database: "mytest",
});

mygatensidb.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MyGatensi database");
});

export default mygatensidb;
