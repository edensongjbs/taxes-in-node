const createDocsFromDir = require('./convertFromFile')
const createDoc = require('./createDoc')
const Expense = require('../../models/Expense.model')
const dbInfo = require('../../index')

const subdir = 'expenses/'
console.log('Starting')

createDocsFromDir(dbInfo.path+subdir, createDoc, Expense).catch(console.error)