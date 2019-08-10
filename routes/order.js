const express = require('express')
const authCheck = require('../middleware/auth-check');
const Order = require('../models/Order');
const constants = require('../util/constants');

const router = new express.Router()

function decodeToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const buff = new Buffer(base64, 'base64');
    const payloadinit = buff.toString('ascii');

    return payload = JSON.parse(payloadinit);
}

router.post('/add/:partId', authCheck, async (req, res) => {
    const partId = req.params.partId;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = decodeToken(token);
    const userId = decodedToken.sub;

    Order.create({
        buyer: userId,
        part: partId
    })
        .then((order) => {
            res.status(200).json({
                id: order._id,
                success: true,
                message: constants.orderMess.add
            })
        })
})

router.get('/user', authCheck, async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = decodeToken(token);
    const user = decodedToken.sub;

    await Order.find({ buyer: user })
        .populate('part')
        .then((data) => {
            return res.status(200).json(data)
        })
})

router.get('/details/:id', (req, res) => {
    const id = req.params.id
    Order.findById(id)
        .then((order) => {
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: constants.orderMess.notExists
                })
            }

            let response = {
                id: order._id,
                buyer: order.buyer,
                part: order.part
            }

            return res.status(200).json(response)
        })
})

module.exports = router