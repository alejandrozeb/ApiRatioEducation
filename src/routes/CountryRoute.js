const {Router}= require("express");
const router = Router();
const controllers = require('../controllers/index');

/* router.get("/all", (req,res)=>{
    res.json({"Countries": "Bolivia" });
}); */

router.get("/all", controllers.countryController.allCountries);

module.exports=router;