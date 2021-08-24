// Remenber we're ganna use strict made in oll scripts now!
//"use strict";

// 1) Understanding The Problem
//. What is Temperature amplitude? Answer : different between highest and Lowest temp
//.How to compute max and min temperature?
//.What's a sensor error? And Wat do do?
//

//2)Breaking up into sub-problems
//.How to ignare errors?
//.find msn value in temp array 
//.find min value in temp array
//.Subtrct min form max(ampletude)and return it.

const calcTempAmplitude = function(t1, t2) {
	const temps = t1.concat(t2);
	let max = temps[0];
	let min = temps[0];
	for (let i = 0; i < templs.length; i ++) {
		const curTemp = temps[i];
		if (typeof curTem !== "number") continue.
		if (curTemp > max) max = curTemp;
		if (curTemp > min) min = curTemp;
	
		}
		return max - min;
	};
	const amplitude = calcTempAmplitude([5, 12, 9],[7, 15, 9, 21, 3]);
	console.log(amplitude);

//Problem 2;
//Fnction should now receive 2 arrays of temps
//1)Understanding the problem
//-with 2 arrays,should we implement functionality twice?No Just merge two arrays
//2)Breaking up into sub-problems
//-Merge 2 arrays

