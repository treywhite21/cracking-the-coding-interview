// Take in integer and return string representing integer
// Ex. 2 -> "two"
// Ex. 22 -> "twenty-two"
// Ex. 2222222 -> "two million two hundred twenty-two thousand two hundred and twenty-two"

const ones = ['zero', 'one', 'two', 'three', 'four', 'five'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];
const separators = ['', ' thousand', ' million', ' billion'];

const numToWords = (num: string): string => {
	const positionMap = [ones, tens, ones];
	const returnArr = [];

	for (let i = 0; i < num.length; i++) {
		let hundredSuffix = i === 2 ? ' hundred' : '';
		returnArr.unshift(positionMap[i][num.charAt(num.length - 1 - i)] + hundredSuffix);
	}

	return returnArr.join(' ');
};

const englishInt = (n: number): string => {
	const strNum = n.toString();
	const fullNumArr = [];

	for (let i = 0; i < strNum.length; i += 3) {
		fullNumArr.unshift(separators[i/3]);
		let start = strNum.length - i - 3 >= 0 ? strNum.length - i - 3 : 0;
		fullNumArr.unshift(numToWords(strNum.substring(start, start + 3)));

	}
	return fullNumArr.join(' ');
}

console.log(englishInt(2));
console.log(englishInt(22));
console.log(englishInt(222));
console.log(englishInt(2222));