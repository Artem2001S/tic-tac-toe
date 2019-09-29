class TicTacToe {
	constructor() {
		this.desk = [];
		this.currentSymbol = 'x';
		this.isDrawValue = false;
		this.isFinishedValue = false;
		this.winner = null;
		this.desk[0] = new Array(3);
		this.desk[1] = new Array(3);
		this.desk[2] = new Array(3);
		this.countOfTurn = 0;
	}

	getCurrentPlayerSymbol() {
		return this.currentSymbol;
	}

	nextTurn(rowIndex, columnIndex) {
		//поскольку первый ход у 'x'
		if (this.countOfTurn === 0) {
			this.desk[rowIndex][columnIndex] = 'x';
			this.currentSymbol = 'o'
			this.countOfTurn++;
			return;
		}

		if (this.desk[rowIndex][columnIndex] === undefined) {
			this.desk[rowIndex][columnIndex] = this.currentSymbol;

			//change sybmol
			if (this.currentSymbol === 'x') this.currentSymbol = 'o'
			else this.currentSymbol = 'x';

			//update count of turns
			this.countOfTurn++;

			//check diagonals and set winner
			if (this.checkDiagonal('x') || this.checkDiagonal('o')) {
				this.isFinishedValue = true;
				this.winner = this.checkDiagonal('x') ? 'x' : 'o';
			}
			
			//check columns and set winner
			for (let i = 0; i < 3; i++) {
				if (this.checkColumn(i, 'x') || this.checkColumn(i, 'o')) {
					this.isFinishedValue = true;
					this.winner = this.checkColumn(i, 'x') ? 'x' : 'o';
				}
			}

			//check rows and set winner
			for (let i = 0; i < 3; i++) {
				if (this.checkRow(i, 'x') || this.checkRow(i, 'o')) {
					this.isFinishedValue = true;
					this.winner = this.checkRow(i, 'x') ? 'x' : 'o';
				}
			}
		}
		return;
	}

	checkRow(row, val) {
		if (this.desk[row][0] === val && this.desk[row][1] === val && this.desk[row][2] === val) return true;
		return false;
	}

	checkColumn(col, val) {
		if (this.desk[0][col] === val && this.desk[1][col] === val && this.desk[2][col] === val) return true;
		return false;
	}

	checkDiagonal(val) {
		if (this.desk[0][0] === val && this.desk[1][1] === val && this.desk[2][2] === val) return true;
		if (this.desk[2][0] === val && this.desk[1][1] === val && this.desk[0][2] === val) return true;
		return false;
	}

	isFinished() {
		if (this.countOfTurn === 9) return true
		return this.isFinishedValue;
	}

	getWinner() {
		return this.winner;
	}

	noMoreTurns() {
		if (this.countOfTurn > 8) return true;
		return false;
	}

	isDraw() {
		if (this.isFinishedValue) return false;
		if (this.countOfTurn === 9) return true;
		return false;
	}

	getFieldValue(rowIndex, colIndex) {
		return this.desk[rowIndex][colIndex] === undefined ? null : this.desk[rowIndex][colIndex];
	}
}

module.exports = TicTacToe;
