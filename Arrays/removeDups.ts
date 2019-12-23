const removeDups = (str: string): string => {
	const dupChars = [];

	return str.split('').map((char, idx) => {
		if (dupChars.includes(char)) {
			return null;
		} else if (str.indexOf(char, idx + 1) > -1) {
			dupChars.push(char);
			return null;
		} else {
			return char;
		}
	}).join('');
}

console.log(removeDups('treyy'));
console.log(removeDups('alphabet'));
console.log(removeDups('seven-eleven'));