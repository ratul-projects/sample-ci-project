const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  res
    .status(200)
    .json({ status: "success", message: "server is running properly" });
});
app.listen(3000, () => {
  console.log(`server is listneing on http://localhost:3000`);
});
