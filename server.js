const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const whitelist = ['https://cn*'];

const corsOptions = {
  origin: function (origin, callback) {
      if (!origin) {
          return callback(null, true);
      }

      if (whitelist.indexOf(origin) === -1) {
          var msg = 'The CORS policy for this site does not ' +
              'allow access from the specified Origin.';
          return callback(new Error(msg), false);
      }
      return callback(null, true);
  }
}

use(cors(corsOptions));

express()
  .use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));