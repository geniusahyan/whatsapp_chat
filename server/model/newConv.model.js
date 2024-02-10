import mongoose from "mongoose";


const  newConvSchema = new mongoose.Schema({
    messageId:{
        type: String,
        required: true
    },
    senderId:{
        type: String,
        required: true
    },
    receiverId:{
        type: String,
        required: true
    },
    type:{
        type: String,
    },
    content:{
        type: String,
        required: true
    }},{
        timestamps:true
    })

    const newConv = mongoose.model('newConv', newConvSchema);

    export default newConv;