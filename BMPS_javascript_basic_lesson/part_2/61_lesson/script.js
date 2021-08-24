// const measureKelvin = function() {
// 	const measurement = {
// 		type: 'temp',
// 		unit: 'celsius',
// 		value: Number(prompt()),
	// };
	// console.log(measurement);
	// console.table(measurement)
	// console.log(measurement.value);
	// console.warn(measurement.value);
	// console.error(measurement.value);
// 	const kelvin = measurement.value + 273;
// 	return kelvin;
// };
// console.log(measureKelvin());

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
		console.log(max - min);
		return max - min;
	};
	const amplitude = calcTempAmplitude([5, 12, 9],[7, 15, 9, 21, 3]);
	console.log(amplitude);

