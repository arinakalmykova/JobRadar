const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/users.json");
const jobsPath = path.join(__dirname, "jobs.json");

function getJobs() {
  const data = fs.readFileSync(jobsPath, "utf-8");
  return JSON.parse(data);
}

function getUsers() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

module.exports = { getUsers, saveUsers, getJobs };
