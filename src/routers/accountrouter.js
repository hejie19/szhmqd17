const express=require("express");
const path=require("path");

const accountRouter=express.Router();
const accountlogin=require(path.join(__dirname,"../controllers/controllerslogin.js"))
accountRouter.get("/login",accountlogin.login)
accountRouter.get("/vcode",accountlogin.img)
accountRouter.get("/register",accountlogin.register)

module.exports=accountRouter;
