const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const connectToDb = require('./db/db');
const app = express()
const port = process.env.PORT || 5000


connectToDb();
// routes


// async function  main(){
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
//   app.use('/', (req,res)=>{
//       res.send('Book store  Server')
//   });
// // }
// main().then(()=>{
//   console.log('Connected to mongodb')  // Check if connection is successful
// })
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      