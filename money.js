function checkRate(rate){
	var threshold = 1.15;
	if(rate >= threshold){
		return rate;
	}
	else {
		return false;
	}
}

module.exports = {
	checkRate: checkRate
}
