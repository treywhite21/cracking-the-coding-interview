const checkForBouqs = (bouqetCount, roses, k) => {
	let trailer = null;
	let runner = 0;

	while (runner < roses.length) {
		console.log(runner);
		console.log(roses[runner]);
		if (roses[runner] === -1) {
			console.log(roses);
			if (typeof trailer === null) {
				trailer = runner;
				runner++;
			} else if (runner - trailer === k - 1) {
				console.log(runner - trailer);
				bouqetCount++;
				console.log(bouqetCount);
				roses = roses.splice(trailer, runner + 1);
				runner = trailer + 1;
				trailer = null;
			}
		} else {
			trailer = null;
			runner++;
		}
	}

	return bouqetCount;
};
/*
const daysTilBouquets = (roses: number[], k: number, n: number): number => {
	const firstDay = Math.min(...roses);
	const lastDay = Math.max(...roses);

	let bouqetCount = 0;
	for (let i = firstDay; i <= lastDay; i += 1) {
		// Mark bloomed roses
		roses = roses.map(rose => rose === i ? -1 : rose);
		console.log(roses);

		// Check for bouqets and remove from array
		bouqetCount = checkForBouqs(bouqetCount, roses, k);

		// If enough bouqets, return days
		if (bouqetCount === n) {
			return i;
		}
	};

	return null;
}
*/
const getBouqCount = (roses, day, k) => {
	let currBlooms = 0;
	let totalBouqs = 0;

	roses.forEach(rose => {
		if (rose <= day) {
			currBlooms++;
			if (currBlooms === k) {
				totalBouqs++;
				currBlooms = 0;
			}
		} else {
			currBlooms = 0;
		}
	});

	return totalBouqs;
}
const daysTilBouquets = (roses: number[], k: number, n: number): number => {
	const firstDay = Math.min(...roses);
	const lastDay = Math.max(...roses);

	for (let i = firstDay; i < lastDay; i += 1) {
		// let mid = Math.floor((firstDay + lastDay) / 2);
		const bouqs = getBouqCount(roses, i, k);
		if (bouqs >= n) {
			return i;
		}
	}

	return -1;
}

console.log(daysTilBouquets([1, 2, 4, 9, 3, 4, 1], 2, 2));