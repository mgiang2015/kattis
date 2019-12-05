/* Your task will be to write a program for reversing numbers in binary. 
For instance, the binary representation of 13 is 1101, 
and reversing it gives 1011, which corresponds to number 11.*/

function reverse_binary(num) {
	const bin_num_str = num.toString(2);
	const bin_reverse = bin_num_str.split('').reverse().join('');
	const new_num = parseInt(bin_reverse, 2);
	return new_num;
}
// Standard flow for Kattis solutions
const readline = require('readline'); // read test cases data

const rl = readline.createInterface({
    input: process.stdin, // input
    output: process.stdout // output
});

rl.on('line', (line) => {
    var nums = line.split(' '); // get all the numbers in the test cases
    var a = parseInt(nums[0]); // specify which number to put as an input
    var res = reverse_binary(a); // your algo
    console.log(res); // printing out the result
});