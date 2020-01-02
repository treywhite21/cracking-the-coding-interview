const quickSort = (arr: any[], left: number, right: number) => {
	const index = partition(arr, left, right);
	console.log(index);
	if (left < index - 1) {
		// Sort left half
		quickSort(arr, left, index - 1);
	}
	if (index < right) {
		// Sort right half
		quickSort(arr, index, right);
	}
}

const partition = (arr: any[], left: number, right: number): number => {
	const pivot = arr[Math.floor(left + (right - left) / 2)]; // Pick pivot point
	console.log(pivot);
	while (left <= right) {
		// Find element on left that should be on right
		while (arr[left] <= pivot) left++;

		while (arr[right] > pivot) right--;

		// Swap elements, and move left and right indices
		if (left <= right) {
			swap(arr, left, right);
			left++;
			right++;
		}
	}
	return left;
}

const swap = (arr: any[], left: number, right: number) => {
	const b = arr[right];
	arr[right] = arr[left];
	arr[left] = b;
}

const arr = [4,2,1,4,5,7];
quickSort(arr, 0, 5);
console.log(arr);