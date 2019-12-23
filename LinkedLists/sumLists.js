import LinkedList, { getUnsortedLinkedList } from './LinkedList';

const addToSum = (sum, node) => {
	if (node && node.data) {
		sum += node.data;
	}

	return sum;
};

const getNextNode = node => {
	if (node && node.next) {
		return node.next;
	}

	return null;
};

const sumLists = (node1, node2, returnList, carry = 0) => {
	let currSum = carry;

	currSum = addToSum(currSum, node1);
	currSum = addToSum(currSum, node2);

	const newDigit = currSum % 10;
	const carryOver = Math.floor(currSum / 10);
	
	returnList.add(newDigit);

	const nextNode1 = getNextNode(node1);
	const nextNode2 = getNextNode(node2);

	if (nextNode1 || nextNode2 || carryOver > 0) {
		console.log("hi");
		return sumLists(nextNode1, nextNode2, returnList, carryOver);
	} else {
		return returnList.printList();
	}
}

const runSumLists = (data1, data2) => {
	const linkedList1 = getUnsortedLinkedList(data1);
	const linkedList2 = getUnsortedLinkedList(data2);

	return sumLists(linkedList1.head, linkedList2.head, new LinkedList());
}

console.log(runSumLists([7, 1, 6], [5, 9, 2]));