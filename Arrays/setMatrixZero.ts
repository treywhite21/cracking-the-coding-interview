const setMatrixZero = (matrix: Number[][]): Number[][] => {
	const zeroedMatrix = [];
	
	// Create matrix copy
	for (let k = 0; k < matrix.length; k += 1) {
		zeroedMatrix[k] = matrix[k].slice();
	}

	const zeroOutRow = rowIdx => {
		for (let i = 0; i < matrix[0].length; i += 1) {
			zeroedMatrix[rowIdx][i] = 0;
		}
	};

	const zeroOutCol = colIdx => {
		for (let j = 0; j < matrix.length; j += 1) {
			zeroedMatrix[j][colIdx] = 0;
		}
	};

	for (let row = 0; row < matrix.length; row += 1) {
		for (let col = 0; col < matrix[0].length; col += 1) {
			if (matrix[row][col] === 0) {
				zeroOutRow(row);
				zeroOutCol(col);
			}
		}
	}

	return zeroedMatrix;
};

console.log(setMatrixZero([[0, 1, 2], [3, 4, 5], [6, 1, 7]]));
console.log(setMatrixZero([[3, 1, 2], [3, 0, 5], [6, 2, 7]]));
console.log(setMatrixZero([[0, 1, 2], [3, 0, 5], [6, 5, 7]]));
console.log(setMatrixZero([[0, 1, 2, 3], [3, 6, 5, 3], [6, 5, 7, 3]]));
console.log(setMatrixZero([[0, 1, 2, 3], [3, 6, 5, 3], [6, 5, 7, 3], [5, 4, 0, 2]])); 
// Error zeroing out column