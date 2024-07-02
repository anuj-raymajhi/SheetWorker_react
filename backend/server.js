const express = require('express');
const cors = require('cors');
const router = require('./routes/routes')

const app = express();
require('dotenv').config();

// Middleware to parse JSON bodies
app.use(express.json());
// Middlewares
app.use(cors());


//routes
app.use('/api',router)



const PORT = 8000; // or whatever port you're using

app.get('/test', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});