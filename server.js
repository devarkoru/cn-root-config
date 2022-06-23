const express = require("express");
const cors = require('cors')
const path = require("path");
const PORT = process.env.PORT || 5000;

var app = express()

app.use(cors())

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 80')
})

app.use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));