import { getUnsortedLinkedList } from './LinkedList';

const removeDups = data => {
	const linkedList = getUnsortedLinkedList(data);
	let current = linkedList.head;
	const existingNums = [current.data];

	while (current.next) {
		if (existingNums.includes(current.next.data)) {
			current.next = current.next.next;
		} else {
			existingNums.push(current.next.data);
			current = current.next;
		}
	}

	return linkedList.printList();
}

console.log(removeDups([1, 2, 5, 2, 7, 1, 8, 9]));
console.log(removeDups([0, 1, 0, 0, 0, 1, 2]));
console.log(removeDups([1, 1, 1, 1, 0]));
console.log(removeDups([1, 1]));

const removeDupsNoBuffer = data => {
	const linkedList = getUnsortedLinkedList(data);
	let current = linkedList.head;

	while (current) {
		let runner = current;
		while (runner && runner.next) {
			if (current.data === runner.next.data) {
				runner.next = runner.next.next;
			} else {
				runner = runner.next;
			}
		}

		current = current.next;
	}

	return linkedList.printList();
}

console.log(removeDupsNoBuffer([1, 2, 5, 2, 7, 1, 8, 9]));
console.log(removeDupsNoBuffer([0, 1, 0, 0, 0, 1, 2, 2]));
console.log(removeDupsNoBuffer([1, 1, 1, 1, 0]));
console.log(removeDupsNoBuffer([1, 1]));