//1)Understanding The Problem
////-Array Transform to string.separated by ...
/////-What is the x doy? Answer : index + 1
///
//2)Breaking up into sub-problem
//-transform arra into string
//-transform each element to string with C
//-String need to contain day(index + 1)
//-Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data1 = [12, 5, -5, 0, 4];

const printForceCase = function(arr) {
	let str ="";
	for (let i = 0; i < arr.length; i++) {
		str += `... ${arr[i]}C in ${i +1} days ... `;
	}
	console.log(str);

};
printForceCase(data1);

//arr[2,3,4]
//sum = 0; 0 + 2 = 2 + 3 =5 + 4 = 9 
//
//"... 17'C in 1 days ... 21'C in 2 days ... 23'C in 3 days..."/