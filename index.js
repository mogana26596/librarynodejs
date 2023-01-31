const express = require('express');
const mongo = require('./connect');
const cors = require('cors');
const dotenv = require('dotenv');
const register1 = require('./router/registerRouter');
const librarian1 = require('./router/librarianRouter');
const admin1 = require('./router/adminRouter');

dotenv.config();
mongo.connect();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/register', register1);
app.use('/librarian', librarian1);
app.use('/admin', admin1);
app.listen(process.env.PORT);