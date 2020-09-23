const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = require('date-and-time')

const ExpenseSchema = new Schema({
    status:String,
    date: Date,
    description: String,
    debit: Schema.Types.Decimal128,
    credit: Schema.Types.Decimal128,
    business: Boolean,
    category: Schema.Types.ObjectId
})

ExpenseSchema.methods.newFromJson = function(json) {
        this.status = json.Status
        console.log('parsing a date', this )
        this.date = new Date(date.parse(json.Date, 'MM/DD/YYYY'))
        this.debit = parseFloat(json.Debit)
        this.credit = parseFloat(json.Credit)
        this.business = json.business
        this.category = json.category
        this.save(err => console.log(err))
        return this
}

module.exports = mongoose.model('Expense', ExpenseSchema)