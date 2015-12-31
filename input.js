var rp = require('request-promise');
var cheerio = require('cheerio');

function getPage(uri){
	var options = {
		uri: uri
	};
	return rp(options);
}

function getExchangeRate(htmlString){
	var $ = cheerio.load(htmlString);
	var rate = $('.uccRes .rightCol').text();
	rate = rate.split(" ")[0];
	rate = parseFloat(rate);
	return rate;
}

module.exports = {
	getPage: getPage,
	getExchangeRate: getExchangeRate
} 