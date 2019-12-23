const createCharCount = (word: string): Object => {
	const charCounts = {};

	word.split('').forEach(char => {
		if (charCounts.hasOwnProperty(char)) {
			charCounts[char] += 1;
		} else {
			charCounts[char] = 1;
		}
	});

	return charCounts;
};

const areAnagrams = (word1: string, word2: string): Boolean => {
	if (word1.length !== word2.length) {
		return false;
	}

	const charCount1 = createCharCount(word1);
	const charCount2 = createCharCount(word2);

	return Object.keys(charCount1).every(key =>
		charCount1[key] === charCount2[key]);
};

console.log(areAnagrams('trey', 'yert'));
console.log(areAnagrams('racecar', 'carrace'));
console.log(areAnagrams('tre', 'yert'));
console.log(areAnagrams('a', 'aa'));