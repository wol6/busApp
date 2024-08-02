import { busModel } from "../model/admin.js";
import { userModel } from "../model/user.js";

// user registeration 
export const signup = async (req, res) => {

    const { fullname, email, password, mobno } = req.body

    let existingUser = await userModel.find({ email: email })

    if (existingUser.length > 0) {
        return res.json({
            success: false,
            message: "email already exists"
        })
    }

    const userDetails = new userModel({
        fullname,
        email,
        password,
        mobno
    })

    const saveDetails = await userDetails.save()

    res.json({
        success: true,
        saveDetails
    })

}

export const signIn = async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.find({ email: email })

    if (user <= 0) {
        return res.json({
            success: "false",
            message: 'user not found'
        })
    }

    if (user[0].password == password) {
        return res.json({
            success: true,
            user
        })
    }
    console.log('true')
    return res.json({
        success: false,
        message: 'Invalid Credential'
    })


}

export const userTicket = async (req,res)=>{
    const {id} = req.body
    try {
        const ticket = await userModel.findOne({_id:id}).populate('ticket')
        const busInfo = await busModel.findOne({_id:ticket._id}).populate('busId')
        res.json({
            success:true,
            ticket,
        })
        
    } catch (error) {
        res.json(error)
    }
        
}