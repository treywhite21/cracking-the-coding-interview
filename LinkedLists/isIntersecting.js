import { getUnsortedLinkedList } from './LinkedList';

const isIntersecting = (node1, node2) => {
	let current1 = node1;

	while (current1) {
		let current2 = node2;

		while (current2) {
			if (current1 === current2) {
				return true;
			}

			current2 = current2.next;
		}

		current1 = current1.next;
	}

	return false;
};

const runIsIntersecting = data => {
	const linkedList = getUnsortedLinkedList(data);

	return isIntersecting(linkedList.head, linkedList.head);
};

console.log(runIsIntersecting([1, 2, 3]));