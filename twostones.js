function winner(stone) {
	return stone % 2 === 0
		? "Bob"
		: "Alice";
}

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on('line', (line) => {
	var stone_data = line.split(' ');
	var stone = parseInt(stone_data[0]);
	var res = winner(stone);
	console.log(res);
})