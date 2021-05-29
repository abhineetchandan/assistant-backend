const mongoose = require('mongoose');
const express = require('express');
const userRouter = require('./routes/userRoute') 
const config = require('config')

const app = express();

if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: Jwt Private Key not defined.');
    process.exit(1);
}

app.use(express.json())
app.use('/users', userRouter)

mongoose.connect('mongodb://localhost/users', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
})
    .then(() => console.log('Connected to Mongoose Database...'))
    .catch(err => console.log('Error occured... ', err))

app.listen(3000, () => {
    console.log('Listening on Port 3000...');
});
