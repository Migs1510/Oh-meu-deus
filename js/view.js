const View = {
    renderCategories: (categories, selectElement) => {
      selectElement.innerHTML = '';
      categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        selectElement.appendChild(opt);
      });
    },
  
    renderDishes: (dishes) => {
      const list = document.getElementById('dishesList');
      list.innerHTML = '';
      dishes.forEach(d => {
        const div = document.createElement('div');
        div.className = 'dish-card';
        div.innerHTML = `
          <strong>${d.name}</strong> (${d.category}) - R$${d.price.toFixed(2)}
          <br>
          <input type="number" placeholder="Novo preço" data-id="${d.id}">
          <button onclick="Controller.changePrice(${d.id})">Atualizar Preço</button>
        `;
        list.appendChild(div);
      });
    }
  };
  