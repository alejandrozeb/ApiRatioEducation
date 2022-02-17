const express = require("express");
//import Controllers from "../src/controllers/index";
const routes = require("../routes/index");

module.exports = app =>{
  app.use(express.urlencoded({extended:false}));
  app.use(express.json());

  routes(app);

  return app;
}

