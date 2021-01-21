// libs/flameworks
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connect = require ('./src/database/database.js');
const routes = require('./src/routes/routes');

app.use(express.json());
app.use(cors());
app.use('/api', routes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})