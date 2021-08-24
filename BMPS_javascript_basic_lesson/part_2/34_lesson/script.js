function calcAge1(brithYear) {
	return 2021 - brithYear;
}

const age1 = calcAge1(1987);
console.log(age1);

const calcAge2 = function(brithYear) {
	return 2021 - brithYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);
