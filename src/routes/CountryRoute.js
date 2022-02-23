const {Router}= require("express");
const router = Router();

router.get("/all", (req,res)=>{
    res.send("Countries");
});

module.exports=router;