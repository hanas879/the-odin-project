function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (array) {
	return array.reduce((a,b) => a + b, 0)
}

function multiply (array) {
	return array.reduce((a,b) => a * b)
}

function power(a,b) {
	return a ** b
}

function factorial(num) {
	let result = num
	if(num === 0 || num === 1) {
		return 1
	}
	while(num > 1) {
		num --
		result *= num
	}
	return result
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}