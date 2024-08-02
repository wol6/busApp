import Razorpay from 'razorpay'
import shortid from 'shortid'
import crypto from 'crypto'

const  razorpay = new Razorpay({
    key_id: 'rzp_test_PDlpOczaqePKxE', 
    key_secret: 'ug2eaolbZqjAzmmejOvO7y3g',
  })

  export const  payment = async (req,res)=>{

    // const paymment_capture = true
    const {amount} = req.body
    const currency = 'INR'

    const options = {
        amount:(amount*100),
        currency,
        receipt:shortid.generate(),
        // paymment_capture
    }
    try{

        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id:response.id,
            currency:response.currency,
            amount:response.amount,
            msg:"true"
        })
    } catch(error){
        console.log(error)
    }
}

export const verifyPayment = async(req,res)=>{
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = await razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', 'ug2eaolbZqjAzmmejOvO7y3g')
      .update(body.toString())
      .digest('hex');
  
    if (expectedSignature === razorpay_signature) {
      res.json({
         success: true,
         orderId:razorpay_order_id })
    } else {
      res.json({ success: false })
    }
  
}