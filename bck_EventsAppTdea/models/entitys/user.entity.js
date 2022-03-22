// Llamar orm
const { stringify } = require('jade/lib/utils');
const mongoose = require('mongoose');

// schema db
var userSchema = mongoose.Schema({
    id: Number,
    name: String,
    surname: String,
    numberDocument: String,
    email: String,
    mobileNumber: String,
    password: String,
    city: String,
    active: Boolean
});

// Modelo de mi db
var UserModel = mongoose.model('Users', userSchema);

//Se usa export para que sea visible
module.exports = UserModel;