const myBio = {
	firstName:'IT',
	lestName:'Yan Tote',
	birthYear: 1987,
	job: 'Developer',
	friends: ['Michal', 'Peter', 'Steven'],
	hasDriversLicense: true,
	// calcAge: function(birthYear) {
	// 	return 2021 - birthYear;
	// }
	calcAge: function() {
		this.age = 2021 - this.birthYear;
		return this.age;
	};
	getSummery: function() {
		return `${this.firstName} ${this.lestName} is a${this.calcAge()}-years old teacher and he has ${this.hasDriversLicense ? 'a' : 'not'} driver's license.`
	}
}
console.log(myBio.calcAge());
console.log(myBio.age);
console.log(myBio.age);
console.log(myBio.age);
// console.log(myBio[`calcAge`](1987));
 

//It yontote is a 46 year

