const { Router } = require("express");
const { getJobs } = require("../data/file");

const router = Router();

router.get("/", (req, res) => {
  const jobs = getJobs();

  let filtered = jobs;

  const search = req.query.search?.toLowerCase().trim();
  const location = req.query.location?.toLowerCase().trim();
  const type = req.query.type?.toLowerCase().trim();

  if (search) {
    filtered = filtered.filter((job) =>
      job.title.toLowerCase().includes(search),
    );
  }

  if (location) {
    filtered = filtered.filter((job) =>
      job.location.toLowerCase().includes(location),
    );
  }

  if (type) {
    filtered = filtered.filter((job) => job.type.toLowerCase() === type);
  }

  res.json(filtered);
});

module.exports = router;
