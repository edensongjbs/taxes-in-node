const express = require('express')
const mongoose = require('mongoose')



const app = express()

const db = 'mongodb://localhost/taxes2019'

mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology: true})

const path = './csv/'

// createDocsFromDir(path, createDoc, Expense).catch(console.error)

module.exports = {mongoose, app, path}
