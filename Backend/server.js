require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 3000

const app = express()
app.use(express.json())
// Allow specific origin and preflight
app.use(cors({
  origin: "https://s62-issac-smokefreequest.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("*", cors()); // Preflight support

const routes = require("./routes")
app.use("/api",routes)

mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("MongoDB connection successful"))
    .catch(()=>console.log("MongoDB connection failed"))

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})