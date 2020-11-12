// what happens when you start a new game of tic tac toe
export default class Game {
    constructor() {
        this.turn = "C";
        this.board = new Array(9).fill(null);
    }

// toogles turn of game
    nextTurn() {
        this.turn = this.turn === "C" ? "i" : "C";
    }

    makeMove(i) {
        if (!this.isInProgress()) {
            return;
        }

        if (this.board[i]) {
            return;
        }

        this.board[i] = this.turn;

        if (!this.findWinningCombination()) {
            this.nextTurn();
        }
    }

//defining content for winning combinations
    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }

        return null;
    }

// returning true or false if game is in progress
    isInProgress() {
        return !this.findWinningCombination() && this.board.includes(null);
    }
}