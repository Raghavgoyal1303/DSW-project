    const mongoose = require('mongoose');
    const {v4: uuidv4} = require('uuid');

    const eventSchema = new mongoose.Schema({
        eventId:{
            type: String,
            required: true,
            default:() =>  uuidv4(),
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true

        },
        location: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true

        }
    });


    const Event = mongoose.model('Event', eventSchema);
    module.exports = Event;