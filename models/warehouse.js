const mongoose = require('mongoose');

const WarehouseSchema = new mongoose.Schema({
    location:{
        type: String,
        required: true,
    },
    items:[
        {
            name:{
                type: String,
                required: true,
            },
            price:{
                type: Number,
                required: true,
            },
            category:{
                type:String,
                required:true
            },
            stock:{
                type: Number,
                required: true,
            },
        }
    ]

});

const WarehouseModel = mongoose.model('warehouses', WarehouseSchema);
module.exports = WarehouseModel;