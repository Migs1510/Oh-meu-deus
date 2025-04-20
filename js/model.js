const apiBase = 'http://localhost:3000'; // seu backend aqui

const Model = {
  getCategories: async () => {
    return ['Pizza', 'Sushi', 'Hamburguer']; // Simulação, pode vir do backend
  },

  getDishes: async (restaurantId) => {
    const res = await fetch(`${apiBase}/dishes?restaurant_id=${restaurantId}`);
    return res.json();
  },

  addDish: async (dish) => {
    const res = await fetch(`${apiBase}/dishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dish)
    });
    return res.json();
  },

  updatePrice: async (id, newPrice) => {
    await fetch(`${apiBase}/dishes/${id}/price`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: newPrice })
    });
  }
};
