var Verifier = require("google-play-billing-validator");

var options = {
	email: process.env.IAP_VERIFIER_SERVICE_ACCOUNT_EMAIL,
	key: process.env.IAP_VERIFIER_SERVICE_ACCOUNT_ACCESS_KEY,
};

module.exports = new Verifier(options);
