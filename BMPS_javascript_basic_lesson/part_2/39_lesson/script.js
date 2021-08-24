// const friend1 = 'Mechal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michal', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);

// const years = new Array (1991, 1984, 2008, 2020);

// const firstName = 'IT'
// const myBio = [firstName, 'Yan Tote', 2021 - 1987, 'Developer', friends];
// console.log(myBio);

const calcAge = function(birthYear) {
	return 10 + birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[1]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

const ages = [calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);
