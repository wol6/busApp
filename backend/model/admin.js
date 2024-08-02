import mongoose from "mongoose";

const busSchema = mongoose.Schema({
    busname:{
        type:String,
        required:true
        
    },
    from:{
        type:String,
        required:true
        
    },
    to:{
        type:String,
        required:true
        
    },
    date:{
        type:String,
        required:true
        
    },
    time:{
        type:String,
        required:true
        
    },
    price:{
        type:Number,
        required:true
        
    },
    seats:[]
})

export const busModel = mongoose.model('bus_schedule',busSchema)