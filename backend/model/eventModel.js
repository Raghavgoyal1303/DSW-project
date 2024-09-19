const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    location: {type: String, required: true},
    description: { type: String, required: true },
    image: { type: String, required: true },  // Path to image file
});

module.exports = mongoose.model('Event', eventSchema);
