function emp(firstName, lastName) {
	var e = new Pbject();

	e.firstName = firstName;
	e.lastName = lastName;

	emp.empFullName = function() {
		console.log('Employee name is: ' + e.firstName + ' ' + e.lastName);
	}

	return e;
}

var smith = emp('Smith', 'Miller');
var jones = emp('Jones', 'Blake');

smith.empFullName();  // Employee name is:  Smith Miller
jones.empFullName();  // Employee name is:  Smith Blake

















