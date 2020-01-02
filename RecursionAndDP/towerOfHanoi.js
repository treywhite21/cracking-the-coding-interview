import Stack from '../StacksAndQueues/Stack';

class Tower {
	constructor(n) {
		this.disks = new Stack();
		for (let i = n; i > 0; i -= 1) {
			this.disks.push(i);
		}
	}

	add(disk) {
		if (!this.disks.isEmpty() && this.disks.peek() <= disk) {
			console.log('Error placing disk');
		} else {
			this.disks.push(disk);
		}
	}

	moveTopTo(tower) {
		const top = this.disks.pop();
		tower.add(top);
	}

	moveDisks(quantity, destination, buffer) {
		if (quantity <= 0) return;

		this.moveDisks(quantity - 1, buffer, destination);
		this.moveTopTo(destination);
		buffer.moveDisks(quantity - 1, destination, this);
	}

	printStack () {
		return this.disks.printStack();
	}
}

const moveDisks = (n, origin, destination, buffer) => {
	if (n <= 0) return;

	moveDisks(n - 1, origin, buffer, destination);

	// moveTopTo(origin, destination);

	moveDisks(n - 1, buffer, destination, origin);
}

const performTowerOfHanoi = n => {
	const origin = new Tower(n);
	const buffer = new Tower(0);
	const destination = new Tower(0);
	moveDisks(n, origin, buffer, destination);

	console.log(origin.printStack());
	console.log(buffer.printStack());
	console.log(destination.printStack());
}

console.log(performTowerOfHanoi(3));