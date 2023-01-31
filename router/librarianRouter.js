const express = require('express');
const router = express.Router();
const librarian= require('../modules/librarianModule');

router.get('/get', librarian.getLibrarian);

router.post('/create', librarian.createLibrarian);

router.delete('/delete/:librarianId', librarian.deleteLibrarian);

module.exports = router;