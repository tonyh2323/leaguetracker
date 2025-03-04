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

// Start the server
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});