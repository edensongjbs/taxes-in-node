const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = require('date-and-time')

const ExpenseTypeSchema = new Schema({
    categoryName:String,
    categoryChar:String,
    description: {type:String, default:"A default expense description"}
})



ExpenseTypeSchema.methods.newFromJson = function(json) {
        this.categoryName = json.categoryName
        this.categoryChar = json.categoryChar
        this.save()
        return this
}

module.exports = mongoose.model('ExpenseType', ExpenseTypeSchema)