/*
	Problem Statement: Given a sorted array of distinct elements, and the array is
	rotated at an unknown position. Find minimum element in the array.

	We can see  pictorial representation of sample input array in the below figure.
*/

const minimumRotatedBinary = (arr: number[]): number => {
	let low = 0;
	let high = arr.length - 1;

	// If it's already sorted, return 0 index
	if (arr[low] <= arr[high]) return low;

	while (low <= high) {
		// Termindation condition where low eventually falls on high
		if (low === high) return low;

		let mid = Math.floor(low + ((high - low) / 2));

		// If top half is sorted
		if (arr[mid] < arr[high]) {
			// min can't be in the range from mid + 1 to high
			high = mid;
		} else {
			// top half is unsorted, so min is in it
			low = mid + 1;
		}
	}

	return -1;
};

console.log(minimumRotatedBinary([6, 7, 8, 9, 10, 1, 2, 3, 4, 5]));
console.log(minimumRotatedBinary([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(minimumRotatedBinary([20, 21, 24, 12, 13, 14, 15]));