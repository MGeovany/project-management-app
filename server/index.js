require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./src/Routes/userRoute");

const app = express();
const PORT = process.env.PORT || 3000;
const BDURL = process.env.NODE_GAL_UL;

app.use(
  cors({
    origin: "*",
  })
);
app.listen(PORT, () =>
  console.log("-> Corriendo en: 🛫 \nhttp://localhost:" + PORT)
);
mongoose.connect(BDURL).catch((error) => handleError(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/project", userRoute);
