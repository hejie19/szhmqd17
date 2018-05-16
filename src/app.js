const express= require("express");
const path=require("path");
// 创建服务
const app =express();

app.use(express.static(path.join(__dirname,"statics")))

const accountRouter=require(path.join(__dirname,"./routers/accountrouter.js"))
app.use("/account",accountRouter)


app.listen(8899,"127.0.0.1",err=>{
    if(err){
        console.log(err)
    }
    console.log("OK")
})