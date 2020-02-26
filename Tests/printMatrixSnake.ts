// Loop through array, but if row is odd start at end and decrement

const printMatrixSnake = (matrix: number[][]): string => {
	let maxRow = matrix.length, maxCol = matrix[0].length;
	let row = 0, col = 0;
	let res = '';

	// While not at final position, traverse
	while (row < maxRow) {
		if (row % 2 === 0) {
			// If even row, traverse left to right
			while (col < maxCol) {
				res += matrix[row][col].toString() + ' ';
				console.log(matrix[row][col])
				col++;
			}
			col--;
		} else {
			// If odd row, traverse right to left
			while (col >= 0) {
				res += matrix[row][col].toString() + ' ';
				col--;
			}
			col++;
		}
		row++;
	}

	return res;
}

const matrix1 = [
	[10, 20, 30, 40],
	[15, 25, 35, 45],
	[27, 39, 37, 48],
	[32, 33, 39, 50]
];

const matrix2 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(printMatrixSnake(matrix1));
console.log(printMatrixSnake(matrix2));