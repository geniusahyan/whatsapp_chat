import mongoose from "mongoose";

const url = "mongodb+srv://ahyan:whatsappahyan@whatsappchat.fxcgvrb.mongodb.net/?retryWrites=true&w=majority"

const dbconnect = async ()=>{
    try {
        await mongoose.connect(url, { useUnifiedTopology:true});
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("connection failed", error);
    }
}

export default dbconnect;