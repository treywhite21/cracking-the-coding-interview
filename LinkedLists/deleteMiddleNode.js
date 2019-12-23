import { getUnsortedLinkedList } from './LinkedList';

const deleteMiddleNode = node => {
	node.data = node.next.data;
	node.next = node.next.next;
}

const runDelete = (data, index) => {
	if (index < data.length - 1) {
		const linkedList = getUnsortedLinkedList(data);
		deleteMiddleNode(linkedList.elementAt(index));

		return linkedList.printList();
	} else {
		return null;
	}
}

console.log(runDelete([1, 2, 3, 4, 5], 3));
console.log(runDelete([0], 3));
console.log(runDelete([0, 1], 0));
console.log(runDelete([1, 2, 3, 4, 5], 2));