const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Todo = new Schema({
    name: { type: String, maxLength: 255, required: true},
    done: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Todo', Todo)