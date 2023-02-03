var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err: Error | null) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");

    const sql = `CREATE TABLE feature_toggle (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      flag TEXT
   );`;

    db.run(sql, (err: Error | null) => {
      if (err) {
      } else {
        const sql = "INSERT INTO feature_toggle (flag) VALUES (?)";
        db.run(sql, ["@active-component"]);
      }
    });
  }
});

export = db;
