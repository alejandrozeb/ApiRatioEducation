const {Router}= require("express");
const router = Router();

router.get("/all", (req,res)=>{
    res.json({"Countries": "Bolivia" });
});

module.exports=router;