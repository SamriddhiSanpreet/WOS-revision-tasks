const express = require("express");
const db = require("./models");

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const PORT = 5000;

// Create User
app.post("/add_user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await db.User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
});

// Get Single User
app.get("/users/:id", async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Update User
app.put("/users/:id", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await db.User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  user.name = name || user.name;
  user.email = email || user.email;
  user.password = password || user.password;
  await user.save();
  res.json(user);
});

// Delete User
app.delete("/users/:id", async (req, res) => {
  const user = await db.User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });

  await user.destroy();
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
