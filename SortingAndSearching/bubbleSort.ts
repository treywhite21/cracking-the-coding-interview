// Slower, but can be useful
// Time O(n^2). At best O(n) if already sorted.
// Space O(1).

/*
const swap = (arr: number[], idx1: number, idx2: number): void => {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
*/
const bubbleSort = (arr: number[]): number[] => {
	let isSorted = false;
	let lastUnsorted = arr.length - 1;

	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < lastUnsorted; i++) {
			if (arr[i] > arr[i + 1]) {
				isSorted = false;
				swap(arr, i, i + 1);
			}
		}
		lastUnsorted--;
	}

	return arr;
};

console.log(bubbleSort([1,6,3,9,1,0,11,12,10,2,2]));