const express = require("express");
//import Controllers from "../src/controllers/index";
const routes = require("../routes/index");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

routes(app);

module.exports =  app;

