const mongoose = require('mongoose');

const claimschema = new mongoose.Schema({
  name: { type: String, required: true }, // Corrected 'requried' to 'required'
  location: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
});

const claimmodal = mongoose.model('claims', claimschema);

module.exports = claimmodal;
