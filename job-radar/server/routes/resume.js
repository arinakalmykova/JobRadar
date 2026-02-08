const { Router } = require("express");
const { saveUsers, getUsers } = require("../data/file");
const router = Router();

router.post("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const users = getUsers();
    const userIndex = users.findIndex((u) => String(u.id) === String(id));

    if (userIndex === -1) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    users[userIndex].resume = data;

    saveUsers(users);

    res.json({ message: "Резюме сохранено!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при сохранении резюме" });
  }
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  try {
    const users = getUsers();
    const user = users.find((u) => String(u.id) === String(id));

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    res.json(user.resume || {});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при получении резюме" });
  }
});

module.exports = router;
