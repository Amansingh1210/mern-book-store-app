const bookModel = require('../models/book.model');
// const Book = require('../models/book.model')

// ADD A BOOK
module.exports.addBoook = async  (req, res,next) => {
    try {
        const newBook = await bookModel({...req.body});
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(400).json({ error: "Failed to create a book", error });
    }
}