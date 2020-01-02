const checkArray = (arr: number[]): Boolean => 
	arr.every((val, idx) => {
		console.log(val);
		if (val === 0) return false;
		if (idx > 0) {
			return val === arr[idx - 1];
		} else {
			return true;
		}
	});

const checkColumn = (board: number[][], colIdx: number): Boolean => {
	const arrToCheck = [];
	for (let row = 0; row < board.length; row++) {
		arrToCheck.push(board[row][colIdx]);
	}

	return checkArray(arrToCheck);
}

const checkDiagonal = (board: number[][], rowIncrement: number): Boolean => {
	const arrToCheck = [];
	let row = rowIncrement === 1 ? 0 : board.length - 1;

	for (let col = 0; col < board[0].length; col++) {
		arrToCheck.push(board[row][col]);
		row += rowIncrement;
	}

	return checkArray(arrToCheck)
}

/*
	Return enums:
	0, if no win
	1, if X win
	2, if O win
*/
const ticTacWin = (board: number[][]): number => {
	// Check each row
	for (let i = 0; i < board.length; i++) {
		if (checkArray(board[i])) {
			return board[i][0];
		}
	}

	// Check each column
	for (let j = 0; j < board[0].length; j++) {
		if (checkColumn(board, j)) {
			return board[0][j];
		}
	}

	// Check diagonals
	let diagonalWinner = 0;
	[1, -1].forEach(val => {
		if (checkDiagonal(board, val)) {
			const row = val === 1 ? 0 : board.length - 1;
			diagonalWinner = board[row][0];
		}
	});

	return diagonalWinner;
}

const board1 = [
	[0, 1, 1],
	[2, 1, 2],
	[0, 1, 2],
];

const board2 = [
	[1, 1, 1],
	[2, 1, 2],
	[0, 1, 2],
];

const board3 = [
	[2, 1, 2],
	[0, 2, 0],
	[2, 0, 2],
];

const board4 = [
	[1, 1, 2],
	[0, 2, 0],
	[2, 0, 1],
];

const board5 = [
	[2, 1, 2],
	[0, 1, 0],
	[2, 0, 2],
];

const board6 = [
	[2, 1, 2, 2],
	[0, 1, 2, 1],
	[1, 2, 1, 0],
	[2, 1, 0, 0],
];

console.log(ticTacWin(board1));
console.log(ticTacWin(board2));
console.log(ticTacWin(board3));
console.log(ticTacWin(board4));
console.log(ticTacWin(board5));
console.log(ticTacWin(board6));