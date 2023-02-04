const Toto = require('../models/toto');

function getAllToto(req, res) {
    Toto.find().exec((err, totos) => {
        res.json(totos);
    });
};

function addToto(req, res) {
    let toto = new Toto(req.body);
    toto.save().then(r => {
        return res.sendStatus(204);
    })
        .catch(err => {
            return res.sendStatus(500).json(err);
        });
};

function updateToto (req, res) {
    let toto = Toto.findById(req.body.id);
    toto.name = req.body.name;
    toto.magic = req.body.magic;
    toto.email = req.body.email;
    toto.save().then(r => {
        return res.sendStatus(204);
    })
        .catch(err => {
            return res.sendStatus(500).json(err);
        });
};

module.exports = { getAllToto, addToto };