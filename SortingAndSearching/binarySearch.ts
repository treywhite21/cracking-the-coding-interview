const binarySearch = (arr: number[], x: number): number => {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (arr[mid] < x) {
			low = mid + 1;
		} else if (arr[mid] > x) {
			high = mid - 1;
		} else {
			return mid;
		}
	}

	return -1;
}

const binarySearchRecursive = (arr: number[], x: number, low: number, high: number): number => {
	if (low > high) return -1;

	let mid = Math.floor((high + low) / 2);
	if (arr[mid] > x) {
		return binarySearchRecursive(arr, x, low, mid - 1);
	} else if (arr[mid] < x) {
		return binarySearchRecursive(arr, x, mid + 1, high);
	} else {
		return mid;
	}
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 2, 0, 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 8));