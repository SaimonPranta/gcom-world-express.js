const express = require("express");
const cors = require("cors");
require("./src/db/connection");

const app = express();
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
  res.send("server are online");
});

app.use("/public", require("./src/routes/public/public"));
app.use("/user", require("./src/routes/user/user"))



app.listen(port, () => {
  console.log(`Server are listening on PORT ${port}`);
});
