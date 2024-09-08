const express = require('express');
const Event = require('../model/eventModel');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const events = await Event.find(); // Fetch all events from the database
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: "Error fetching events" });
    }
});



router.post('/register', async (req, res)=>{
    const {name, date, location, description} = req.body

    if(!name || !date || !location || !description){
        return res.status(404).json({message: "Name and Date is compulsory"})
    }
    try{
        const newEvent = new Event({
            name,
            date,
            location,
            description
       })

       await newEvent.save();
       res.status(201).json({
        message: "Event Registered Successfully",
        events: newEvent,
    });     
    }
    catch(error){
        console.error('Error registering event:', error);
        res.status(500).json({message: "Error Occured while registering Event"});
    }
});

module.exports = router;
