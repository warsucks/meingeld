var mandrill = require('mandrill-api/mandrill');
var mandrillAPIKey = require('./secrets').API_KEY;
var mandrillClient = new mandrill.Mandrill(mandrillAPIKey);

var from_email = "kaffy.lu@gmail.com";
var from_name = "Kathy Lu";
var to_array = [{
	email: "kaffy.lu@gmail.com",
	name: "Kathy Lu"
}];

function sendEmailAlert(subject, htmlMessage){
	var message = {
		subject: subject,
		html: htmlMessage,
		from_email: from_email,
		from_name: from_name,
		to: to_array,
	};
	var success = function(result){
		console.log("Result: ",result);
	};
	var error = function(err){
		console.error("Error: ",err.message);
	};
	mandrillClient.messages.send({message: message}, success, error);
}

function sendExchangeRateEmailAlert(rate){
	var subject = "EUR/USD exchange rate is good today! 1 EUR = "+rate+" USD";
	return sendEmailAlert(subject);
}

module.exports = {
	sendExchangeRateEmailAlert: sendExchangeRateEmailAlert
}
