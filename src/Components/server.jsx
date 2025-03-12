const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const app = express();
//path.resolve()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 3306;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "leaguetracker",
});



// Start the server
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Setting Up Database Connection
sql.connect(config).then(pool => {
  if (pool.connected) {
      console.log('Connected to SQL Server');
  }
}).catch(err => {
  console.error('Database Connection Failed: ', err);
});



app.post("/add_user", (req, res) => {
  const sql =
    "INSERT INTO user (`first`,`email`) VALUES (?, ?)";
  const values = [req.body.first, req.body.email];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student added successfully" });
  });
});
