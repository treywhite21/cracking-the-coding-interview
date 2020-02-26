const getLengths = (shorter, longer, k) => {
	const lengths = new Set();

	for (let i = 0; i <= k; i++) {
		const length = shorter * i + longer * (k - i);
		lengths.add(length);
	}

	return lengths.size;
}

console.log(getLengths(2, 4, 1));
console.log(getLengths(2, 4, 2));
console.log(getLengths(2, 4, 3));
console.log(getLengths(2, 2, 4));