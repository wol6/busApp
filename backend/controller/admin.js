import { busModel } from "../model/admin.js";


export const add_bus_schedule = async (req,res)=>{
    const {busname,from,to,date,time,price}=req.body

    // const existingSchedule = await busModel.find({busname:busname})

    // if(existingSchedule.length > 0)
    //     {
    //         if(existingSchedule[0].time==time)
    //             {
    //                 res.json({
    //                     success:false,
    //                     message:"alrerady exists"
    //                 })
    //             }
    //     }
    
    const newSchedule = new busModel({
        busname,
        from,
        to,
        date,
        time,
        price
    })

    const busDetails = newSchedule.save()

   return res.json({
        success:true,
        busDetails
    })

}

export const view_bus = async (req,res)=>{
    
    const buses = await busModel.find()

    return res.json({
        success:true,
        buses
    })
}

export const delete_bus = async (req,res)=>{
    const deleteId = req.params.id
    // console.log(deleteId)
   try{
    const deleteData = await busModel.deleteOne({_id:deleteId})
    res.status(200).json({
        message:"Item Deleted",
        deleteData
    })
   }catch(error){
    res.json({
        s: false, 
        error,
    })
   }
}

export const edit_bus = async (req,res)=>{

    const id = req.params.id
    const bus = await busModel.find({_id:id})

    res.json({
        success:true,
        bus
    })

}
