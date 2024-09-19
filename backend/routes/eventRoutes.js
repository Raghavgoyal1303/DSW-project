const express = require('express');
const multer = require('multer');
const Event = require('../model/eventModel');
const path = require('path');

const router = express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // File name with timestamp
    }
});
const upload = multer({ storage: storage });

// Route to add a new event
router.post('/upload-event', upload.single('image'), async (req, res) => {
    try {
        const { name, date } = req.body;
        const image = `/uploads/${req.file.filename}`;

        const newEvent = new Event({ name, date, image });
        await newEvent.save();

        res.status(201).json({ message: 'Event added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding event' });
    }
});

// Route to fetch all upcoming events
router.get('/upcoming-events', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events' });
    }
});

module.exports = router;
