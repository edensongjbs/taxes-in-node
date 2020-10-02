// const Model = require("../../models/Expense.model")
const csv=require('csvtojson')


const createDoc = (rec, Model) => {
    console.log(rec)
    csv()
    .fromFile(rec)
    .then((jsonAr)=>{
      jsonAr.forEach( jsonObj => {
        model = new Model
        model.newFromJson(jsonObj)
      })
    })
}

module.exports = createDoc