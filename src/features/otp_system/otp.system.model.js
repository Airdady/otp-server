const mongoose = require('mongoose');

const OtpSchema = new mongoose.Schema(
	{
		code: {
			type: String,
			required: true,
		},
		expiry: {
			type: Date,
			required: true,
		},
		resendCount: {
			type: Number,
			default: 0,
		},
		to: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

const OtpSystem = mongoose.model('OtpSystem', OtpSchema);

module.exports = OtpSystem;
