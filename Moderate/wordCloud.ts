const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const splitWords = (str: string): string[] => {
	const cleanedWords = [];
	let wordArr = [];
	for (let i = 0; i < str.length; i++) {
		if (alphabet.indexOf(str.charAt(i).toLowerCase()) >= 0) {
			wordArr.push(str.charAt(i).toLowerCase());
		}
		if (str.charAt(i) === ' ' && wordArr.length > 0) {
			cleanedWords.push(wordArr.join(''));
			wordArr = [];
		}
	}

	return cleanedWords;
}

const wordCloud = (str: string): Map<string, number> => {
	const cloud = new Map();
	const cleanedStr = splitWords(str);

	cleanedStr.forEach(word => {
		const lowerWord = word.toLowerCase();
		if (cloud[lowerWord]) {
			cloud[lowerWord] += 1;
		} else {
			cloud[lowerWord] = 1;
		}
	});

	return cloud;
}

console.log(wordCloud(
	'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'
));