// O(log n) search for index on sorted array
const basicBinarySearch = (arr: number[], target: number): number => {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = Math.floor(low + ((high - low) / 2));

		if (target > arr[mid]) {
			low = mid + 1;
		} else if (target < arr[mid]) {
			high = mid - 1;
		} else {
			return mid;
		}
	}

	return -1;
}

console.log(basicBinarySearch([0, 1, 2, 3, 4, 5], 5));
console.log(basicBinarySearch([0, 1, 2, 3, 4, 5], 0));
console.log(basicBinarySearch([0, 1, 2, 3, 4, 5], 6));
console.log(basicBinarySearch([0, 1, 2, 3, 4, 5], 2));
console.log(basicBinarySearch([1, 2, 3, 4, 5, 10, 12, 24], 12));
console.log(basicBinarySearch([0, 11, 2012, 3000, 3001, 3002], 3001));