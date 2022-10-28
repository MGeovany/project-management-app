const express = require('express')
var mongoose = require('mongoose')
var app = express()
var cors=require('cors')
const bodyParser= require('body-parser')

//Rutas
const userRoute=require ('./Routes/userRoute');

//permisos de cors
app.use(
    cors({
      origin: "*",
    })
  );

//coneccion a base de datos
app.listen(5000, () => console.log("App escuchado en el puerto 5000"));
mongoose
  .connect(
    "mongodb+srv://JGalindo:Galindo98@cluster0.3ylgj.mongodb.net/project?retryWrites=true&w=majority"
  )
  .catch((error) => handleError(error));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/project", userRoute);
