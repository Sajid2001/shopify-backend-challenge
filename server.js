const express = require('express');
const app = express();
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const warehouseRoutes = require('./routes/warehouseRoutes');
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.DB_CONNECT, 
    {useNewUrlParser: true}, () => console.log('connected to database')
);

app.use('/inventory', itemRoutes);
app.use('/warehouses', warehouseRoutes);

app.listen(5000, () =>{
    console.log('Server is running');
});