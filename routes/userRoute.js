const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
    res.send('received a request for signup');
});

router.post('login', (req, res) => {
    res.send('received a request for login');
});

router.post('update', (req, res) => {
    res.send('received a request for update');
});

module.exports = router;