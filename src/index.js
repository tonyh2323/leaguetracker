
const express = require("express");

const port = 3306;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
  
});
app.get("/api/hello", (req, res) =>{
  res.json({message: 'Hello from the API'});
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:', {port});
})

app.get('/cors', (req, res) => {
  res.send('This has CORS enabled 🎈')
})