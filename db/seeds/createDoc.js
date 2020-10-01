// const Model = require("../../models/Expense.model")
const csv=require('csvtojson')


const createDoc = (rec, Model) => {
    console.log(rec)
    csv()
    .fromFile(rec)
    .then((jsonAr)=>{
      // console.log(jsonAr)
      jsonAr.forEach( jsonObj => {
        console.log("outside method...", jsonObj.category)
        // model = new Model
        // const mod = model.newFromJson(jsonObj)
        // console.log(mod)
      })
    })
}

module.exports = createDoc