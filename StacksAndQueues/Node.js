export default class Node {
	constructor (value) {
		this.data = value;
	}
};

export class NodeWithMin {
	constructor (value, min) {
		this.data = value;
		this.min = min;
	}
};