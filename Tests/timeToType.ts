const timeToType = (keyboard: string, text: string): Number => {
	let currentIdx = 0;
	return text.split('').reduce((sum, cur) => {
		const newIdx = keyboard.indexOf(cur);
		sum += Math.abs(newIdx - currentIdx);
		currentIdx = newIdx;
		return sum;
	}, 0);
};

console.log(timeToType('abcdefghijklmnopqrstuvwxy', 'cba'));