const transactionSchema = require('../models/transaction')

module.exports.Maptransactions = function (inputRecords) {
    let outputRecords = []

    inputRecords.forEach(element => {
        const {Date,          
            PaymentMethod,
            Category,
            Description,
            Currency,
            Outcome,
            Income} = element

        outputRecords.push({
            Date :Date ,
            PaymentMethod :PaymentMethod ,
            Category :Category ,
            Description :Description ,
            Currency :Currency ,
            Amount :(Income) ? Income : Outcome,
            IsIncome :(Income) ? true : false,
        })
    });
    
    return outputRecords 
}

module.exports.GetAllTransactions = function(){
    transactionSchema.find()
}

module.exports.GetTransactionById = function(id){
    transactionSchema.findById(id)
}

module.exports.SaveTransaction = function(transaction){
    transaction.save()
}