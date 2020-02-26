const shuffle = arr => {
	for (let i = arr.length - 1; i >= 0; i--) {
		// Get random index from 0 to i (inclusive)
		let randIdx = Math.floor(Math.random() * (i + 1));

		// Swap values at i and random index
		let temp = arr[i];
		arr[i] = arr[randIdx];
		arr[randIdx] = temp;
	}

	console.log(arr);
}

const smallArray = [0, -1, -3, 2, 0, 5, 1, 9];

console.log(shuffle(smallArray));
console.log(shuffle(smallArray));
console.log(shuffle(smallArray));