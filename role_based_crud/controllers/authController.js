const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Direct JWT_SECRET in code
const JWT_SECRET = 'supersecretkey';

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password: hashedPassword, role });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

  // Use hardcoded JWT_SECRET
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '1d',
  });

  res.json({ token });
};
