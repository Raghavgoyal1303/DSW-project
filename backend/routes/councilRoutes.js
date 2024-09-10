const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Make sure to install this package if not already installed
const Council = require('../model/councilModel');
const jwt = require('jsonwebtoken');


// Register route for council members
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if council member already exists
        const existingMember = await Council.findOne({ email });
        if (existingMember) {
            return res.status(400).json({ message: 'Council member with this email already exists' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new council member
        const newCouncilMember = new Council({
            username,
            email,
            password: hashedPassword,
        });

        await newCouncilMember.save();

        // Optional: Generate a JWT token
        const token = jwt.sign(
            { userId: newCouncilMember._id, role: 'council' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({
            message: 'Council member registered successfully',
            councilMember: newCouncilMember
        });
    } catch (error) {
        console.error('Error registering council member:', error);
        res.status(500).json({ message: 'Server error' });
    }
});




// Login route for council members
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Login request received:', req.body);

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Check if council member exists
        const councilMember = await Council.findOne({ email });
        if (!councilMember) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, councilMember.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: councilMember._id, role: 'council' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            message: 'Login successful',
            token,  // Send the token back to the frontend
            councilMember
        });
    } catch (error) {
        console.error('Error logging in council member:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
