const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    outletId: mongoose.Schema.Types.ObjectId,
    phoneNumber: String,
    name: String,
    birthday: Date,
    anniversary: Date,
    amountSpent: Number,
    itemsConsumed: [String]
});

module.exports = mongoose.model('Customer', customerSchema);
