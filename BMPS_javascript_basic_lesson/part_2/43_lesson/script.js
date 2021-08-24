const myBio = {
	firstName:'IT',
	lestName:'Yan Tote',
	age: 2021 - 1987,
	job: 'Developer',
	friends: ['Michal', 'Peter', 'Steven']
}

myBio.location = 'Myanmar';
myBio['facebook'] = '@ITyan Tote';
myBio.subject = ['JavaScript', 'Web Design', 'React Js'];
console.log(myBio);

console.log(`${myBio.firstName} ${myBio.lestName} open ${myBio.subject.length} subject and intresting subject is JavaScript`);

// const interstIn = prompt('What do you want to know about My Bio?Choose between ferstName,lestName,age,job,friends');

// if (myBio[interstIn]) {
// 	console.log(myBio[interstIn]);
// } else {
// 	console.log(`Wrong repuest ${interstIn} is not property choose between ferstName,lestName,age,job,friends.`);
//}
// const nameKey = 'Name';
// console.log(myBio);
// console.log(myBio.lestName);

// console.log(myBio['lest' + nameKey]);
// console.log(myBio['first' + nameKey]);
