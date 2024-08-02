import { busModel } from "../model/admin.js"
import { ticketModel } from "../model/ticket.js"
import { userModel } from "../model/user.js"



export const search_bus = async (req,res)=>{
    const {from,to,date} = req.body

    // const filter_search = await busModel.find()

    // return res.json({
    //     success:true,
    //     filter_search
    // })

    const filter_bus = await busModel.find({from:from,to:to,date:date})
    
    if(filter_bus.length > 0)
        {
            return res.json({
                success:true,
                filter_bus
            })
        }

        return res.json({
            success:false,
            message:"bus not found"
        })
      
}

export const selected_bus = async (req,res)=>{
    const id = req.params.id

    const busDetails = await busModel.find({_id:id})

    return res.json({
        success:true,
        busDetails
    })
}

export const bookSeatNow = async (req,res)=>{
    const {selectedSeats,busId,userId} = req.body
    console.log(selectedSeats)

    const bus = await busModel.findById({_id:busId})
    console.log(bus)
    res.json({
        bus
    })

    
    // {$push:{seats:{seatno:seatNumber,status:true}}}
    console.log(selectedSeat)

    const userSeat = await userModel.updateOne({_id:userId},
        {$push:{reservedseat:{$each:selectedSeats}}}
    )

    console.log(userSeat)
    const userBus = await userModel.updateOne({_id:userId},
        {$push:{bus:busId}}
    )


}

//booking seat
export const bookSeat = async (req,res)=>{
    const {userId,busItems,busId,selectedSeat,orderId,totalPrice} = req.body
    console.log(busItems)

    const userTicket =new ticketModel({
        busName:busItems.busname,
        from:busItems.from,
        to:busItems.to,
        date:busItems.date,
        time:busItems.time,
        orderId,
        totalPrice,
        selectedSeat
    })
    // console.log(userTicket)
    const ticketDetails = await userTicket.save()

    const existingUser = await userModel.find({_id:userId})
    existingUser[0].ticket.push(ticketDetails._id)
    const newData = await existingUser[0].save()

    const seats = await busModel.updateOne({_id:busId},
        {$push:{seats:{$each:selectedSeat}}}
    )

    return res.json({
        success:true,
        newData,
        seats
    })

}




