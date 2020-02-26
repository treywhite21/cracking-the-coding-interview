// Objective: find largest square within grid that falls within specified budget

const budget1 = 10;
const grid1 = [
	[3, 4, 1, 1, 3, 6, 4, 3, 6, 8, 4, 7, 1],
	[5, 7, 4, 3, 7, 9, 5, 0, 3, 4, 1, 1, 3],
	[3, 4, 1, 1, 3, 6, 4, 3, 6, 8, 4, 7, 1],
	[5, 7, 4, 3, 7, 1, 1, 1, 3, 4, 1, 1, 3],
	[3, 4, 1, 1, 3, 1, 1, 1, 6, 8, 4, 7, 1],
	[5, 7, 4, 3, 7, 1, 1, 0, 3, 4, 1, 1, 3]
];

// initialize placeholders
// start with i = 0, j = 0, rowOffset = 0
// while inbounds
// for each row, complete sliding window traversal
// update maxArea if necessary
// at end of row, repeat
// return maxArea

const getPriceSum = (grid: number[][], row: number, col: number, offset: number): number => {
	let priceSum = 0;

	for (let i = row; i <= row + offset; i++) {
		for (let j = col; j <= col + offset; j++) {
			priceSum += grid[i][j];
		}
	}

	return priceSum;
};

const largestAreaWithinBudget = (grid: number[][], budget: number): number => {
	// Handle improper input
	if (!grid || !grid.length) return 0;

	// Initialize variables
	let maxRow = grid.length, maxCol = grid[0].length;
	let row = 0, col = 0, offset = 0;
	let maxArea = 0;
	let curPriceSum = 0;

	// While inbounds and checked final row, traverse each column
	while (row + offset < maxRow) {
		// Traverse all cells in row, snaking
		if (row % 2 === 0) {
			// If even row, traverse left to right
			while (col + offset < maxCol && row + offset < maxRow) {
				// Get current price within area
				curPriceSum = getPriceSum(grid, row, col, offset);

				// If it's within budget
				if (curPriceSum <= budget) {
					// Update maxArea
					maxArea = (offset + 1) ** 2;

					// Increment offset
					offset++;

					// Don't increment column,
					// so that we will recheck with same row, col but new offset
				} else {
					// If outside of budget, move on to next square
					col++;
				}
			}

			col--;
		} else {
			// If odd row, traverse right to left
			while (col - offset >= 0 && row + offset < maxRow) {
				// Get current price within area
				// Must use col - offset to get appropriate starting cell for getPriceSum
				curPriceSum = getPriceSum(grid, row, col - offset, offset);

				// If it's within budget
				if (curPriceSum <= budget) {
					// Update maxArea
					maxArea = (offset + 1) ** 2;

					// Increment offset
					offset++;

					// Don't increment column,
					// so that we will recheck with same row, col but new offset
				} else {
					// If outside of budget, move on to next square
					col--;
				}
			}

			col++;
		}

		row++;
	}

	return maxArea;
};

console.log(largestAreaWithinBudget(grid1, budget1));