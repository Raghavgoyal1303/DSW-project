  const express = require('express');
  const mongoose = require('mongoose');
  const dotenv = require('dotenv');
  const bodyParser = require('body-parser');
  const userRoutes = require('./routes/userRoutes');
  const eventRoutes = require('./routes/eventRoutes');
  const cors = require('cors');
  const path = require('path');

  dotenv.config();

  const app = express();

  // CORS Middleware - place this at the top before other middlewares
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://dsw-project-1-frontend.onrender.com"); // Update with your frontend URL
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
      return res.status(200).json({});
    }

    next();
  });

  // Middleware
  app.use(bodyParser.json());
  app.use(cors({
    origin: 'https://dsw-project-1-frontend.onrender.com', // Frontend URL
    credentials: true
  }));

  // Connect to MongoDB
  mongoose.connect(process.env.MONGO_URI, {
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

  // Middleware
  app.use(bodyParser.json());

  app.use(cors({
    origin: 'https://dsw-project-1-frontend.onrender.com', // Update this to your frontend's address
    credentials: true
  }));

  app.get('/', (req, res) =>{
    res.send('Hello World!');
  })

  // Serve static files from the "public" directory
  app.use(express.static(path.join(__dirname, '../frontend')));


  // Catch-all route to serve index.html for unknown routes
  app.get('*', (req, res) => {  
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
  });


  // Routes
  app.use('/api/auth', userRoutes);

  app.use('/api/events', eventRoutes);

  // Start the server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


