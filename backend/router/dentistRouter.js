const express = require('express')
const { getAllDentist,createDentist,updateDentist,deleteDentist } = require('../controller/dentistController')


const dentistRouter = express.Router()


dentistRouter.get('/alldentists', getAllDentist)

dentistRouter.post('/createdentist', createDentist)

dentistRouter.put('/updatedentist/:id', updateDentist)

dentistRouter.delete('/deletedentist/:id', deleteDentist)

module.exports = dentistRouter