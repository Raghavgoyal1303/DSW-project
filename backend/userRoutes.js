import express from 'express';
import User from './userModel.js';

const router = express.Router();


router.get("/", async(req, res) =>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.post('/', async(req, res)=> {
    try {
        const {name, email, password} = req.body;
        const user = new User({name, email, password});
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send("server error")
    }
})

export default router;