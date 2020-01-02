const getSign = (a: number, b: number) => {
	if (a >= 0 && b >= 0 || a < 0 && b < 0) {
		return 1;
	} else {
		return -1;
	}
}

const recurseMultiply = (a: number, b: number, origA: number): number => {
	if (a === 0 || b === 0) return 0;
	if (a === 1) return b;
	if (b === 1) return a;

	return recurseMultiply(a + origA, b - 1, origA);
};

const recursiveMultiply = (a: number, b: number) => {
	const sign = getSign(a, b);
	const product = recurseMultiply(Math.abs(a), Math.abs(b), Math.abs(a));
	
	if (sign === 1) {
		return product;
	} else {
		return product - product - product;
	}
}

console.log(recursiveMultiply(1, 5));
console.log(recursiveMultiply(2, 5));
console.log(recursiveMultiply(5, 2));
console.log(recursiveMultiply(3, -5));
console.log(recursiveMultiply(-3, -5));
console.log(recursiveMultiply(-3, 5));
console.log(recursiveMultiply(1, 5));
console.log(recursiveMultiply(12, -12));