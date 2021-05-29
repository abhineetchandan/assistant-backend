const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 600,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    isPro: {
        type: Boolean,
        default: false        
    }
})


const User = mongoose.model('Users', userSchema);

module.exports = User;