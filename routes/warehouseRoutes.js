const express = require('express');
const router = express.Router();
const {get_all_warehouses,create_warehouse, add_to_warehouse} = require('../controllers/warehouseController')

router.get('/', get_all_warehouses);
router.post('/', create_warehouse)
router.put('/:id', add_to_warehouse);

module.exports = router;
