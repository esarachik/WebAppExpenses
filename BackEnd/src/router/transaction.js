const express = require('express')
const transactionSchema = require('../models/transaction')
const transactionHelper = require('../helpers/transactionHelper')

const router = express.Router()

//routes
router.get('/transactions', (req, res) => {
    transactionHelper.GetAllTransactions()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router