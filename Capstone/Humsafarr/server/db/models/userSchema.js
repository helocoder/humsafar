const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
from: {
        type: String,
      required: true
    },
to: {
        type: String,
        required: true
    },
date: {
            type: Date,
            required: true
        },
});

const User = mongoose.model('USER', userSchema);
module.exports = User;