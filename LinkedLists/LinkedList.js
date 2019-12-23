import Node from './LinkedListNode';

export default class LinkedList {
	constructor () {
		this.head = null;
		this.size = 0;
	}

	add (element) {
		const node = new Node(element);

		if (this.head === null) {
			this.head = node;
		} else {
			let current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.size += 1;
	}

	insertAt (element, index) {
		if (index > 0 && index > this.size) 
			return false; 
		else {
			const node = new Node(element);
			let prev;
			let current = this.head;

			if (index === 0) {
				node.next = current;
				this.head = node;
			} else {
				for (let i = 0; i < index; i += 1) {
					prev = current;
					current = current.next;
				}
	
				node.next = current;
				prev.next = node;
			}

			this.size += 1;
		}
	}
};