
const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
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

module.exports = mongoose.model('transaction', userSchema)