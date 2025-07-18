require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = process.env.PORT || 3000
const credentials = require("./credentials")
const corsOptions = require("./corsOptions")

const app = express()
app.use(express.json())

// ✅ Correct CORS setup
app.use(credentials);
app.use(cors(corsOptions));

const routes = require("./routes")
app.use("/api", routes)

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connection successful"))
    .catch(() => console.log("MongoDB connection failed"))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
