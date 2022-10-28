const express = require('express')
const userController = require('../Controllers/userController')
const userRoute= express.Router();

userRoute.post("/register",userController.userRegister);
userRoute.post("/authenticate",userController.userAuthenticate);

module.exports = userRoute;