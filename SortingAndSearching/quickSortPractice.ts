const performPartition = (arr: number[], left: number, right: number, pivot: number): number => {
	while (left <= right) {
		while (arr[left] < arr[pivot]) left++;
		while (arr[right] > arr[pivot]) right--;

		if (left <= right) {
			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;

			left++;
			right--;
		}
	}

	return left;
};

const performSort = (arr: number[], left: number, right: number) => {
	if (left >= right) return;

	const pivot = left + Math.floor((right - left) / 2);
	const idx = performPartition(arr, left, right, pivot);

	performSort(arr, left, idx - 1);
	performSort(arr, idx, right);
};

const quickSortPractice = (arr: number[]) => {
	performSort(arr, 0, arr.length - 1);

	return arr;
};

console.log(quickSortPractice([1,6,3,9,1,0,11,12,10,2,2]));