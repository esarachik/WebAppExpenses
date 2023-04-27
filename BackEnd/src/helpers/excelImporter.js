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

module.exports.read = async function() {
    try {
      const { rows, errors } = await readXlsxFile('./src/example.xlsx', { schema });
      const transactions = transactionHelper.Maptransactions(rows);
      return transactions;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la lectura del archivo
      console.error(error);
      return null;
    }
  };