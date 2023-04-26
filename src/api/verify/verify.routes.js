const express = require('express');
const OtpController = require('./verify.controller');


const router = express.Router();

router.post('/generate/:to', OtpController.generateOtp);
router.post('/verify/:to/:code', OtpController.verifyOtp);
router.post('/resend/:to', OtpController.resendOtp);

module.exports = router;
