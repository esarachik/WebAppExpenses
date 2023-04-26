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
            date :Date ,
            paymentMethod :PaymentMethod ,
            category :Category ,
            description :Description ,
            currency :Currency ,
            amount :(Income) ? Income : Outcome,
            isIncome :(Income) ? true : false,
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