const reverseString = (str: string): string => {
	const revWord = [];
	const currWord = str.split('');
	currWord.push(null);

	currWord.forEach(char => revWord.unshift(char));
	return revWord.join('');
}

console.log(reverseString('trey'));
console.log(reverseString('peanuts'));
console.log(reverseString('Elephant-hi circus'));