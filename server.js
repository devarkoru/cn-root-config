const express = require("express");
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 8080;

var app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    
    res.sendFile("index.html", { root: "dist" });

  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));