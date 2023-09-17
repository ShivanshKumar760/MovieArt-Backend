//Database code

// console.log(process.env)

import app from "./server.js";
import dotenv from "dotenv";
dotenv.config();
import mongodb from "mongodb";
// import ReviewsDAO from "./dao/reviewsDAO.js";


const MongoClient = mongodb.MongoClient;
const mongo_username=process.env["MONGODB_USER"];

export const mongo_password=process.env["MONGODB_PASS"];
console.log(process.env.MONGODB_PASS);

// const uri=`mongodb+srv://shivanshkumar760:${mongo_password}@cluster0.p1gnucw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;
const uri=`mongodb+srv://${mongo_username}:${mongo_password}@cluster0.p1gnucw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

const port = 8000;
//connect to MongoDB

MongoClient.connect(
    uri,
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true
    }
).catch(err=>{
    console.error(err.stack);
    process.exit(1);
}
).then(async client =>{
    app.listen(port,()=>{
        console.log(`listening on port ${port}`);
    });
})