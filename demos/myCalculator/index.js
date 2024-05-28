/**
 * @description This is a simple function that takes in two numbers, an operator
 * and uses the calculator module to compute the results.
 * Usage:
 * node index2.js 1 + 2
 * node index2.js 1 - 2
 * node index2.js 1 * 2
 * node index2.js 1 / 2
 * 
 * Note: The * and ^ operators need to be escaped with a backslash, to prevent the shell from interpreting them.
 * Example: node index2.js 1 \* 2
 * 
 */
const calculator = require('./calculator');

const args = process.argv.slice(2);

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[2]);
const operator = args[1];

try {
    const result = calculator(num1, num2, operator);
    console.log(result);
} catch (error) {
    console.error(error.message);
}


