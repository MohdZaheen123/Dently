const mongoose = require('mongoose')

const dentistSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, ' Dentist name required']
    },
    qualification: {
        type: String,
        required: [true, ' Qualification of doctor required']
    },
    yoe: {
        type: Number,
        required: [true, "Years of experience required"]
    },
    clinic_name: {
        type: String,
        required: [true, "Clinic name is required"]
    },
    image: String,
    address: {
        type: String,
        required: [true, "Address is required"]
    }
})

const dentistModel = mongoose.model('dentists', dentistSchema)
module.exports = dentistModel