import express from "express";
import dbconnect from "./DB/connect.js";
import route from "./routes/route.js";
import cors from "cors";

const app = express();

app.get('/', function (req, res) {
  res.send('world')
})

app.use(cors());
app.use('/', route)
dbconnect();
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})