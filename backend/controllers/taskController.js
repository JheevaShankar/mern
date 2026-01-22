const Task = require("../models/task");

const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;
        const task = await Task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status,
            user: req.user._id
        });
        res.status(201).json({ msg: "Task created successfully", task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
module.exports = { createTask };