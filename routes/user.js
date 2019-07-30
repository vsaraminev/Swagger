const express = require('express')
const authCheck = require('../middleware/auth-check');
const User = require('../models/User');

const router = new express.Router()

function decodeToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const buff = new Buffer(base64, 'base64');
    const payloadinit = buff.toString('ascii');

    return payload = JSON.parse(payloadinit);
}

router.get('/info', authCheck, async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = decodeToken(token);
    const id = decodedToken.sub;

    await User.findById(id)
        .then((data) => {
            return res.status(200).json(data)
        })
});

module.exports = router