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

	printList () { 
		var curr = this.head; 
		var str = ""; 

		while (curr) { 
			str += curr.data + " "; 
			curr = curr.next; 
		}

		return str;
	} 

	elementAt (index) {
		if (this.size === 0 || index > this.size - 1) {
			return null;
		}

		var curr = this.head;

		for (let i = 0; i < index; i += 1) {
			curr = curr.next;
		}

		return curr;
	}
};

export const getUnsortedLinkedList = data => {
	const linkedList = new LinkedList();
	data.forEach(num => linkedList.add(num));

	return linkedList;
};

export const getLoopingLinkedList = data => {
	const linkedList = new LinkedList();
	data.forEach(num => linkedList.add(num));
	
	const existingElement = linkedList.elementAt(2);
	const loopStart = linkedList.elementAt(4);

	loopStart.next = existingElement;

	return linkedList;
};