/*
const sortedMerge = (a: number[], b: number[]): number[] => {
	const singleArray = a.concat(b);
	return singleArray.sort((a, b) => a - b);
}
*/

const sortedMerge = (a: number[], b: number[]): number[] => {
	let indexA = a.length - 1;
	let indexB = b.length - 1;
	
	while (indexB >= 0) {
		if ((indexA >= 0) && (a[indexA] >= b[indexB])) {
			indexA--;
		} else {
			a.splice(indexA + 1, 0, b[indexB]);
			indexB--;
		}
	}

	return a;
}

console.log(sortedMerge([1, 3, 5, 7], [2, 5, 6]));