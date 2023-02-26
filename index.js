const express = require("express");
require("./src/db/connection");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("server are online");
});

app.listen(port, () => {
  console.log(`Server are listening on PORT ${port}`);
});
