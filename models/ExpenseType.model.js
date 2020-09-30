const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = require('date-and-time')

const ExpenseSchema = new Schema({
    status:String,
    date: Date,
    description: String,
    debit: Schema.Types.Decimal128,
    credit: Schema.Types.Decimal128,
    coeff:{type: Schema.Types.Decimal128, default:1.0},
    business: Boolean,
    category: Schema.Types.ObjectId,
    paymentSource: Schema.Types.ObjectId,
    notes:String
})

ExpenseSchema.methods.setCategory = function(json) {

}

ExpenseSchema.methods.setPaymentSource = function(json) {

}

ExpenseSchema.methods.newFromJson = function(json) {
        this.status = json.Status
        // console.log('parsing a date', this )
        this.date = new Date(date.parse(json.Date, 'MM/DD/YYYY'))
        this.debit = parseFloat(json.Debit) || parseFloat(json.Credit)
        this.business = json.business
        this.category = this.setCategory(json.category)
        this.paymentSource = this.setPaymentSource(json.paymentSource)
        this.notes = json.notes
        this.coeff = json.coeff || 1.0
        this.save()
        return this
}

module.exports = mongoose.model('Expense', ExpenseSchema)