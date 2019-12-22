const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', (line) => {
	var Nlist = line.split(' ');
	var N = parseInt(Nlist[0]);
	var i = 1;
	while (i <= N) {
		console.log(i + " Abracadabra");
		i = i + 1;
	}
})