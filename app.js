// libs/flameworks
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());


const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})