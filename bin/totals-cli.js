const dbInfo = require('../index')
const Expense = require('../models/Expense.model')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

thePrompt = () => {
    readline.question('Which category do you want to total?', input => {
        if (input==="exit") {process.exit()}
        Expense.sumCategory(input)
        console.log('howdy!!!')
        thePrompt()
    })
}

thePrompt()