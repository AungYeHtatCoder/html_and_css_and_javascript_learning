const myBio = [
	'IT',
	'Yan Tote',
	2021 - 1987,
	'Developer', ['Michal', 'Peter', 'Steven'],
	
]

for (let i = myBio.length - 1; i >=  0; i--) {
	console.log(myBio[i]);
}

for (let exercises = 1; exercises < 4; exercises++) {
	console.log(`-----------Main Exercise ${exercises}-----------`);
	for (let rep = 1; rep <6; rep++) {
		console.log(`----------- Sub Exercises ${rep}`);
	}
}