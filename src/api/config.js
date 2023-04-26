const axios = require('axios');
require('dotenv').config();

exports.SmsRouter = axios.create({
  baseURL: 'https://rest-api.d7networks.com/secure',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    Authorization: process.env.D7TOKEN,
  },
});
