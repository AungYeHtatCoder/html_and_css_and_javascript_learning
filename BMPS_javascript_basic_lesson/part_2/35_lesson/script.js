const calcAge3 = brithYear => 2021 - brithYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (brithYear,firstName) => {
	const age = 2021 - brithYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years.`;
}
console.log(yearUntilRetirement(1991, 'John'));
console.log(yearUntilRetirement(1987, 'Mark'));
console.log(yearUntilRetirement(1980, 'Bob'));
