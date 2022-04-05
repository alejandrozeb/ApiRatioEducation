const {Router}= require("express");
const router = Router();
const db = require("../database/config");

router.get("/", (req,res)=>{
   /*  db.CountryModel.findAll()
    .then(data=>{
        console.log(data+"data");
    })
    .catch(err=>{
        console.log(err);
    }); */

    res.send('Hello World');
});

module.exports=router;