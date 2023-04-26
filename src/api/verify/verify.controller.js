const Resp = require('../../utils/response');
const OtpSystem = require('../../features/otp_system/otp.system.util');

const optMiddleware = {
	generateOtp: async (req, res) => {
		const reqData = { to: req.params.to, message: req.params.message, expiry: 15, otplen: 5 };
		OtpSystem.generateOtp(reqData, async (error, genRes) => {
			if (error) return Resp(res, 400, error);
			return Resp(res, 200, genRes.message, genRes.data)
		});
	},

	verifyOtp: async (req, res) => {
		const { to, code } = req.params;
		OtpSystem.verifyCode(to, code, (error, message) => {
			return error ? Resp(res, 400, error) : Resp(res, 200, message);
		});
	},

	resendOtp: async (req, res) => {
		const { to } = req.params;
		OtpSystem.resendOtp({ to: req.params.to, message: req.params.message, expiry: 15, otplen: 5 }, to, (error, message) => {
			return error ? Resp(res, 400, error) : Resp(res, 200, message);
		});
	},
};

module.exports = optMiddleware;
