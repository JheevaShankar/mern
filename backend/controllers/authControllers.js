const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
exports.register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({message: "Please provide name, email and password"});
        }
        
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "email already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });
        const secret = process.env.JWT_SECRET || '89fcbd937b5280f9';
        const tokens = jwt.sign(
            {id : user._id},
            secret,
            {expiresIn : '1d'}
        )
        res.status(201).send({ msg :"user created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({message: "Please provide email and password"});
        }
        
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid email or password"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid email or password"});
        }
        
        const secret = process.env.JWT_SECRET || '89fcbd937b5280f9';
        const token = jwt.sign(
            {id: user._id},
            secret,
            {expiresIn: '1d'}
        );
        
        res.status(200).json({message: "Login successful", token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error: error.message});
    }
};