

const mysql = require("mysql");

const express = require("express");

const cors = require("cors");
const path = require("path");
const app = express();

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

app.post("/add_user", (req, res) => {
  res.json({ message: "Hello from post!" });
  /* const values = [req.body.first];
   const {first} = [register.body.first];
   const sql ="INSERT INTO user (`first`) VALUES (?)";*/
 
  db.query(sql, [first], (err, result) => {
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


