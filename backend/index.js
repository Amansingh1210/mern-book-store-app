const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const connectToDb = require('./db/db');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const bookRoutes = require('./routes/book.routes')

connectToDb();
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:5000'],
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));  


app.use(express.json());app.get('/', (req, res) => {
  res.send("hello world");
});

// routes

app.use('/api/books',bookRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      