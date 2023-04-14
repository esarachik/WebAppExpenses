const readXlsxFile = require('read-excel-file/node');
const transactionHelper = require("./transactionHelper")

const schema = {
    'Fecha': {
        prop: 'Date',
        type: Date
    },
    'Mes': {
        prop: 'MonthText',
        type: String
    },
    'Año': {
        prop: 'Year',
        type: String
    },
    'Forma': {
        prop: 'PaymentMethod',
        type: String
    },
    'Categoria': {
        prop: 'Category',
        type: String
    },
    'Concepto': {
        prop: 'Description',
        type: String
    },
    'Moneda': {
        prop: 'Currency',
        type: String
    },
    'Ingreso': {
        prop: 'Income',
        type: Number
    },
    'Egreso': {
        prop: 'Outcome',
        type: Number
    }
}

module.exports.read = function()
{
    readXlsxFile('./src/example.xlsx', { schema }).then(({ rows, errors }) => {
        const transactions = transactionHelper.Maptransactions(rows)
        console.log(transactions);
        transactions.forEach(element => {
            
        });
    });
     
}