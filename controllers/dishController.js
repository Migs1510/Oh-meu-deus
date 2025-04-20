const DishModel = require('../models/dishModel');

const DishController = {
  createDish: (req, res) => {
    const { name, price, category, restaurant_id } = req.body;

    if (!name || !price || !category || !restaurant_id) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    const newDish = DishModel.create({ name, price, category, restaurant_id });
    res.status(201).json(newDish);
  },

  getDishesByRestaurant: (req, res) => {
    const restaurantId = req.query.restaurant_id;
    if (!restaurantId) {
      return res.status(400).json({ error: 'restaurant_id é obrigatório' });
    }
    const dishes = DishModel.findByRestaurant(restaurantId);
    res.json(dishes);
  },

  updateDishPrice: (req, res) => {
    const dishId = parseInt(req.params.id);
    const { price } = req.body;

    if (isNaN(price)) {
      return res.status(400).json({ error: 'Preço inválido' });
    }

    const updated = DishModel.updatePrice(dishId, price);
    if (!updated) {
      return res.status(404).json({ error: 'Prato não encontrado' });
    }

    res.json({ message: 'Preço atualizado com sucesso' });
  }
};

module.exports = DishController;
