const bookModel = require('../models/book.model')

// ADD A BOOK
module.exports.addBoook = async  (req, res,next) => {
    const { title, author, price, quantity } = req.body;

    if (!title || !author || !price || !quantity) {
        return res.status(400).json({ message: 'Please provide all the required fields' });
    }

    // Add the book to the database
    res.json({ message: 'Book added successfully' });
}