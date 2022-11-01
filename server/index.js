require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const PORT = process.env.PORT || 3000;
const BDURL = process.env.NODE_MONGO_URL;
const userRoute = require("./src/Routes/userRoute");
const verifyToken=require('./src/Middelware/validate-token.js')
const protected=require('./src/Routes/protectedRoute')

app.use(
  cors({
    origin: "*",
  })
);
app.listen(PORT, () =>
  console.log("-> Corriendo en: 🛫 \nhttp://localhost:" + PORT)
);
mongoose.connect(BDURL).catch((error) => console.log(error));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/project_flow", userRoute);
app.use("/project_flow",verifyToken,protected)