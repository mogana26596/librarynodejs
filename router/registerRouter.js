const express = require('express');
const router = express.Router();
const register = require('../modules/registerModule');

router.post('/adminlogin', register.adminlogin);

router.post('/librarianlogin', register.librarianlogin);

module.exports = router;