const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller')


// ADD A BOOK

router.post('/create-book',bookController.addBoook)

module.exports = router;