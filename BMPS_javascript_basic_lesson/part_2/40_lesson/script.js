const friends = ['Michal', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');
console.log(friends);
const.poped = friends.pop();
const.log(friends);
console.log(popped);
friends.shift();
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends);
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
	console.log('You have a friend called Steven');
}