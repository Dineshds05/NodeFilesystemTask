const express = require("express")
const fs =require("fs")
const path=require("path")
const app=express();
app.use(express.json())
const dirpath=path.join(__dirname,"timestamps");

app.get("/timestamp",(req,res)=>{
        const date=new Date()
        const timestamps=date.toUTCString().slice(0,-3);
        fs.writeFileSync(`${dirpath}/current-date-time.txt`,timestamps,(err)={
            if(err){
                res.status(400).json({message:"error writting timestamp"})
            }
        })
        res.sendFile(path.join(dirpath,"current-date-time.txt"))
})

//server created
const PORT=9000;
app.listen(PORT,()=>console.log(`server started in localhost:${PORT}`))









