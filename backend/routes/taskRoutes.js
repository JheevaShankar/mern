const express = requires('express');
const router = express.Router();
const {createTask} = require('../controllers/taskController');
const {protect} = require('../middleware/authmiddleware');

router.post('/tasks', protect, createTask);