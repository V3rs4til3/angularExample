const mongoose = require('mongoose');

const totoSchema = new mongoose.Schema({
    name: String,
    magic: Number,
    email: String
},{
    versionKey: false
});

const Toto = mongoose.model('toto', totoSchema);

module.exports = Toto;