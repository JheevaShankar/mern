const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, '.env') });

console.log("JWT_SECRET loaded:", process.env.JWT_SECRET ? "Yes" : "No");

app.use(express.json());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: "Invalid JSON format. Please check your request body." });
    }
    next(err);
});

mongoose.connect("mongodb+srv://jheeva2005_db_user:admin07@cluster0.f909w45.mongodb.net/?appName=Cluster0").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/authRoutes'));
app.get("/api", (req, res) => {
    res.send("Hello World!");
});
app.post("/api", (req, res) => {
    const data = req.body;
    res.send(data); 
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});