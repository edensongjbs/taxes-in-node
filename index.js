const express = require('express')
const mongoose = require('mongoose')
const createDocsFromDir = require('./db/seeds/convertFromFile')
const createDoc = require('./db/seeds/createDoc')
const Expense = require('./models/Expense.model')


const app = express()

const db = 'mongodb://localhost/taxes2019'

mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology: true})

const path = './csv/'

createDocsFromDir(path, createDoc, Expense).catch(console.error)