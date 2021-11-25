const express = require("express");
const morgan = require("morgan");

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDoc = YAML.load("./api.yaml");

const authRoute = require("./routes/authRoute");
const contentRoute = require("./routes/contentRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc));

app.use("/", contentRoute);
app.use("/auth", authRoute);

app.listen(5000, () =>
  console.log("App is listening on url http://localhost:5000")
);
