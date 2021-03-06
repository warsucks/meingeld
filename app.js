var input = require('./input');
var money = require('./money');
var email = require('./email');
var schedule = require('node-schedule');
var app = require('express')();

var url = 'http://www.xe.com/currencyconverter/convert/?From=EUR&To=USD#rates';

var job = schedule.scheduleJob('0 6 * * *', function(){
	input.getPage(url)
	.then(input.getExchangeRate)
	.then(money.checkRate)
	.then(function(sendRate){
		if(sendRate){
			email.sendExchangeRateEmailAlert(sendRate);
		}
	});
});

app.use('/', require('./router'));

var PORT = process.env.PORT || 1337;

app.listen(PORT, function(){
	console.log("listening on port", PORT);
});
