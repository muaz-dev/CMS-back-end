const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

const usersRoutes = require("./routes/users");
const tinyRoutes = require("./routes/tiny");
const quillRoutes = require("./routes/quill");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", usersRoutes.routes);
app.use("/api", tinyRoutes.routes);
app.use("/api", quillRoutes.routes);

var port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log("App is listening on url http://localhost:" + port)
);

// app.listen(config.port, () =>
//   console.log("App is listening on url http://localhost:" + config.port)
// );
