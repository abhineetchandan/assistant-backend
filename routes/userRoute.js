const express = require('express');
const { signup, signin } = require('../functions/auth')

const router = express.Router();

router.post('/signup', async (req, res) => {
    await signup(req.body, res);
});

router.post('/login', async (req, res) => {
    await signin(req.body, res);
});

router.post('update', (req, res) => {
    res.send('received a request for update');
});

module.exports = router;