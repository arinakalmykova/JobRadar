const { Router } = require("express");
const { saveUsers, getUsers } = require("../data/file");

const router = Router();

router.post("/:id/applied", (req, res) => {
  const { id } = req.params;
  const job = req.body;

  const users = getUsers();
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  user.appliedJobs = user.appliedJobs || [];

  const alreadyApplied = user.appliedJobs.find((j) => j.id === job.id);

  if (!alreadyApplied) {
    user.appliedJobs.push(job);
    saveUsers(users);
  }

  res.json({
    message: "Отклик сохранён",
    appliedJobs: user.appliedJobs,
  });
});

router.get("/:id/applied", (req, res) => {
  const { id } = req.params;

  const users = getUsers();
  const user = users.find((u) => String(u.id) === String(id));
  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  res.json(user.appliedJobs || []);
});

router.delete("/:id/:jobId", (req, res) => {
  const { id, jobId } = req.params;

  const users = getUsers();
  const user = users.find((u) => String(u.id) === String(id));

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }

  user.appliedJobs = (user.appliedJobs || []).filter(
    (job) => job.id !== Number(jobId),
  );

  saveUsers(users);

  res.json({ message: "Отклик удалён", appliedJobs: user.appliedJobs });
});

module.exports = router;
