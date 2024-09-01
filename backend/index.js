const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const cors = require('cors');


dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://127.0.0.1:5501', // Update this to your frontend's address
  credentials: true
}));

app.get('/', (req, res) =>{
  res.send('Hello World!');
})

// Routes
app.use('/api/auth', userRoutes);

app.use('/api/events', eventRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



