import express from 'express'
import mongoose from 'mongoose'
import route from './route/user.js'
import cors from 'cors'
import admin_route from './route/admin.js'
import ticket_route from './route/book.js'


const app =express()

app.use(express.json())
app.use(cors())

app.use('/',route) 
app.use('/',admin_route) 
app.use('/',ticket_route) 


mongoose.connect('mongodb://localhost:27017/busapp').then(()=>{
    app.listen(8080,()=>{
        console.log('database connected')
    })
}).catch((err)=>{
    console.log(err)
})
