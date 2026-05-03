import dotenv from "dotenv";
dotenv.config({quiet:true})

import express from "express"
import {connectDB} from "./config/database.js"
import BookRoutes from "./routes/book-routes.js"
const app = express();
const PORT = process.env.PORT || 9000;

//! DATABSE CONNECTION
connectDB();

//! MIDDLEWARES
app.use(express.json());

//! ROUTES


app.use("/v1/api",BookRoutes);


app.listen(PORT,(err)=>{
    if(err) console.log(err)
    
    console.log("server started at PORT",PORT)
})