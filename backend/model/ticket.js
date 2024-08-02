import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({
    busName:{
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
    orderId:{
        type:String,
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    selectedSeat:[],

})

export const ticketModel = mongoose.model('ticket_details',ticketSchema)