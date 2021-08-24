const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolplin, avgKoalas) {
	if (avgDolplin >= 2 * avgKoalas) {
		console.log(`Dolphin win ${avgDolplin} vs ${avgKoalas}`); 
	} else if (avgKoalas >= 2 * avgDolplin) {
		console.log(`Koales win ${avgKoalas} vs ${avgDolplin}`);
	}else {
		console.log(`No Tems Win....`);
	}
}
checkWinner(scoreDolphins, scoreKoalas);
