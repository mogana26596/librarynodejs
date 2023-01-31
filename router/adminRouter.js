const express = require('express');
const router = express.Router();
const admin= require('../modules/adminModule');

router.get('/get', admin.getAdmin);

router.post('/create', admin.createAdmin);

router.put('/update/:adminId', admin.updateAdmin);

router.delete('/delete/:adminId', admin.deleteAdmin);

module.exports = router;