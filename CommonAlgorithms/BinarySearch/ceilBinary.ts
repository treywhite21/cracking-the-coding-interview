const findCeiling = (arr: number[], target: number) => {
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
	} else {
		return high;
	}
}

const ceilBinary = (arr: number[], target: number) => {
	// If all numbers in sorted array are smaller than target
	// Array doesn't contain target or ceiling
	if (arr[arr.length - 1] < target) return -1;

	return findCeiling(arr, target);
}

console.log(ceilBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(ceilBinary([0, 21, 45, 67, 99], 83));
console.log(ceilBinary([-50, -25, -1, 0, 23], 0));