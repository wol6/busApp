import express from 'express'
import { add_bus_schedule, delete_bus, edit_bus, view_bus } from '../controller/admin.js'

const admin_route = express.Router()

admin_route.post('/addbus',add_bus_schedule)
admin_route.get('/viewbus',view_bus)
admin_route.delete('/deletebus/:id/',delete_bus)
admin_route.get('/editbus/:id/',edit_bus)


export default admin_route