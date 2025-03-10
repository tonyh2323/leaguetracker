const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const config = {
    user: 'root',
    password: 'root',
    server: 'localhost', // For example, localhost
    database: 'leaguetracker',
    options: {
        encrypt: true, // Use this if your SQL Server is on Azure
        trustServerCertificate: true // Change to false for production
    }
};

//transactions for the user table

//add a user
app.post("/add_user", (req, res) => {
    const sql =
      "INSERT INTO user (`Username`,'PasswordHash', 'PasswordSalt', 'HashAlgorithId', `Email`) VALUES (?, ?, ?, ?, ?)";
    const values = [req.body.username, req.body.passwordhash, req.body.passwordsalt, req.body.hashalgorithid,req.body.email];
    db.query(sql, values, (err, result) => {
      if (err)
        return res.json({ message: "Something unexpected has occured" + err });
      return res.json({ success: "User added successfully" });
    });
  });




// Start the server
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});