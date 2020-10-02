const createDocsFromDir = require('./convertFromFile')
const createDoc = require('./createDoc')
const ExpenseType = require('../../models/ExpenseType.model')
const dbInfo = require('../../index')

const subdir = 'expense-types/'

createDocsFromDir(dbInfo.path+subdir, createDoc, ExpenseType).catch(console.error)

dbInfo.mongoose.disconnect()