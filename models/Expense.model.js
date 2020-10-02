const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = require('date-and-time')
const ExpenseType = require('./ExpenseType.model')
const PaymentSource = require('./PaymentSource.model')

const ExpenseSchema = new Schema({
    status:String,
    date: Date,
    description: String,
    debit: Schema.Types.Decimal128,
    credit: Schema.Types.Decimal128,
    coeff:{type: Schema.Types.Decimal128, default:1.0},
    business: Boolean,
    category: {type:Schema.Types.ObjectId, ref: 'ExpenseType'},
    paymentSource: {type:Schema.Types.ObjectId, ref: 'PaymentSource'},
    notes:String
})

ExpenseSchema.methods.setCategory = function(json) {

    console.log('inside set category', json)
    
    ExpenseType.findOne({categoryChar:json}, (err, cat) => {
        this.updateOne({category:cat}, () => console.log('completed', cat || err))
    })._id
}

ExpenseSchema.methods.setPaymentSource = function(json) {
    console.log('inside setPaymentSource', json)
    PaymentSource.findOne({paymentChar:json}, (err, source) => {
        this.updateOne({paymentSource:source}, () => console.log('completed', source || err))
    })
}

ExpenseSchema.methods.setBusinessBoolean = function(json) {
    return !(json==="FALSE")
}

ExpenseSchema.methods.newFromJson = function(json) {
        this.status = json.Status
        console.log('inside the method...', json )
        this.date = new Date(date.parse(json.Date, 'MM/DD/YYYY'))
        this.debit = parseFloat(json.Debit) || parseFloat(json.Credit)
        this.business = this.setBusinessBoolean(json.business)
        this.setCategory(json.category)
        this.setPaymentSource(json.paymentSource)
        this.notes = json.notes
        this.coeff = json.coeff || 1.0
        console.log(this, json)
        this.save()
        return this
}

module.exports = mongoose.model('Expense', ExpenseSchema)