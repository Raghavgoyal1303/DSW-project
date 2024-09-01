const express = require('express');
const Event = require('../model/eventModel');
const router = express.Router();


router.post('/register', async (req, res)=>{
    const {name, date, location, description} = req.body

    if(!name || !date){
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
        eventId: newEvent.eventId,
        event: newEvent
    });
    }
    catch{
        res.status(500).json({message: "Error Occured while registering Event"});
    }
});

module.exports = router;
