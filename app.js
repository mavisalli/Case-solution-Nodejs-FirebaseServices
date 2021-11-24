const express = require("express");
const morgan = require("morgan");

const authRoute = require("./routes/authRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/auth", authRoute);

app.listen(5000, () =>
  console.log("App is listening on url http://localhost:5000")
);
