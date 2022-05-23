const ItemModel = require('../models/item');

const get_all_items = (req,res) =>{
    ItemModel.find({})
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            console.log(err);
        });
}

const add_item = (req,res) =>{
    const item = req.body;
    const newItem = new ItemModel(item);
    newItem.save()
        .then(result =>{
            res.json(item);
        })
        .catch(err =>{
            console.log(err);
        })
}

const update_item = (req,res) =>{
    const id = req.params.id;
    ItemModel.findByIdAndUpdate(id, req.body,{new: true})
        .then(result =>{
            res.json(result);
        })
        .catch(err =>{
            console.log(err);
        });
}

const delete_item = (req,res) =>{
    const id = req.params.id;
    ItemModel.findByIdAndDelete(id)
        .then(result => {
            res.json(result);
        })
        .catch(err =>{
            console.log(err);
        })
}

module.exports = {
    get_all_items, 
    add_item,
    update_item,
    delete_item
}