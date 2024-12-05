const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    msg: "This is GET method",
  });
});

app.post("/", (req, res) => {
  res.json({
    msg: "This is POST Method",
  });
});

app.listen(3000);
