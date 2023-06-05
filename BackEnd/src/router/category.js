const express = require('express')
const categoryHelper = require('../helpers/categoryHelper')
const categorySchema = require('../models/category')

const router = express.Router()

//routes
router.get('/categories', (req, res) => {
    categoryHelper.GetAllCategories()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.post('/categories', (req, res) => {
    categoryHelper.SaveCategory(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.put('/categories/:id', (req, res) => {
    const { name, age, email } = req.body
    const { id } = req.params
    categorySchema
        .updateOne({ _id: id }, { $set: { name, age, email } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

router.delete('/categories/:id', (req, res) => {
    const { id } = req.params
    categorySchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router