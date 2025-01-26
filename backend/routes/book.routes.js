const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller')


// ADD A BOOK

router.post('/add',bookController.addBoook)

module.exports = router;