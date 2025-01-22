const mongoose = require('mongoose');

const  connectToDb = ()=>{
    mongoose.connect("mongodb+srv://aman-store:iGPIx2ZycP3wELUM@book-store-cluster.uqbje.mongodb.net/?retryWrites=true&w=majority&appName=book-store-cluster"
    ).then(() => {
        console.log('Connected to MongoDB');
    }).catch(error => console.error('Error connecting to MongoDB', error));
} 
// iGPIx2ZycP3wELUM
// aman-store

module.exports = connectToDb;