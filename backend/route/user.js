import express from 'express'
import { signIn, signup, userTicket } from '../controller/user.js'

const route = express.Router()

route.post('/signup',signup)
route.post('/signin',signIn)

route.post('/myticket',userTicket)


export default route