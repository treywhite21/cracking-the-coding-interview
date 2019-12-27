import Stack from './Stack';

export default class SetOfStacks {
	constructor (threshold) {
		this.stacks = [];
		this.threshold = threshold;
	}

	push(element) {
		if (this.isEmpty()) {
			this.stacks.push(new Stack());
			this.stacks[0].push(element);
		} else if (this.peek().size >= this.threshold) {
			this.stacks.push(new Stack());
			this.peek().push(element);
		} else {
			this.peek().push(element);
		}
	}

	pop() {
		if (this.stacks.length === 0) {
			return "Underflow";
		} else if (this.peek().size <= 1) {
			const poppedElement = this.peek().pop();
			this.stacks.pop();
			return poppedElement;
		} else {
			return this.peek().pop();
		}
	}

	popAt (stackIndex) {
		if (this.stacks.length === 0 || this.stacks[stackIndex].length === 0) {
			return "Underflow";
		} else if (this.stacks[stackIndex].length <= 1) {
			const poppedElement = this.stacks[stackIndex].pop();
			this.stacks.splice(stackIndex, 1);
			return poppedElement;
		} else {
			return this.stacks[stackIndex].pop();
		}
	}

	peek() {
		return this.stacks[this.stacks.length - 1];
	}

	isEmpty() {
		return this.stacks.length === 0;
	}
}