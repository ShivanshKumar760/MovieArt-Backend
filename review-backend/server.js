//main server 
import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js"

const app= express();
app.use(cors());//Middleware are the program that express is going to use to change how things work
app.use(express.json());//This will allow our server to accept json in the body of request

 
//inital route to get and send information

app.use("/api/v1/reviews", reviews);
//backup route
app.use("*",(req,res)=>res.status(404).json({error:"Not found"}));

export default app;
