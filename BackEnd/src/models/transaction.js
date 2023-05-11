
const mongoose = require("mongoose")
const transactionSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    isIncome: {
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('transaction', transactionSchema)