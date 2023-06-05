const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const userRoutes = require("./router/user")
const transactionRoutes = require("./router/transaction")
const categoryRoutes = require("./router/category")

const excelImporter = require("../src/helpers/excelImporter")
const transactionSchema = require('../src/models/transaction')

const app = express();
const port = process.env.PORT || 9000;
 
//middleware
app.use(express.json())
app.use(cors());
app.use('/api',userRoutes)
app.use('/api',transactionRoutes)
app.use('/api',categoryRoutes)

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to the DB ATLAS')

    excelImporter
    .read()
    .then(transactions =>   {
            transactions.forEach(element => {
                var transaction = transactionSchema(element)
                //commented to avoid import
                //transactionHelper.SaveTransaction(transaction)              
            });           
    })
})
.catch((error)=> console.error(error));

app.listen(port, () => console.log('server listening on port',port));

