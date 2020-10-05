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

ExpenseTypeSchema.statics.accessByChar = (catChar, callBack) => {
    // console.log(catChar)
    ExpenseType.findOne({categoryChar:catChar}, (e, i) => {
        // console.log('inside callback', e, i)
        console.log('You have selected category:', i)
        callBack(e, i)
    })
}


const ExpenseType = mongoose.model('ExpenseType', ExpenseTypeSchema)
module.exports = ExpenseType 