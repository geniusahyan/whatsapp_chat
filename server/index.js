import express from "express";
import dbconnect from "./DB/connect.js";
import route from "./routes/route.js";

const app = express();

app.get('/', function (req, res) {
  res.send('world')
})
app.use('/', route)
dbconnect();
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})