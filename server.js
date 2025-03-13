const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "leaguetracker",
});




app.post("/add_user", (req, res) => {
  console.log('attempting to add a user');
  const sql =
    "INSERT INTO user (`first`,`email`) VALUES (?, ?)";
  const values = [req.body.first, req.body.email];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err });
    return res.json({ success: "Student added successfully" });
  });
});

app.get("/get_user/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM user WHERE `id`= ?";
  db.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" });
    return res.json(result);
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Reporting from server file: listening on port ${port} `); 
});
