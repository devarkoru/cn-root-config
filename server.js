const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, "dist/root-config")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist/root-config" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));