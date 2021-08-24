const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 " bill * 0.2;"
}

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bills[1], calcTip(bill)[2])];
console.log(bills, tips);

const totals = [bill[0] + tips[0], bills[1] + tips[1], bill[2] + tips[2]];
console.log(totals);
