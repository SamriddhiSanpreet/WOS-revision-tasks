const Product = require('../models/product');
const User = require('../models/user'); 

exports.createProduct = async (req, res) => {
  const { name, price } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
      userId: req.user.id,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
    try {
      let products;
  
      if (req.user.role === 'admin') {
        products = await Product.findAll();
      } else if (req.user.role === 'seller') {
        products = await Product.findAll({ where: { userId: req.user.id } });
      } else if (req.user.role === 'user') {
        const sellers = await User.findAll({ where: { role: 'seller' } });
        const sellerIds = sellers.map(seller => seller.id);
  
        products = await Product.findAll({
          where: {
            userId: sellerIds
          }
        });
      }
  
      res.json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (req.user.role !== 'admin' && req.user.id !== product.userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    product.name = name;
    product.price = price;
    await product.save();

    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (req.user.role !== 'admin' && req.user.id !== product.userId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
