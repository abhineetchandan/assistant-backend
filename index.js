const mongoose = require('mongoose');
const express = require('express');
const userRouter = require('./routes/userRoute') 

const app = express();

app.use('/users', userRouter)
app.use(express.json())

mongoose.connect('mongodb://localhost/users', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
})
    .then(() => console.log('Connected to Mongoose Database...'))
    .catch(err => console.log('Error occured... ', err))

app.listen(3000, () => {
    console.log('Listening on Port 3000...');
});
