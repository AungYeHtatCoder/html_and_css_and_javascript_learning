//console.log('Ext: Hello World');

// Identifier

// userLastName
// pageNavigation
// devPhase
// text123

// Reserved keywords

// case-sensitivity

// color      		COLOR
// instanceof		instanceof

// statement

// semicolon (;) 

console.log('Hello')
console.log('World')

console.log('Works Fine');
[1, 2].forEach(console.log)

// Comments

// This is a single-line Comment

// This is a block or multi-line Comment that can have multiple lines
 
// "use strict" --> on the top 
'use strict'

// this code the works the modern way
...

// Varoab;es

'use strict'
 
// var ename;
// ename = 'Smith';
// console.log(ename);

// var job = 'Manager';

// var ename = 'King',
// 	age = 50
// 	job = 'President';
// ename = 9999;

// var dept;
// console.log(dept);

// console.log(sal); 

// function sayGreeting() {
// 	// local variable
// 	var message = 'Hello';
// 	console.log(message);
// }
// sayGreeting();
// console.log(message);

// global variable
// var message = 'Welcome';
// function sayGreeting() {
// 	// local variable
// 	var message = 'Hello';
// 	console.log(message);
// }
// sayGreeting();
// console.log(message);

// global variable
// var message = 'Welcome';
// function sayGreeting() {
// 	// local variable
// 	// var message = 'Hello'
// 	var message = 'Hello';
// 	console.log(message);
// }
// sayGreeting();
// console.log(message);

// function sayGreeting() {
// 	message = 'Hello';
// 	console.log(message);
// }
// sayGreeting();
// console.log(message);

'use strict'

// function sayGreeting() {
// 	message = 'Hello';
// 	console.log(message);
// }
// sayGreeting();
// console.log(message);

// console.log(ename);
// var ename;
// ename = 'Smith';

// var ename;
// console.log(ename);
// ename = 'Smith';

// var sal = 2000, age = 40;
// {
// 	let temp = sal;
// 	sal = age;
// 	age = temp;
// }
// console.log(temp);

const DESIGNATION = 'Manager';
DESIGNATION = 'Salesman';
console.log(DESIGNATION);

// var dept = 30;
// dept = false;
// dept = "Sales";

// number

// var num = 100;

// var binNum = 0b11111111
// console.log(binNum);

// var octNum = 0o50;
// console.log(octNum);

// var hexNum = 0xDE;
// console.log(hexNum);

// var num1 = 123.45;
// var num2 = .5;
// console.log(num2);

// var num3 = 200.00;
// console.log(num3);

// var billion = 7.3e9;
// console.log(billion);

// var ms = 1.23e-6;
// console.log(ms);

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(1/0);
// console.log(Number.MAX_VALUE + Number.MAX_VALUE);
// console.log(-Number.MAX_VALUE - Number.MAX_VALUE);

// console.log('not a number'/5);

// console.log(NaN/2);
// console.log(NaN == NaN);

// string

// console.log('Sale\'s' + '\t' + "Department");

// var name = 'Smith';
// console.log(`Welcome, ${name}`);

// var str = 'String: ';
// str = str + 'Immutability';
// console.log(str);
// boolean

// var isEnameValidated = true;
// var isAgeValidated = false;

// var isGreater = 50 > 10;
// console.log(isGreater);

// console.log(Boolean('Hello')); // true
// console.log(Boolean('')); // false

// console.log(Boolean(500)); // true
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(NaN)); // false

// console.log(Boolean({century: 100})); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false

// null

// var job = null;

// if (job != null) {
// 	execute the logic
// }

// undefined

// var ename;
// console.log(ename);

// Symbol

// var sym1 = Symbol();
// console.log(Symbol()'event.save');
// console.log(sym2.toString());

// const CLICK = Symbol('click');

// Obje

// var dept = new Object();

// var emp = {};

// var emp = {
// 	firstName: 'Smith',
// 	lastName: 'Weber'
// };

// var contact = {
// 	firstName: 'Jack',
// 	lastName: 'Roy',
// 	email: 'abc@gmail.com',
// 	phone: '(444)-555-6666',
// 	address: {
// 		city: 'Oakland',
// 		state: 'CA',
// 		country: 'USA'
// 	}
// }

// console.log(contact.firstName);
// console.log(contact.lastName);
// console.log(contact.address.country);
// console.log(contact.age);

// console.log(contact['phone']);
// console.log(contact['email']);

// var client = new Object();
// client.company = 'Apple Inc.';
// console.log(client.company);

// typeof operator

// console.log(typeof 0);
// console.log(typeof "Welcome");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof nudefined);

// instanceof operator

var atr = new String("Tesing");
var dt = new Date();

