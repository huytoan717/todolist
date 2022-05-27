const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/todolist_dev');
        console.log('Connect database sucessfully...')
    } catch (error) {
        console.log('Connect database failure!!!')
    }
}

module.exports = { connect }