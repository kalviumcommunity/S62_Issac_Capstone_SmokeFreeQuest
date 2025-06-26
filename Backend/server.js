require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 3000

const app = express()
app.use(express.json())

// ✅ Correct CORS setup
app.use(credentials);
app.use(cors(corsOptions));

// ✅ Preflight support using same config
app.options("*", cors({
  origin: allowedOrigin,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

const routes = require("./routes")
const credentials = require("./credentials")
const corsOptions = require("./corsOptions")
app.use("/api", routes)

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connection successful"))
    .catch(() => console.log("MongoDB connection failed"))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
