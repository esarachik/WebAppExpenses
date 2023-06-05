const express = require('express')
const transactionHelper = require('../helpers/transactionHelper')
const moment = require('moment')


const router = express.Router()

//routes
router.get('/transactions', (req, res) => {
    transactionHelper.GetAllTransactions()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.get('/transactions/:year(\\d{4}):month(\\d{2})', (req, res) => {
    try{
        const { year, month} = req.params
        const from = moment.utc(Date.UTC(+year, +month - 1, 1));
        const to =  moment.utc(Date.UTC(+year, +month, 1));
        transactionHelper.GetTransactionsFromTo( from,to)
            .then((data) =>
            {
                res.json(data)
            })
            .catch((error) =>             
            {
                res.json({ message: error })
            }
            )
    } catch(error) { 
        res
            .status(500)
            .json({ message: `ERROR:${error}` })
      }
})

module.exports = router