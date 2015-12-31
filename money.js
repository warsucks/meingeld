function checkRate(rate){
	var threshold = 1.00;
	if(rate >= threshold){
		return true;
	}
	else {
		return false;
	}
}

module.exports = {
	checkRate: checkRate
}