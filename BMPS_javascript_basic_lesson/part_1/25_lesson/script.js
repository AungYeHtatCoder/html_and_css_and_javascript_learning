// const scoreDolphin = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 110) / 3;
// console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin > scoreKoalas) {
// 	console.log('Dolphin win Trophy');
// } else if (scoreKoalas > scoreDolphin) {
// 	console.log('Both win Trophy');
// }

const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 110) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
	console.log('Dolphin win Trophy');
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
	console.log('Both win Trophy');
} else if (scoreDolphin === scoreKoalas && scoreDolphin >= 100 & scoreKoalas >= 100) {

} else {
	console.log('Both win Trophy');
}