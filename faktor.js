function faktor(a, i) {
	return a * (i - 1) + 1;
}

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', (line) => {
	var numbers = line.split(' ');
	var a = numbers[0];
	var i = numbers[1];
	var res = faktor(a, i);
	console.log(res);
})