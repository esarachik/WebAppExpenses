const transactionSchema = require('../models/transaction')

module.exports.Maptransactions = function (inputRecords) {
    let outputRecords = []

    inputRecords.forEach((element,index) => {
        const {Date,          
            PaymentMethod,
            Category,
            Description,
            Currency,
            Outcome,
            Income} = element

        outputRecords.push({
            id: ++index,
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

module.exports.GetTransactionsFromTo = function(from,to){
    return transactionSchema.find({
        date: {
            $gte: from, 
            $lt: to
        }
    })
}

module.exports.GetTransactionById = function(id){
   return transactionSchema.findById(id)
}

module.exports.SaveTransaction = function(transaction){
    return transaction.save()
}