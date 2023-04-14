const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require("./router/user")
const excelImporter = require("../src/helpers/excelImporter")

const app = express();
const port = process.env.PORT || 9000;
 
//middleware
app.use(express.json())
app.use('/api',userRoutes)

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to the DB ATLAS')

    excelImporter.read()

})
.catch((error)=> console.error(error));

app.listen(port, () => console.log('server listening on port',port));

