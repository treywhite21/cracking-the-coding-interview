const ceilIndex = (arr: number[], target: number): number => {
	if (arr[0] > target) return 0;
	if (arr[arr.length - 1] < target) return -1;
	
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

	return high;
}

const getLisLength = (arr: number[]): number => {
	const tailTable = new Array(arr.length);
	let length = 1;

	tailTable[0] = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < tailTable[0]) {
			// New smallest value
			tailTable[0] = arr[i];
		} else if (arr[i] > tailTable[length - 1]) {
			// arr[i] wants to extend the largest subsequence
			tailTable[length++] = arr[i];
		} else {
			// arr[i] wants to be the current end candidate of an
			// existing subsequence. It will replace ceil value
			// in tailTable
			tailTable[ceilIndex(tailTable, arr[i])] = arr[i];
		}
	}

	return length;
}

console.log(getLisLength([2, 5, 3, 7, 11, 8, 10, 13, 6]));
console.log(ceilIndex([2, 7, 11, 15], 1));