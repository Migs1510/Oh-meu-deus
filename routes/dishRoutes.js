const express = require('express');
const router = express.Router();
const DishController = require('../controllers/dishController');

router.post('/', DishController.createDish);
router.get('/', DishController.getDishesByRestaurant);
router.put('/:id/price', DishController.updateDishPrice);

module.exports = router;
