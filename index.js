
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})
const app = express()

app.get('/about',(req,res)=>{
    res.send("about request got")
})

mongoose.connect(`${process.env.MONGOURL}`)

app.listen(3001,()=>{
    console.log("app is started at port 3001")
})

