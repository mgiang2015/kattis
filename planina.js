// Recursive sln
function pow(x,y) {
	function helper(x, y, acc) {
		return y === 0
			? acc
			: helper(x, y - 1, acc*x);
	}
	return helper(x, y, 1);
}

function planina(iter) {
	if (iter === 0) {
		return 4;
	}
	else {
		return planina(iter-1) * 4 - pow(2, iter+1) - 3;
	}
}
// iterative
function planina_iter(iter) {
	function helper(iter, total) {
		return iter === 0
			? total
			: helper(iter - 1, total * 4 - pow(2, iter+1) - 3);
	}
	return helper(iter, 4);
}

 
const readline = require('readline'); // read test cases data

const rl = readline.createInterface({
    input: process.stdin, // input
    output: process.stdout // output
});

rl.on('line', (line) => {
    var iters = line.split(' '); // get all the numbers in the test cases
    var iter = parseInt(iters[0]); // specify which number to put as an input
    var res = planina(iter); // your algo
    console.log(res); // printing out the result
});