const { Router } = require("express");
const { getJobs } = require("../data/file");

const router = Router();

router.get("/", (req, res) => {
  console.log("➡️ GET /api/jobs");
  console.log("query:", req.query);

  const jobs = getJobs();
  console.log("all jobs:", jobs.length);

  let filtered = jobs;

  const search = req.query.search?.toLowerCase().trim();
  const location = req.query.location?.toLowerCase().trim();
  const type = req.query.type?.toLowerCase().trim();

  if (search) {
    console.log("🔍 search:", search);
    filtered = filtered.filter(job =>
      job.title.toLowerCase().includes(search)
    );
  }

  if (location) {
    console.log("📍 location:", location);
    filtered = filtered.filter(job =>
      job.location.toLowerCase().includes(location)
    );
  }

  if (type) {
    console.log("🧩 type:", type);
    filtered = filtered.filter(job =>
      job.type.toLowerCase() === type
    );
  }

  console.log("✅ filtered jobs:", filtered.length);
  res.json(filtered);
});

module.exports = router;
