const mongoose = require('mongoose')

const tasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    isDaily: {
        type: Boolean,
        required: true,
    }
})

const friendsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    picture: {
        type: Buffer,
        required: false,
    },
    description: {
        type: String,
        required: false,
        maxLength: 200,
    },
})

const friendsUnreadSchema = new mongoose.Schema({
    name: String,
})

const userSchema = new mongoose.Schema({
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
    picture: {
        type: Buffer,
        contentType: String
    },
    isPro: {
        type: Boolean,
        default: false,      
    },
    tasks: [tasksSchema],
    friends: [friendsSchema],
    hasMessages: {
        type: Boolean,
        default: false
    },
    unreadMessageFriends: [friendsUnreadSchema]
})


const User = mongoose.model('Users', userSchema);

module.exports = User;