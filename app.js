const express = require("express");
const app = express();

require("dotenv").config();
const { PORT } = process.env;
const port = PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
