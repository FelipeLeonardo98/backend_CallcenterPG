const express = require('express');
const router = express.Router();
const MonitorangController = require('../controllers/MonitorangController');


router.post('/insert', MonitorangController.Insert);

router.post('/cadastrar', MonitorangController.Cadastrar);




module.exports = router;