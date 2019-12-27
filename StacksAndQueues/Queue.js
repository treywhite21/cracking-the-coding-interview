export default class Queue {
	constructor () {
		this.items = [];
	}

	add (element) {
		this.items.push(element);
	}

	remove () {
		if (this.isEmpty()) {
			return "Underflow";
		}

		return this.items.shift();
	}

	peek () {
		if (this.isEmpty()) {
			return 'No elements in Queue';
		}

		return this.items[0];
	}

	isEmpty () {
		return this.items.length === 0;
	}

	printQueue () {
		let str = '';
		for (let i = 0; i < this.items.length; i += 1) {
			str + this.items[i] + ' ';
		}
		return str;
	}
}