const express = require("express");

const port = process.env.PORT || 3001;
const app = express();

app.get("/home.jsx", (req, res) => {
  res.json({ message: "Hello from server!" });
  
});

