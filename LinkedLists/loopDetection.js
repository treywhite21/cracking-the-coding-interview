import { getLoopingLinkedList } from './LinkedList';

const loopDetection = head => {
	let current = head;
	const storedElements = [head];

	while (current.next) {
		if (storedElements.includes(current.next)) {
			return current.next.data;
		}
		
		storedElements.push(current.next);
		current = current.next;
	}

	return 'No loop';
};

const runLoopDetection = data => {
	const loopingLinkedList = getLoopingLinkedList(data);
	return loopDetection(loopingLinkedList.head);
};

console.log(runLoopDetection([1,2,3,4,5,6,7]));