const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.listen(5000, () =>
  console.log("App is listening on url http://localhost:5000")
);
