const findFloor = (arr: number[], low: number, high: number, target: number) => {
	while (high - low > 1) {
		let mid = Math.floor(low + ((high - low) / 2));

		if (arr[mid] <= target) {
			low = mid;
		} else {
			high = mid;
		}
	}

	return low;
};
  
const floorBinary = (arr: number[], target: number) => {
	if (target < arr[0]) return -1;

	return findFloor(arr, 0, arr.length, target);
};

console.log(floorBinary([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(floorBinary([0, 21, 45, 67, 99], 83));
console.log(floorBinary([-50, -25, -1, 0, 23], 0));