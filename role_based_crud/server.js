const express = require('express');
// const bodyParser = require('body-parser');
const sequelize = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', productRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('Database connected and synced!');
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.error(err));
