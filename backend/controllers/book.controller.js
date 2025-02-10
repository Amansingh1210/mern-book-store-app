const Book = require('../models/book.model')

// ADD A BOOK
module.exports.addBoook = async  (req, res,next) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(400).json({ error: "Failed to create a book", error });
    }
}


//  GET ALL BOOKS
module.exports.getAllBooks = async (req, res, next) =>{
    try {
        const books = await Book.find()
        res.status(200).send(books);
    } catch (error) {
        res.status(400).json({ error: "Failed to fetch  books", error });
    }
}