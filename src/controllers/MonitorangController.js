const mongoose = require('mongoose');
// add model
require('../models/Monitorang');
const Monitorang = mongoose.model('monitorang');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');
const dbAcess = require('../database/database');



// Insert
exports.Insert = async (req, res) => {
    try {
        const newMonitorang = await Monitorang.create(req.body);
        return res.json({ newMonitorang });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Find All
exports.All = async (req, res) => {
    try {
        const allMonitorangs = await Monitorang.find({});
        return res.json(allMonitorangs);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// select categories
exports.Categories = async (req, res) => {
    try {
        const onlyCategories = await Monitorang.find({}).distinct("category");
        return res.json(onlyCategories);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// select description by category
exports.SearchCategory = async (req, res) => {
    try {
        const search = req.body.search;
        const returnDescriptions = await Monitorang.find({}).select({ "_id": 1, "description": 1 })
            .where('category').equals(search);
        console.log(returnDescriptions);
        return res.json(returnDescriptions);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// update
exports.Update = async (req, res) => {
    try {
        const index = req.params.index;
        const updatedMonitorang = await Monitorang.updateOne({ _id: index }, req.body);
        return res.json(`Monitorang with _id ${index} was updated with success!`);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }

};


// delete
exports.Delete = async (req, res) => {
    try {
        let index = req.body;
        const deleteMonitorang = await Monitorang.deleteOne({ _id: index });
        return res.json(`Monitorang with _id ${index} was deleted`);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Select one
exports.SelectOne = async (req, res) => {
    try {
        let index = req.body;
        const selectedMonitorang = await Monitorang.findOne({ _id: index }).select({ "_id": 1, "description": 1 });
        return res.json(selectedMonitorang);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};