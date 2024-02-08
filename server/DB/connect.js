import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const url = process.env.DATABASES_URL;

const dbconnect = async ()=>{
    try {
        await mongoose.connect(url, { useUnifiedTopology:true});
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("connection failed", error);
    }
}

export default dbconnect;