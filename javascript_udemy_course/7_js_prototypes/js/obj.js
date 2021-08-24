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

// console.log(Object);
// console.log(Object.prototype);

// console.log(Object.prototype.constructor === Object);

// function Emp(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// Emp.prototype.empFullName = function() {
// 	console.log('EmpLoyee Name is: ' + this.firstName + ' ' + this.lastName);
// }

// var smith = new Emp('Smith', 'Miller');

// var steve = new Emp('Steve', 'Blake');

// steve.greet = function() {
// 	console.log('Welcome !!! \n' + this.empFullName());
// }

// console.log(smith.constructor);  // Emp()

// console.log(smith.constructor === Emp);  // true

// console.log(Object.prototype.constructor === Object);

// function Emp(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// Emp.prototype.empFullName = function() {
// 	console.log('EmpLoyee Name is: ' + this.firstName + ' ' + this.lastName);
// }

// var smith = new Emp('Smith', 'Miller');

// var steve = new Emp('Steve', 'Blake');

// console.log(smith._ _proto_ _ == Emp.proto_ _);  // true

// console.log(smith._ _proto_ _ == steve.proto_ _);  // true

// console.log(smith._ _proto_ _ == Object.getPrototypeOf(smith));  // true

// console.log(smith._ _proto_ _ == constructor.prototype);  // true


function Emp(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Emp.prototype.empFullName = function() {
	console.log('EmpLoyee Name is: ' + this.firstName + ' ' + this.lastName);
}

var smith = new Emp('Smith', 'Miller');

smith.empFullName();  // Employee Name is: Smith Miller

smith.empFullName = function() {
	console.log('Employee Name is: ' + this.firstName + ' ' + this.lastName);

	console.log('Hello: ' + this.firstName + ' ' + this.lastName);
}

smith.empFullName();  // Hello: smith Miller

// var emp = {
// 	fullName: function() {
// 		return this.firstName + ' ' + this.lastName;
// 	}
// }

// var mgr = Object.create( , );

// var mgr = Object.create(null);

// var developer = Object.create(emp);

// console.log(mgr);
// console.log(developer);

// var emp = {
// 	fullName: function() {
// 		return this.firstName + ' ' + this.lastName;
// 	}
// }

// var developer = Object.create(emp);

// developer.firstName = 'Simone';
// developer.lastName = 'Wever';

// console.log(developer.fullName());  // Simone Weber

// console.log(developer);

// var emp = {
// 	fullName: function() {
// 		return this.firstName + ' ' + this.lastName;
// 	}
// }

// var developer = Object.create(emp);

// console.log(Object.getPrototypePf(developer) === emp);  // true

let organization = {
	employed() {
		return 'Works for: XYZ Pvt. Ltd.';
	}
}

let role = {
	developer() {
		return 'Appointed as: JS developer';
	}
}

Object.setPrototypeOf(role, organization);

console.log(role.developer());  // Appointed as: JS Developer

console.log(role.employed());  // XYZ Pvt. Ltd.

console.log(role);

// const emp = {
// 	ename: 'Initial Surname',
// 	age: 42,
// 	sal: 70000
// };

// console.log('*** Retriving Properties ***');

// for (var empProp of Object.entries(emp)) {
// 	console.log(empProp);
// }

// console.log('*** Retriving Keys: ***');

// for (var emKey of Object.Keys(emp)) {
// 	console.log(empKey);
// }

// console.log('*** Retriving Value: ***');

// for (var empValue of Object.entries(emp)) {
// 	console.log(empValue);
// }

// const emp = {
// 	ename: 'Initial Surname',
// 	age: 42,
// 	sal: 70000
// };

// console.log(emp.hasOwnProperty('age'));  // true

// console.log(emp.hasOwnProperty('toString'));  // false

// console.log(emp.hasOwnProperty('hasOwnProperty'));  // false

const emp = {
	ename: 'Initial Surname',
	age: 42,
	sal: 70000
};

const commission = Symbol('comm');

emp[commission] = 11000;

console.log(Object.getOwnPropertyNames(emp));

console.log(Object.getOwnPropertySymbols(emp));

// var animal = {
// 	eats: true,

// 	wald: function() {
// 		console.log('Walks at Ground');
// 	}
// }

// var bird = {
// 	fly: function() {
// 		console.log('Flies at Sky');
// 	}
// }

// bird._ _proto_ _ = animal;

// console.log(bird.eats);  // true
// bird.walk();  // Walks at Ground

// bird.fly();  // Flies at Sky

var animal = {
	eats: true,

	wald: function() {
		console.log('Walks at Ground on ' + this.limbs + ' lengs');
	}
}

// var bird = {
// 	limbs: 2,

// 	fly: function() {
// 		console.log('Flies at Sky');
// 	}
// }

// bird._ _proto_ _ = animal;

// bird.walk();  // Walks at Ground on 2 legs

function object(obj) {
	function F() {

	};
	F.prototype = obj;
	return new F();
}

var bird = {
	limbs: 2,

	walk: function() {
		console.log('Flies at Sky');
	}
}

var bird = object(animal);

bird.limbs = 2;

bird.fly = function() {
	console.log('Flies at Sky');
}

bird.walk();  // Walks at Ground on 2 legs
bird.fly();  // Flies at Sky

// console.log(this === window);  // true

// this.test = 'Testing';
// console.log(window.test);  // Testing

// 1. Function invocation 

// function test() {
// 	console.log(this === window);  // true
// }

// test();

// function test() {
// 	'use strict';

// 	console.log(this === window);  // true
// }

// test();

// 2. Method invocation

// var emp = {
// 	role: 'Developer', 

// 	getRole: function() {
// 		return this.role;
// 	}
// }

// console.log(emp.getRole());  // Developer

// var empAsDev = emp.getRole;
// console.log(empAsDev());  // undefined

// var emp = {
// 	role: 'Developer', 

// 	getRole: function() {
// 		return this.role;
// 	}
// }

// console.log(emp.getRole());  // Developer

// var empAsDev = emp.getRole.bird(emp);
// console.log(empAsDev() + ': called via. bird()');
// Developer

// 3. Constructor invocation

// function Emp(role) {
// 	this.role = role;
// }

// Emp.prototype.getRole = function() {
// 	return this.role;
// }

// var Emp = new Emp('Developer');
// console.log(Emp.getRole());

// function Emp(role) {
// 	this.role = role;
// }

// Emp.prototype.getRole = function() {
// 	return this.role;
// }

// var Emp = Emp('Developer');
// console.log(Emp.getRole());

// function Emp(role) {
	// if (! (this instanceof Emp)) {
	// 	throw Error('Call the function via\'new\' operator only');
	// }
	
// 	if (! new.target) {
// 		throw Error('Call the function via\'new\' operator only');
// 	}
// 	this.role = role;
// }

// Emp.prototype.getRole = function() {
// 	return this.role;
// }

// var Emp = new Emp('Developer');
// console.log(Emp.getRole());

// 4. Indirect invocation

function getRole(prefix) {
	console.log(prefix + this.role);
}

v;ar dev = {
	role: 'Developer'
};

var mgr = {
	role: 'Manager'
}

console.log('via. call()');

getRole.call(dev, 'Developer by: ');  // Developed by: Developer
getRole.call(mgr, 'Managed by:');  // Managed by: Manager

console.log('via. apply()');

getRole.call(dev, ['Developer by: ']);  // Developed by: Developer
getRole.call(mgr, ['Managed by:']);  // Managed by: Manager





















