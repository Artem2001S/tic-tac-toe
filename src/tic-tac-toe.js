class TicTacToe {
    constructor() {
        this.desk = [];
        this.currentSymbol = "x";
        this.desk[0] = new Array(3);
        this.desk[1] = new Array(3);
        this.desk[2] = new Array(3);
        this.countOfTurn = 0;
    }


    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.countOfTurn === 0) {
            this.desk[rowIndex][columnIndex] = "x";
            if (this.currentSymbol === "x") this.currentSymbol = "o"
            else this.currentSymbol = "x";
            this.countOfTurn++;
            return;
        }

        if (this.desk[rowIndex][columnIndex] === undefined) {
            this.desk[rowIndex][columnIndex] = this.currentSymbol;
            if (this.currentSymbol === "x") this.currentSymbol = "o"
            else this.currentSymbol = "x";
            this.countOfTurn++;
        } else {
            return;
        }

    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {
        let nulls = 0;
        for (let i = 0; i <this.desk.length;i++)
            for (let j = 0; j < this.desk[i].length; j++){
                if (this.desk[i][j] == undefined) nulls++; 
            }
        if (nulls <= this.length - 3) return true
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.desk[rowIndex][colIndex] === undefined ? null : this.desk[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
