const express = require('express');
const router = express.Router();
const MonitorangController = require('../controllers/MonitorangController');


router.post('/insert', MonitorangController.Insert);
router.get('/all', MonitorangController.All);
router.post('/delete', MonitorangController.Delete);
router.get('/categories', MonitorangController.Categories);
router.post('/bycategory', MonitorangController.SearchCategory);

module.exports = router;