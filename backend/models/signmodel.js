const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const Signmodel = mongoose.model('Signmodel', signSchema);

module.exports = Signmodel;
