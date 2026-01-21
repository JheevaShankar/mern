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
        const tokens = jwt.sign(
            {id : user._id},
            process.env.JWT_SECRET,
            {expiresIn : '1d'}
        )
        res.status(201).send({ msg :"user created successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Server error", error: error.message});
    }
};