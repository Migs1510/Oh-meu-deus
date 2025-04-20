let dishes = [];
let idCounter = 1;

const DishModel = {
  create: (dishData) => {
    const newDish = { id: idCounter++, ...dishData };
    dishes.push(newDish);
    return newDish;
  },

  findByRestaurant: (restaurantId) => {
    return dishes.filter(d => d.restaurant_id === restaurantId);
  },

  updatePrice: (id, newPrice) => {
    const dish = dishes.find(d => d.id === id);
    if (dish) {
      dish.price = newPrice;
      return true;
    }
    return false;
  }
};

module.exports = DishModel;
