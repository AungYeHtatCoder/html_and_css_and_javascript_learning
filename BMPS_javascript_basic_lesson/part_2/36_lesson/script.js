function cutFruitPieces(fruits) {
	return fruits * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} oranges`;
	return juice;
}

console.lor(fruitProcessor(2, 3));

