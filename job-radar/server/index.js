const express =require( "express");
const cors = require("cors")
const bodyParser = require('body-parser');
const authRoutes = require("./routes/auth");
const jobsRoutes = require("./routes/jobs");

const app = express();
const PORT = 5001;

app.use(cors({
  origin: "http://localhost:3000", 
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true 
}));


app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/jobs',jobsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})