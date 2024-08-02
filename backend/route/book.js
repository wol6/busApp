import express from 'express'
import { bookSeat, search_bus, selected_bus } from '../controller/book.js'
import { payment,verifyPayment } from '../controller/payments.js'


const ticket_route = express.Router()

ticket_route.post('/searchbus',search_bus)
ticket_route.get('/selectedbus/:id',selected_bus)
ticket_route.post('/bookseat',bookSeat)
//payment
ticket_route.post('/razorpay',payment)
ticket_route.post('/verifypay',verifyPayment)

export default ticket_route