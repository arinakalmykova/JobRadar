const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const { getUsers, saveUsers } = require("../data/file");
const router = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/avatars"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "avatar-" + uniqueSuffix + ext);
  },
});
const upload = multer({ storage });

router.post("/", upload.single("avatar"), (req, res) => {
  const userId = req.body.userId;
  if (!req.file) return res.status(400).json({ message: "Файл не выбран" });

  const users = getUsers();
  const user = users.find((u) => u.id === Number(userId));
  if (!user) return res.status(404).json({ message: "Пользователь не найден" });

  user.avatar = `http://localhost:5001/uploads/avatars/${req.file.filename}`;
  saveUsers(users);

  res.json({ message: "Аватар обновлен", user });
});

module.exports = router;
