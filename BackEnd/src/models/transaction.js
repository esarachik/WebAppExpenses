
const mongoose = require("mongoose")
const counter = require("./counter")

const transactionSchema = mongoose.Schema({
    autoIncrementId: {
        type: Number,
        unique: true
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
        required: false
    },
    isIncome: {
        type: Boolean,
        required: true
    }

});


// transactionSchema.pre('save', async function (next) {
//     try {
//         const doc = this;
//         await counter.findOneAndUpdate(
//             { _id: 'transactionSchema' },
//             { $inc: { seq: 1 } },
//             { new: true, upsert: true })
//         .then((counter) => {
//             doc.autoIncrementId = counter.seq;
//             next();
//         })
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = mongoose.model('transaction', transactionSchema)