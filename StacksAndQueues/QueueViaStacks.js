import Stack from './Stack';

export default class MyQueue {
	constructor () {
		this.newest = new Stack();
		this.oldest = new Stack();
	}

	size () {
		return this.newest.size() + this.oldest.size();
	}

	add (element) {
		this.newest.push(element);
	}

	shiftStacks () {
		if (this.oldest.isEmpty()) {
			while (!this.newest.isEmpty()) {
				this.oldest.push(this.newest.pop());
			}
		}
	}

	peek () {
		this.shiftStacks();
		return this.oldest.peek();
	}

	remove () {
		this.shiftStacks();
		return this.oldest.pop();
	}

	printQueue () {
		let str = '';
		for (let i = 0; i < this.oldest.length; i += 1) {
			str + this.oldest[i] + ' ';
		}
		for (let i = 0; i < this.newest.length; i += 1) {
			str + this.newest[i] + ' ';
		}
		return str;
	}
}