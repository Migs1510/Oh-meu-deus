const db = require('/db');

const DishModel = {
  create: async (dishData) => {
    const { name, price, category, restaurant_id } = dishData;
    const [result] = await db.execute(
      'INSERT INTO dishes (name, price, category, restaurant_id) VALUES (?, ?, ?, ?)',
      [name, price, category, restaurant_id]
    );
    return { id: result.insertId, ...dishData };
  },

  findByRestaurant: async (restaurantId) => {
    const [rows] = await db.execute(
      'SELECT * FROM dishes WHERE restaurant_id = ?',
      [restaurantId]
    );
    return rows;
  },

  updatePrice: async (id, newPrice) => {
    const [result] = await db.execute(
      'UPDATE dishes SET price = ? WHERE id = ?',
      [newPrice, id]
    );
    return result.affectedRows > 0;
  }
};

module.exports = DishModel;
