const transactionSchema = require('../models/transaction')

module.exports.Maptransactions = function (inputRecords, isImport) {
    let outputRecords = []

    if(isImport)
    {      
        inputRecords.forEach((element,index) => {
            const {Date,          
                PaymentMethod,
                Category,
                Description,
                Currency,
                Outcome,
                Income,
                AutoIncrementId
            } = element
                    
            outputRecords.push({            
                date :Date ,
                paymentMethod :PaymentMethod ,
                category :Category ,
                description :Description ,
                currency :Currency ,
                amount :(Income) ? Income : Outcome,
                isIncome :(Income) ? true : false,
                autoIncrementId: AutoIncrementId 
                
            })
        });
    }else{
        inputRecords.forEach((element,index) => {
            const {Date,          
                PaymentMethod,
                Category,
                Description,
                Currency,
                Outcome,
                Income
            } = element
           
            outputRecords.push({            
                date :Date ,
                paymentMethod :PaymentMethod ,
                category :Category ,
                description :Description ,
                currency :Currency ,
                amount :(Income) ? Income : Outcome,
                isIncome :(Income) ? true : false                                
            })
        });
    }
        
    return outputRecords 
}

module.exports.GetAllTransactions = function(){
    return transactionSchema.find()
}

module.exports.GetTransactionsFromTo = function(from,to){
    return transactionSchema
    .find({
        date: {
            $gte: from, 
            $lt: to
        }
    })
    .sort({
        autoIncrementId:1
    })
}

module.exports.GetTransactionById = function(id){
   return transactionSchema.findById(id)
}

module.exports.SaveTransaction = function(transaction){
    try{
      return transaction.save()
    }
    catch(Error)
    {
        console.log(Error)
        console.log(transaction)
    }
}