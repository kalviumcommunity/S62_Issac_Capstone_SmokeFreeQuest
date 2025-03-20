const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const router = express.Router();

const User = mongoose.model("users", new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    password: String
}));

// Signup Route
router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
    
});


router.get("/users",async(req,res)=>{
    const users = await User.find()
    res.json(users)
})

module.exports = router;
