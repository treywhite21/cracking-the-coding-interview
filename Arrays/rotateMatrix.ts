const rotateMatrix = (matrix: Number[][]): Number[][] => {
	for (let layer = 0; layer < matrix.length / 2; layer += 1) {
		let first = layer;
		let last = matrix.length - 1 - layer;

		for (let i = first; i < last; i += 1) {
			let offset = i - first;
			let top = matrix[first][i];

			// left -> top
			matrix[first][i] = matrix[last - offset][first];

			// bottom -> left
			matrix[last - offset][first] = matrix[last][last - offset];

			// right -> bottom
			matrix[last][last - offset] = matrix[i][last];

			// top -> right
			matrix[i][last] = top; // right <- saved top
		}
	}

	return matrix;
}

console.log(rotateMatrix([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6], [0, 5, 0, 4]]));
console.log(rotateMatrix([[1, 2, 3], [7, 2, 4], [6, 1, 1]]));
console.log(rotateMatrix([[0, 1, 0], [2, 1, 1], [3, 0, 3]]));