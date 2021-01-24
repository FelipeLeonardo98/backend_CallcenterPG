// dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connect = require ('./src/database/database.js');
const routes = require('./src/routes/routes');


// configs
app.use(express.json());
app.use(cors());

app.get('/api', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' });
  });

app.use('/api', routes);

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})

