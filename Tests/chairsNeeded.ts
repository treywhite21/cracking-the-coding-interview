const chairsNeeded = (start: number[], end: number[]) => {
	const sortedStart = start.sort((a, b) => a - b);
	const sortedEnd = end.sort((a, b) => a - b);

	let i = 0, j = 0;
	let chairs = 1;
	let count = 0;

	while (i < sortedStart.length) {
		if (sortedStart[i] < sortedEnd[j]) {
			chairs = Math.max(chairs, ++count);
			i++;
		} else {
			count--;
			j++;
		}
	}

	return chairs;
}

console.log(chairsNeeded([1, 2, 6, 5, 3], [5, 5, 7, 6, 8]));