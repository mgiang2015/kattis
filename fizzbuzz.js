const readline = require('readline'); // read test cases data

const rl = readline.createInterface({
    input: process.stdin, // input
    output: process.stdout // output
});

rl.on('line', (line) => {
    var xyn = line.split(' '); // get all the numbers in the test cases
    var x = parseInt(xyn[0]);
    var y = parseInt(xyn[1]);
    var n = parseInt(xyn[2]);
    var int = 1;
    while (int <= n) {
    	if ((int % x === 0) && (int % y === 0)) {
    		console.log('FizzBuzz');
    	}
    	else if (int % x === 0) {
    		console.log('Fizz');
    	}
    	else if (int % y === 0) {
    		console.log('Buzz');
    	}
    	else {
    		console.log(int);
    	}
    	int = int + 1;
    }
});