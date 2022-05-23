const express = require('express');
const router = express.Router();
const {get_all_items, add_item, update_item, delete_item} = require('../controllers/itemController');

router.get('/', get_all_items);
router.post('/',add_item);
router.put('/:id',update_item);
router.delete('/:id', delete_item);

module.exports = router;