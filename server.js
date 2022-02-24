//nodejs
//import the modules
//require() is the predefined function used to import the modules
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");


//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop rest services


//enable the cors policy
app.use(cors());


//set the json as MIME Type
app.use(express.json());


//create the client object
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the client object
//by using ashokIT only we can connect to the database



//create the get request
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/redux-middleware?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("redux-middleware");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
});

//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});




























