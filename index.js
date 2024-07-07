const express=require("express")

const app=express();
app.get("/login", (req , res)=>{
    res.json({
        msg:"api created succesfully "
    })
})


app.listen(20000, ()=>{
    console.log("server is running on port 20000")
})