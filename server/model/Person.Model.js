import mongoose from "mongoose";

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email_verified:{
        type: Boolean,
        required: true
    },
    picture:{
        type: String,
    },
    azp:{
        type: String,
    },
    sub:{
        type: String,
    },
    iss: { 
        type: String,
    },
    aud: { 
        type: String,
    },
    iat: { 
        type: Number,
    },
    exp: { 
        type: Number,
    },
    nbf: { 
        type: Number,
    },
    jti: { 
        type: String,
    },
    iat:{
        type: Number,
        default: () => Math.floor(Date.now()/1000)
    }
})

const person = mongoose.model("person", personSchema);
export default person;