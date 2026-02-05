const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {saveUsers, getUsers} = require("../data/file");

const router = Router();
const SECRET_KEY = "supersecretkey123";

// Регистрация
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }
  const users = getUsers();
  
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Пользователь уже существует" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashedPassword
  };

  users.push(newUser);
  saveUsers(users);

  const token = jwt.sign({ id: newUser.id }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ token, user: { id: newUser.id, name: newUser.name, email: newUser.email } });
});

// Вход
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Неверный пароль" });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });

  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

module.exports = router;
