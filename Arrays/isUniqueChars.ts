const isUniqueChars = (str: string): Boolean =>
	str.split('').every((char, idx) => str.indexOf(char, idx + 1) === -1);

	console.log(isUniqueChars('trey'));
	console.log(isUniqueChars('peanuts'));
	console.log(isUniqueChars('elephant'));