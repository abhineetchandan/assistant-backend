const User = require('../models/userModel')
const { validateSignup, validateSignin } = require('./validator')
const _ = require('lodash')
const bcrypt = require('bcrypt')

async function signup(currentUser, res){
    try{
        const error = validateSignup(currentUser);
        if (error) return res.status(400).send(error.details[0].message);
    
        let user = await User.findOne({email: currentUser.email});    
        if (user) return res.status(400).send('User already registered');
        
        user = new User(_.pick(user, ['name', 'email', 'password', 'isPro']))
        const genSalt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(currentUser.password, genSalt);
        
        await user.save()
        res.send(_.pick(user, ['_id', 'name', 'email', 'isPro']))
    }
    catch(err){
        res.send('Something is wrong. Please try again later.')
    }
}

async function signin(currentUser, res) {
    try{
        const error = validateSignup(currentUser);
        if (error) return res.status(400).send(error.details[0].message);
    
        let user = await User.findOne({email: currentUser.email});    
        if (!user) return res.status(400).send('Invalid email or password');

        const validPassword = await bcrypt.compare(currentUser.password, user.password)
        if (!validPassword) return res.status(400).send('Invalid email or password');

        res.send(_.pick(user, ['_id', 'name', 'email', 'isPro']))
    }
    catch(err){
        res.send('Something is wrong. Please try again later.')
    }
}

module.exports.signin = signin;
module.exports.signup = signup;