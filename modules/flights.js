const mongoose = require('mongoose')

const FlightSchema = new mongoose.Schema({
    date:{
        type: Date,
    },
    airline:{
        type:String,
        required:[true, 'must provide airline name'],
        trim:true,
        maxlength:[20, 'name can not be more than 20 charecters']
    },
    departure:String,
    arrival:String,
    price:Number
})

module.exports = mongoose.model('FlightTbl', FlightSchema)