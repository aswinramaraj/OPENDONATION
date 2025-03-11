const mongoose = require('mongoose');

const signSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    repassword: { type: String, required: true }
});

const Signmodel = mongoose.model('signta', signSchema);
module.exports = Signmodel;
