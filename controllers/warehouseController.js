const WarehouseModel = require("../models/warehouse");

const get_all_warehouses = (req,res) =>{
    WarehouseModel.find({})
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            console.log(err);
        });
}

const create_warehouse = (req,res) => {
    const warehouse = req.body;
    const newWarehouse = new WarehouseModel(warehouse);
    newWarehouse.save()
        .then(result =>{
            res.json(warehouse);
        })
        .catch(err =>{
            console.log(err);
        })
}

const add_to_warehouse = (req,res) =>{
    const id = req.params.id;
    WarehouseModel.updateOne({ _id: id },{ $push: { items: req.body } })
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            console.log(err);
        });
}

module.exports = {
    get_all_warehouses, 
    create_warehouse,
    add_to_warehouse
}