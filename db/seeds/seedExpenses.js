const createDocsFromDir = require('./convertFromFile')
const createDoc = require('./createDoc')
const Expense = require('../../models/Expense.model')
const dbInfo = require('../../index')

const subdir = 'expenses/'

createDocsFromDir(dbInfo.path+subdir, createDoc, Expense).catch(console.error)

// dbInfo.mongoose.disconnect()