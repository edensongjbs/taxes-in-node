const createDocsFromDir = require('./convertFromFile')
const createDoc = require('./createDoc')
const PaymentSource = require('../../models/PaymentSource.model')
const dbInfo = require('../../index')

const subdir = 'payment-sources/'

createDocsFromDir(dbInfo.path+subdir, createDoc, PaymentSource).catch(console.error)