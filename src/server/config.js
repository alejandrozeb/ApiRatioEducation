const express = require("express");
//import Controllers from "../src/controllers/index";
const routes = require("../routes/index");
const db = require("../models/index");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
db.sequelize.sync();

routes(app);

module.exports =  app;

