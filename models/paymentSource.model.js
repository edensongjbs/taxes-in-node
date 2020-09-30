const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = require('date-and-time')

const PaymentSourceSchema = new Schema({
    paymentType:String,
    paymentChar:String,
    description:String
})



PaymentSourceSchema.methods.newFromJson = function(json) {
        this.paymentType = json.paymentType
        this.paymentChar = json.paymentChar
        this.description = json.description
        this.save()
        return this
}

module.exports = mongoose.model('PaymentSource', PaymentSourceSchema)