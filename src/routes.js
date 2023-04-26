const express = require('express');
const VerifyApi = require('./api/verify/verify.routes');

const router = express.Router();

router.use('/otp', VerifyApi);

module.exports = router;
