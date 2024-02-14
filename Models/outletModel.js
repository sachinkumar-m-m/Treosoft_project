const mongoose = require('mongoose');

const outletSchema = new mongoose.Schema({
    name: String,
    location: String
});

module.exports = mongoose.model('Outlet', outletSchema);