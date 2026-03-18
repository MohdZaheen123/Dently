const mongoose = require('mongoose')

const appoinmentSchema = mongoose.Schema({
    patient_name: {
        type: String,
        required: [true, 'Patient name is required']
    },
    dentist_name: {
        type: String,
        required: [true, 'Dentist name is required']
    },
    gender: {
        type: String,
        required: [true, ' Gender of patient is required']
    },
    age: {
        type: Number,
        required: [true, "age is required"]
    },
    clinic_name: {
        type: String,
        required: [true, "Clinic name is required"]
    },
    appoinment_date: {
        type: String,
        required: [true, "Appoinment date is required"]
    }
})

const appoinmentModel = mongoose.model('appoinments', appoinmentSchema)
module.exports = appoinmentModel