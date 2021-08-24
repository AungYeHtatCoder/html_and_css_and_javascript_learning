const calcAge = function(birThYear) {
	return 2021 - birThYear;
}

const yearUntilRetirement = function(birThYear, firstName) {
	const age = calcAge(birThYear);
	const retirement = 65 - age;
	if (retirement > 0) {
		return retirement;
		console.log('Hello I am if statement');
	} else {
		return -1;
		console.log('Hello I am else statement');
	}
	// return `${firstName} retires in ${retirement} years.`;
}
console.log(yearUntilRetirement(1991, 'John'));
console.log(yearUntilRetirement(1948, 'Mike'));
