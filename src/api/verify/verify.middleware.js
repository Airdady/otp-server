const Payment = require('./payment.modal');
const Response = require('../../utils/response');

const optMiddleware = {
  capturePayment: (req, res) => {
    Payment.create({ ...req.body, userId: req.user._id }, (err, data) => {
      if (err) return Response(res, 400, 'Create user failed', err);
      return Response(res, 201, 'payment captured successful', data);
    });
  },

  getAllPayment: (req, res) => {
    const { msisdn } = req.params;
    Payment.find({}, (err, data) => {
      if (err) return Response(res, 400, 'otp not sent', err);
      const { exptime, otpLen, source, msg } = data;
      Router.get(
        `/OtpApi/otpgenerate?msisdn=${msisdn}&otplen=${otplen}&exptime=${exptime}&source=${source}&msg=${msg}`
      );
      return Response(res, 200, '', data);
    });
  },
};

module.exports = optMiddleware;
