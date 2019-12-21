function main(input) {
	// Split input into individual lines
	var all_lines = input.split("\n");

	// Start solving this shit
	// In this case, we already know they have 2 lines
	var gunnar_dice = all_lines[0].split(" ");
	var emma_dice = all_lines[1].split(" ");

	// Sum of all faces
	function arr_sum(arr) {
		var accumulator = 0;
		var len = arr.length;
		for (var i = 0; i <= len - 1; i = i + 1) {
			accumulator += parseInt(arr[i]);
		}
		return accumulator;
	}

	// print out result
	var res = arr_sum(gunnar_dice) > arr_sum(emma_dice)
		? "Gunnar"
		: arr_sum(gunnar_dice) < arr_sum(emma_dice)
			? "Emma"
			: "Tie";

	process.stdout.write(res); // Put your output inside there
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

// Form long string of input inside data
process.stdin.on("data", (input) => {
	stdin_input += input;
});

process.stdin.on("end", () => {
   main(stdin_input);
});

