const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Load public static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Api routes
const api = require(path.join(__dirname, 'api/api'));
app.use('/api', api);
// get driver connection
const dbo = require("./db/conn");
 
// For the frontend build
app.use(express.static(path.join(__dirname, "build")));
// For the frontend routing
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});