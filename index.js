const express = require('express');
const {categoryRoutes } = require('./routes/CategoryRoutes');
const { db } = require('./config/db');
require('dotenv').config();

db.connect();
const app = express();


app.use(express.json())

app.use('/api/categories', categoryRoutes)


app.listen(3000);