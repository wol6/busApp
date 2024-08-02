import mongoose from "mongoose";

// required details to register on db 
const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobno:{
        type:String,
        required:true
    },
    ticket:[{type:mongoose.Types.ObjectId,ref:"ticket_details"}]
})

export const userModel = mongoose.model('user_details',userSchema)