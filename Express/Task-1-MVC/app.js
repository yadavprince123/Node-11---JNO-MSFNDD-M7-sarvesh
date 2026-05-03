import express from "express";
import routes from "./routes/routes.js"

const app = express();
const PORT = 9000;

//! middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

console.log("hii")
//! routes middleware
app.use("/v1/api",routes);

app.listen(PORT,(err)=>{
    if(err) console.log(err);
    console.log("Server started at port",PORT)
})