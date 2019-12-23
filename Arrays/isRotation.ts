const isSubstring = (test1: string, test2: string): Boolean => {
	return test1.includes(test2);
};

const isRotation = (str1: string, str2: string): Boolean => {
	if (str1.length !== str2.length) {
		return false;
	}

	const doubleStr1 = str1 + str1;
	return isSubstring(doubleStr1, str2);
};

/*
const sortString = (str: string): string => {
	const arrStr = str.toLowerCase().split('');
	const sortedArr = arrStr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
	return sortedArr.join('');
};

const isRotation = (str1: string, str2: string): Boolean => {
	if (str1.length !== str2.length) {
		return false;
	}

	const sortedStr1 = sortString(str1);
	const sortedStr2 = sortString(str2);

	return isSubstring(sortedStr1, sortedStr2);
};
*/

console.log(isRotation('trey', 'reyt'));
console.log(isRotation('waterbottle', 'erbottlewat'));
console.log(isRotation('waterbottle', 'bwatotterle'));
// Last one is not a rotation