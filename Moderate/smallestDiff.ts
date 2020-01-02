const smallestDiffBrute = (arr1: number[], arr2: number[]): number => {
	if (!arr1 || !arr2 || !arr1.length || !arr2.length) return null;

	let smallestDiff = Math.abs(arr1[0] - arr2[0]);
	let count = 0;
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			console.log(++count);
			if (Math.abs(arr1[i] - arr2[j]) < smallestDiff) {
				smallestDiff = Math.abs(arr1[i] - arr2[j]);
			}
		}
	}

	return smallestDiff;
}

const smallestDiff = (arr1: number[], arr2: number[]): number => {
	if (!arr1 || !arr2 || !arr1.length || !arr2.length) return null;

	arr1 = arr1.sort((a, b) => a -b);
	arr2 = arr2.sort((a, b) => a -b);

	let smallestDiff = Math.abs(arr1[0] - arr2[0]);
	let indexA = 0;
	let indexB = 0;
	let count = 0;

	while (indexA < arr1.length && indexB < arr2.length && smallestDiff > 0) {
		console.log(++count);
		if (Math.abs(arr1[indexA] - arr2[indexB]) < smallestDiff) {
			smallestDiff = Math.abs(arr1[indexA] - arr2[indexB]);
		}

		if (arr1[indexA] > arr2[indexB]) {
			indexB++;
		} else {
			indexA++
		}
	}

	return smallestDiff;
}

console.log(smallestDiffBrute([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));
console.log(smallestDiff([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));
// console.log(smallestDiffBrute([1, 3, 15, 11, 2, 56, 43, 22], [23, 127, 235, 19, 56, 88, 12, 8]));
// console.log(smallestDiff([1, 3, 15, 11, 2, 56, 43, 22], [22, 127, 235, 19, 56, 88, 12, 8]));