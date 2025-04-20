const express = require('express');
const cors = require('cors');
const dishRoutes = require('./routes/dishRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/dishes', dishRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
