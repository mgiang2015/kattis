function main(input) {
	var all_lines = input.split("\n");
	var qaly_time = parseInt(all_lines[0]);
	var current_line = 1;
	var acc = 0;

	while (current_line <= qaly_time) {
		const info = all_lines[current_line].split(" ");
		acc = acc + parseFloat(info[0])*parseFloat(info[1]);
		current_line = current_line + 1;
	}

	process.stdout.write(acc.toString());
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var std_input = "";

process.stdin.on("data", (input) => {
	std_input += input;
});

process.stdin.on("end", () => {
	main(std_input);
})