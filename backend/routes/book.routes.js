const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller')


// ADD A BOOK

router.post('/add-book',bookController.addBoook)

// get all books

router.get('/get-books',bookController.getAllBooks)

// get single book

router.get('/get-book/:id',bookController.getSingleBook)

module.exports = router;