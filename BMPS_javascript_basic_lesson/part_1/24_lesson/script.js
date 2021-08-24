const hasDriverLicence = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriverLicence & & hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

const shouldDrive = hasDriverLicence && hasGoodVision;

if (hasDriverLicence && hasGoodVision && !isTired) {
	console.log('He Should Be Able To Drive');
} else {
	console.log('He Should Not Be able to Drive');
}
