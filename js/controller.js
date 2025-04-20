const Controller = {
    init: async () => {
      const categories = await Model.getCategories();
      View.renderCategories(categories, document.getElementById('dishCategory'));
      View.renderCategories(categories, document.getElementById('categorySelect'));
  
      document.getElementById('dishForm').addEventListener('submit', Controller.handleAddDish);
      document.getElementById('categorySelect').addEventListener('change', Controller.loadDishes);
    },
  
    handleAddDish: async (e) => {
      e.preventDefault();
      const name = document.getElementById('dishName').value;
      const price = parseFloat(document.getElementById('dishPrice').value);
      const category = document.getElementById('dishCategory').value;
      const restaurantId = document.getElementById('restaurantId').value;
  
      const newDish = { name, price, category, restaurant_id: restaurantId };
      await Model.addDish(newDish);
      Controller.loadDishes();
    },
  
    loadDishes: async () => {
      const restaurantId = document.getElementById('restaurantId').value;
      if (!restaurantId) return;
      const dishes = await Model.getDishes(restaurantId);
      View.renderDishes(dishes);
    },
  
    changePrice: async (dishId) => {
      const input = document.querySelector(`input[data-id="${dishId}"]`);
      const newPrice = parseFloat(input.value);
      if (isNaN(newPrice)) return alert("Preço inválido");
      await Model.updatePrice(dishId, newPrice);
      Controller.loadDishes();
    }
  };
  
  document.addEventListener('DOMContentLoaded', Controller.init);
  