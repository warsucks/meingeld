var input = require('./input');
var money = require('./money');
var email = require('./email');

var url = 'http://www.xe.com/currencyconverter/convert/?From=EUR&To=USD#rates';

input.getPage(url)
.then(input.getExchangeRate)
.then(money.checkRate)
.then(function(send){
	if(send){
		email.sendExchangeRateEmailAlert(1.33);
	}
})