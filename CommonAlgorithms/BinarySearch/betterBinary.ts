
const binarySearchWithFewerComparisons = (arr: number[], target: number) => {
	let low = 0;
	let high = arr.length - 1;

	while (high - low > 1) {
		let mid = Math.floor(low + ((high - low) / 2));

		if (arr[mid] <= target) {
			low = mid;
		} else {
			high = mid;
		}
	}

	if (arr[low] === target) {
		return low;
	} else if (arr[high] === target) {
		return high;
	} else {
		return -1;
	}
}

console.log(binarySearchWithFewerComparisons([0, 1, 2, 3, 4, 5], 5));
console.log(binarySearchWithFewerComparisons([0, 1, 2, 3, 4, 5], 0));
console.log(binarySearchWithFewerComparisons([0, 1, 2, 3, 4, 5], 6));
console.log(binarySearchWithFewerComparisons([0, 1, 2, 3, 4, 5], 2));
console.log(binarySearchWithFewerComparisons([1, 2, 3, 4, 5, 10, 12, 24], 12));
console.log(binarySearchWithFewerComparisons([0, 11, 2012, 3000, 3001, 3002], 3001));