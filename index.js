const express = require("express");
const config =  require("./src/server/config.js");


const app = config(express());


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
