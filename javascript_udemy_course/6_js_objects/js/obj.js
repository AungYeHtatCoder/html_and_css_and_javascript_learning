'use strict';

// Object literal
// var emp = {};

// // Object constructor
// var emp = new Object();
// var emp = new Object(nudefined);
// var emp = new Object(null);

// Objict literal
// var emp = {
// 	isManager: false,
// 	hired: function() {
// 		this.isManager = true;
// 		console.log('Employee started working.');
// 	}
// };

// console.log('Are you Manager?  + emp.isManager');  //false
// emp.hired();  // employee started working.

// Object constructor
var emp = new Object();

emp.hired = function() {
	this.isManager = true;
	console.log('Employee started working.');
}

console.log('Are you Manager? ' + emp.isManager);  // false
emp.hired();  // employee started working.

// types of properties

// Object.defineProperty(1st, 2nd, 3rd);

// lst --> Object
// 2nd --> property name of the Object
// 3rd --> property descriptors: data/ accessor

// data descriptors:
// 1st --> Configurable
// 2nd --> Enumeravle
// 3rd --> Writable
// 4th --> Value

// var emp = {};

// emp.isManager = false;
// console.log('Before deletion: ' + emp.isManager);  // fasle
// delete emp.isManager;
// console.log('Afterdeletion: ' + emp.isManager); // undefined

// var emp = {}

// Object.defineProperty(emp, 'isManager',{
// 	configurable: false,
// 	value: false
// });

// delete emp.isManager;  // TypeError

// var emp = {}

// Object.defineProperty(emp, 'isManager',{
// 	configurable: false,
// 	value: false
// });
// Object.defineProperty(emp, 'isManager',{
// 	configurable: true
// });
// delete emp.isManager;  // TypeError

// var emp = {}

// emp.isManager = false;
// emp.ename = 'Smith';

// for (var property in emp) {
// 	console.log(property);  // isManager, ename
// }

// var emp = {}

// emp.isManager = false;
// emp.ename = 'Smith';

// Object.defineProperty(emp, 'ename',{
// 	configurable: false
// });

// for (var property in emp) {
// 	console.log(property);  // isManager, ename
// }

// Accessor property

// var empDetails = {
// 	firstName: 'James',
// 	lastName: 'Miller'
// }

// Object.defineProperty(empDetails, 'fullName', {
// 	Comment: Starts
// 	get: function() {
// 		return this.firstName + ' ' + this.lastName;
// 	};
// 	set: function(value) {
// 		var sections = value.split(' ');
// 		if (sections.length == 2) {
// 			this.firstName = sections[0];
// 			this.lastName = sections[1];

// 		} else {
// 			throw 'Invalid format: Name';
// 		}
// 	}
// 	Comment: Ends
// 	get() {
// 		return this.firstName + ' ' + this.lastName;
// 	};
// 	set(value) {
// 		var sections = value.split(' ');
// 		if (sections.length == 2) {
// 			this.firstName = sections[0];
// 			this.lastName = sections[1];

// 		} else {
// 			throw 'Invalid format: Name';
// 		}
// 	}
// });

// console.log(empDetails.firstName);  // James Miller

// emp.firstName = 'Smith Roy';

// console.log(empDetails.firstName);  // Smith
// console.log(empDetails.lastName);  // Roy
// console.log(empDetails.fullName);  // SmithRoy

var empSal = {};

Object.defineProperties(empSal, {
	ename: {
		value: 'Smith'
	},
	sal: {
		value: 5000
	},
	comm: {
		value: 0.2
	},
	netSal: {
		get: function() {
			return this.sal * (1 + this.comm);
		}
	}
});

console.log('The net Salary of ' + emSal.ename + ' is ' + empSal.netSal.toFixed(2) + ' USD');

console.log('***************')

var descriptor = 
Object.getOwnPropertyDescriptor(empSal, 'ename');

console.log(descriptor.configurable);  // false
console.log(descriptor.Writable);  // false
console.log(descriptor.enumerable);  // false
console.log(descriptor.value);  // Smith

// function emp(ename, age) {
// 	return {
// 		ename: ename,
// 		age: age,
// 		toString: function() {
// 			return 'Employee: ' +'\'' + ename + '\'';
// 		};
// 		valueOf: function() {
// 			return age + ' Years Old';
// 		}
// 	};
// }

// var simone = emp('Simone Weber', 27);

// console.log(simone.toString());
// alert(simone.toString());

// console.log(simone.valueOf());
// alert(simone.valueOf());

let emp = {
	ename: 'Simone Weber',
	age: 27,

	[Symbol.toPrimitive] (hint) {
		console.log(`hint: ${hibt}`);

		return hint == 'string' ? 'Employee: ' + '\'' + this.ename + '\' ' : this.age;
	}
};

console.log(String(emp));
console.log(+ emp);
console.log(emp + 3);











































