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

	let mid1 = Math.floor((high + low) / 2);
	let mid2 = low + Math.floor((high - low) / 2);

	console.log(mid1);
	console.log(mid2);

	if (arr[mid2] > x) {
		return binarySearchRecursive(arr, x, low, mid2 - 1);
	} else if (arr[mid2] < x) {
		return binarySearchRecursive(arr, x, mid2 + 1, high);
	} else {
		return mid2;
	}
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 2, 0, 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 8));