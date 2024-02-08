import express from "express";
import dbconnect from "./DB/connect.js";

const app = express();

app.get('/', function (req, res) {
  res.send('world')
})
dbconnect();
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})