import { NodeWithMin } from './Node';

export default class Stack {
	constructor () {
		this.items = [];
	}

	push (element) {
		this.items.push(element);
	}

	pop () {
		if (this.items.length === 0) {
			return "Underflow";
		}

		return this.items.pop();
	}

	peek () {
		return this.items[this.items.length - 1];
	}

	isEmpty () {
		return this.items.length === 0;
	}

	printStack () {
		let str = '';
		for (let i = 0; i < this.items.length; i += 1) {
			str + this.items[i] + ' ';
		}
		return str;
	}

	size () {
		return this.items.length;
	}

	sortStack () {
		
	}
}

export class StackWithMin extends Stack {
	constructor () {
		this.minStack = new Stack();
	}

	push (element) {
		if (element.value <= this.min()) {
			this.minStack.push(element.value);
		}

		super.push(element);
	}

	pop () {
		let poppedElement = super.pop();
		if (poppedElement.value === this.min()) {
			this.minStack.pop();
		}

		return poppedElement;
	}

	min () {
		if (this.minStack.isEmpty()) {
			return null;
		}

		return this.minStack.peek();
	}

	min () {
		if (this.isEmpty()) {
			return null;
		}

		return this.peek().min();
	}
}