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
        const books = await Book.find().sort({ createdAt: -1})
        res.status(200).send(books);
    } catch (error) {
        res.status(400).json({ error: "Failed to fetch  books", error });
    }
}

// GET SINGLE BOOK BY ID

module.exports.getSingleBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('Book not found.');
        res.send(book);
    } catch (error) {
        res.status(404).json({ error: "Failed to fetch book", error });
    }
}