console.log(str instanceof String);  //true
console.log(str instanceof Date);  //true

// Primitive vs. Reference

// var x = 50;
// var y = x;
// y = 100;

// console.log(x);
// console.log(y);

var p = {dept: 'R&D'};
var q = p;
q.dept = 'Sales';

console.log(p.dept);
console.log(q.dept);

//Browser specifice functions

// alert('This is a warning Message');

// var job = prompt('What is your role?', 'Manager');
// alert(`You are ${job}!!!`);

// var isSalesman = prompt('Are you Salesman?');
// var isSalesman = prompt('Are you Salesman?', '');
// alert(`You are ${isSalesman}!!!`);

var isManager = confirm('Are you Manager?');
alert(isManager);

// Number
//  var numberObj = new Number(50);
//  console.log(numberObj.valueOf());

//  var count = 45;
//  console.log(count.toString());
//  console.log(count.toString(2));

//  console.log((255).toString(16));

// console.log(parseInt('100px') );
// console.log(parseInt('21.5$') );

// console.log(Math.floor(15.8));
// console.log(Math.ceil(15.8));
// console.log(Math.round(15.8));
// console.log(Math.truec(15.8));
// console.log(Math.random());

// console.log(Math.max(7, -10, 0));
// console.log(Math.min(7, -10, 0));
// console.log(Math.pow(2, 10));

// toFixed()
// var (numberObj.toFixed());
// var (numberObj.toFixed(1));
// var (numberObj.toFixed(4));


// // toExponential()
// var x = 70, y = 789000;
// console.log(x.toExponential());
// console.log(y.toExponential());

// toPrecision()
// var z = 1.456;
// console.log(z.toPrecision());  1.456
// console.log(z.toPrecision(2));  1.5
// console.log(z.toPrecision(1));  1 

var numObj = new Number(10);
var num = 10;

console.log(typeof Object);  // object
console.log(typeof num);  // number

console.log(numObj instanceof Number); // true
console.log(num instanceof Number); // false

// String

// var str = new String('Test');

// console.log(str.length);  // 4  
// console.log(str.valueOf());
// console.log(str.toString());  // Test

// var ename = 'Smith';
// console.log(ename.toLowerCase());  // smith
// console.log(ename.toUpperCase());  // SMITH

// console.log(str[0]);  // T
// console.log(str.charAt(1));  // e

// var s1 = "paul";
// var s2 = "Miller";
// var s3 = s1.concat(s2);
// console.log(s3);
// console.log(s1);

// var s4 = s1 + s2;
// console.log(s4);

// substr(startIndex, length)

var str = "Chrome Browser";
// console.log(str.substr(0, 8));  // chrome B
// console.log(str.substr(8, 4));  // rows

// substring(startIndex, endIndex)

// var str = "Chrome Browser";
// console.log(str.substring(2, 13)); // rome browse

// string.tndexOf(substring, fromIndex);

// var str = "Chrome Browser";
// console.log(str.indexOf('ro, 1'));  // 2
// console.log(str.indexOf('ro'));  // 2
// console.log(str.indexOf('Google'))  // -1

// string.lastIndexOf(substring, formIndex);


// var str = "Chrome Browser";
// console.log(str.lastIndexOf('ro', 6));  //2
// console.log(str.lastIndexOf('ro'));  // 8
// console.log(str.lastIndexOf('ro'));  //-1

// var greet = ' Hello';
// console.log(greet.trim());  // Hello

// girstStr.localeCompare(secondStr);
// console.log('X'.localeCompare('Y'));  // -1
// console.log('Y'.localeCompare('Y'))l  // 0

// var str = 'USE Chrome Browser';
// var pos = str.search(/se/);
// console.log(pos);  //15

str.replace(substr, newSubstr)

var url = 'abc.com/bird=fly';
var newUrl = url.replace(/bird/g, 'pigeon');

console.log(newUrl);
console.log(url);

// boolean vs. Boolean

// var test = Boolean('Hello');
// console.log(test);  // true
// console.log(typeof(test));  // boolean

// var testVal = new Boolean(false);
// console.log(testVal.valueOf());  // false
// console.log(testVal.toString());  // 'false'

// var mu = true;
// var sigma = new Boolean(false);

// sigma.primitiveValue = sigma.valueOf();
// console.log(sigma.primitiveValue);  // false

// mu.name = 'primitive';  // TypeError
// console.log(mu.name);  // undefined

// console.log(typeof mu);  // boolean
// console.log(typeof sigma);  // object

// console.log(mu instanceof Boolean);  // false
// console.log(sigma instanceof Boolean);  // true

var falseObj = new Boolean(false);

if (falseObj) {
	console.log('Strage part of the Boolean Object');
}































































































