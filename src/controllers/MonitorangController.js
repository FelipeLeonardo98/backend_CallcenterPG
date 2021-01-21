const mongoose = require('mongoose');
const status = require('http-status');
const { NOT_FOUND } = require('http-status');

require('../models/Monitorang');
const Monitorang = mongoose.model('monitorang');

exports.Insert = async (req, res) => {
    try{
        const insertMonitorang = await  Monitorang.create(req.body);
        return res.json({
            insertMonitorang
        })
    }catch(error){
        return res.status(400).json({error: error.message});
    }
    
};

exports.Cadastrar = (req, res) => {
    const artigo = Monitorang.create(req.body, (error) => {
        if (error) return res.status(400).json({
            error: true,
            message: "Erro: artigo não foi cadastrado. Erro: " + error
        })
        return res.status(200).json({
            error: false,
            message: "Artigo foi cadastrado com sucesso!"
        })
    })
}