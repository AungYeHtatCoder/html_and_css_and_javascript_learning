const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	hight: 1.69,
	calcBME: function() {
		this.bmi = this.mass / this.hight ** 2;
	}
}

const john = {
	fullName: 'Mark Miller',
	mass: 78,
	hight: 1.69,
	calcBME: function() {
		this.bmi = this.mass / this.hight ** 2;
	}
}
mass.calcBME();
john.calcBME();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher then ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi >mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher then ${mark.fullName}'s BMI (${mark..bmi})`)
}
