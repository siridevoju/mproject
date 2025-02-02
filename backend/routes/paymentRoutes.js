// routes/paymentRoutes.js
const express = require('express');
const { createOrder, verifyPayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/create-order', createOrder);
router.post('/verify-payment', verifyPayment);

//nothing

module.exports = router;
