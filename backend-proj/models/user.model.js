 // libraries, module dependencies, & inclusions
let mongoose = require('mongoose')

// defining schema for format of data to be pushed to mongo
let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// exposing mongo model schema
module.exports = mongoose.model('Users', UserSchema, 'Users')