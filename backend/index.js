import express from "express";
import mongoose from "mongoose";
import userRoutes from "./userRoutes.js"

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//Middleware
app.use(express.json());

//Routes
app.get("/", (req,res) => {
    res.send("Hello World");
})

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});