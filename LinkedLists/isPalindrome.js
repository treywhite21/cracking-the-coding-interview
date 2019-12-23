import { getUnsortedLinkedList } from './LinkedList';

const getSize = head => {
	let curr = head;
	let count = 1;

	if (!head) {
		return 0;
	}

	while (curr.next) {
		count += 1;
		curr = curr.next;
	}

	return count;
};

const getNodeAt = (head, index) => {
	let curr = head;

	for (let i = 0; i < index; i += 1) {
		curr = curr.next;
	}

	return curr;
};

const isPalindrome = node => {
	const size = getSize(node);
	console.log(size);

	if (size > 0) {
		for (let i = 0; i < Math.floor(size / 2); i += 1) {
			const lowNode = getNodeAt(node, i);
			const hightNode = getNodeAt(node, size - 1 - i);

			if (lowNode.data !== hightNode.data) {
				console.log('hit');
				return false;
			}
		}

		return true;
	} else {
		return null;
	}
};

const runIsPalindrome = data => {
	const linkedList = getUnsortedLinkedList(data);

	return isPalindrome(linkedList.head);
};

console.log(runIsPalindrome([1, 0, 1]));
console.log(runIsPalindrome([1, 0, 0, 1]));
console.log(runIsPalindrome([1, 0, 2]));
console.log(runIsPalindrome([1, 1, 0, 0, 1]));