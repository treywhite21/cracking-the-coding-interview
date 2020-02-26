/*
	Problem Statement: Given a sorted array with possible duplicate elements.
	Find number of occurrences of input ‘key’ in log N time.

	The idea here is finding left and right most occurrences of key in the array
	using binary search. We can modify floor function to trace right most occurrence
	and left most occurrence. Here is implementation,
*/

const getRightPosition = (arr: number[], target: number): number => {
	let high = arr.length;
	let low = 0;

	while (high - low > 1) {
		let mid = Math.floor(low + ((high - low) / 2));

		if (arr[mid] <= target) {
			low = mid;
		} else {
			high = mid;
		}
	}

	return low;
}

const getLeftPosition = (arr: number[], target: number): number => {
	let low = -1;
	let high = arr.length - 1;

	while (high - low > 1) {
		let mid = Math.floor(low + ((high - low) / 2));

		if (arr[mid] >= target) {
			high = mid;
		} else {
			low = mid;
		}
	}

	return high;
}

const countOccurances = (arr: number[], target: number): number => {
	const left = getLeftPosition(arr, target);
	const right = getRightPosition(arr, target);

	// Make sure element exists in array and, if so, return count else return zero
	return (arr[left] === target && arr[right] === target) ? (right - left + 1) : 0;
}

console.log(countOccurances([1, 1, 2, 2, 2, 3, 3, 3, 3, 3], 3));
console.log(countOccurances([1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 5], 5));