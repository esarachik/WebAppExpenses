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
    return transactionSchema.find()
}

module.exports.GetTransactionById = function(id){
   return transactionSchema.findById(id)
}

module.exports.SaveTransaction = function(transaction){
    return transaction.save()
}