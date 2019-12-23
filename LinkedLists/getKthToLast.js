import { getUnsortedLinkedList } from './LinkedList';

const getKthToLast = (data, k) => {
	const linkedList = getUnsortedLinkedList(data);
	let current = linkedList.head;
	// let size = linkedList.size;
	let size = 1;

	if (!current) {
		return null;
	}

	// Get size
	while (current && current.next) {
		size += 1;
		current = current.next;
	}

	// Reset current
	current = linkedList.head;

	if (k > size || k < 0) {
		return null;
	}

	for (let i = 0; i < size - 1 - k; i += 1) {
		current = current.next;
	}

	return current.data;
};

console.log(getKthToLast([1, 2, 3, 4, 5], 2))
console.log(getKthToLast([1, 2, 5, 2, 7, 1, 8, 9], 2));
console.log(getKthToLast([0, 1, 0, 0, 0, 1, 2, 2], 1));
console.log(getKthToLast([1, 1, 1, 1, 0], 0));
console.log(getKthToLast([1, 1], 3));

