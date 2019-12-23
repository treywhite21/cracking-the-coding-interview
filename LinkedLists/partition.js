import LinkedList, { getUnsortedLinkedList } from './LinkedList';

const partition = (data, x) => {
	const linkedList = getUnsortedLinkedList(data);
	let current = linkedList.head;

	const leftList = new LinkedList();
	const rightList = new LinkedList();

	while (current) {
		if (current.data < x) {
			leftList.add(current.data);
		} else {
			rightList.add(current.data);
		}

		current = current.next;
	}

	if (leftList.size === 0) {
		return rightList.printList();
	} else if (rightList.size === 0) {
		return leftList.printList();
	} else {
		const lastLeftNode = leftList.elementAt(leftList.size - 1);
		lastLeftNode.next = rightList.head;

		return leftList.printList();
	}
}

console.log(partition([1, 10, 2, 8, 9, 5, 6, 2, 3, 4, 10, 9, 1, 2], 5));
console.log(partition([1, 10, 2, 8, 9, 5, 6, 2, 3, 4, 10, 9, 1, 2], 2));
console.log(partition([1, 10, 2, 8, 9, 5, 6, 2, 3, 4, 10, 9, 1, 2], 9));
console.log(partition([1, 10, 2, 8, 9, 5, 6, 2, 3, 4, 10, 9, 1, 2], 7));