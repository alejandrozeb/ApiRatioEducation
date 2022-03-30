const {Router}= require("express");
//const db = require("../db/config");
const {Client} = require('pg');
const router = Router();
const {Sequelize} = require('sequelize'); 
const keys = require('../database/');

router.get("/", (req,res)=>{
    res.send('Hello World');
});

module.exports=router;