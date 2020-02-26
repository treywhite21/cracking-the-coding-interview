const mergeHalves = (arr: number[], temp: number[], leftStart: number, rightEnd: number): void => {
	let insertIdx = leftStart;
	let left = leftStart;
	let leftEnd = leftStart + Math.floor((rightEnd - leftStart) / 2);
	let right = leftEnd + 1;

	while (left <= leftEnd && right <= rightEnd) {
		if (arr[left] > arr[right]) {
			temp[insertIdx] = arr[right];
			right++;
		} else {
			temp[insertIdx] = arr[left];
			left++;
		}
		insertIdx++;
	}

	while (left <= leftEnd) temp[insertIdx++] = arr[left++];
	while (right <= rightEnd) temp[insertIdx++] = arr[right++];

	for (let i = leftStart; i <= rightEnd; i++) arr[i] = temp[i];
};

const mergeRecurse = (arr: number[], temp: number[], leftStart: number, rightEnd: number): void => {
	if (leftStart >= rightEnd) return;
	
	let mid = leftStart + Math.floor((rightEnd - leftStart) / 2);
	mergeRecurse(arr, temp, leftStart, mid);
	mergeRecurse(arr, temp, mid + 1, rightEnd);
	mergeHalves(arr, temp, leftStart, rightEnd);
};

const mergeSort = (arr: number[]): number[] => {
	const temp = new Array(arr.length);
	mergeRecurse(arr, temp, 0, arr.length - 1);

	return arr;
};

console.log(mergeSort([1, 2, 3, 5, 1, 2, 5, 8, 10, 22, 23, 22, 12, 1]));