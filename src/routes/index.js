const express = require("express");
const router = express.Router();

const Routes = require("../routes/Routes.index");

module.exports = (app) =>{
    app.use("/home", Routes.HomeRoute);
    app.use("/country", Routes.CountryRoute);
    app.use(router);
}



