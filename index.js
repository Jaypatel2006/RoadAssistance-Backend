import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import {User} from "./models/user.js"


dotenv.config({
    path:'./.env'
})
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to server")
})

mongoose.connect(`${process.env.MONGOURL}`).then((res)=>{
    console.log("Connected To Database");
})


app.listen(process.env.PORT,()=>{
    console.log("app is started at port ",process.env.PORT)
})

