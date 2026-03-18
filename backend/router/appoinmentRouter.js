const express = require('express')
const { getAllAppoinment,createAppoinment,updateAppoinment,deleteAppoinment } = require('../controller/appoinmentController')


const appoinmentRouter = express.Router()


appoinmentRouter.get('/allappoinments', getAllAppoinment)

appoinmentRouter.post('/createappoinment', createAppoinment)

appoinmentRouter.put('/updateappoinment/:id', updateAppoinment)

appoinmentRouter.delete('/deleteappoinment/:id', deleteAppoinment)

module.exports = appoinmentRouter