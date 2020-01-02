// Breaks on larger numbers
const factorialZeros = (n: number): number => {
	let factorialProduct = 1;
	if (n === 0 || n === 1) return factorialProduct;

	for (let i = n; i > 0; i--) {
		factorialProduct *= i;
	}

	const strProduct = factorialProduct.toString();
	let j = strProduct.length - 1;
	let zeroCount = 0;
	while (strProduct.charAt(j) === '0') {
		zeroCount++;
		j--;
	}

	return zeroCount;
}

const countFactZeros = (n: number): number => {
	let count = 0;
	if (n < 0) {
		return -1;
	}
	for (let i = 5; n / i > 0; i *= 5) {
		count += Math.floor(n / i);
	}
	return count;
}

console.log(factorialZeros(19));
console.log(countFactZeros(19));
console.log(countFactZeros(29));
console.log(factorialZeros(25));
console.log(factorialZeros(100));
console.log(countFactZeros(100));