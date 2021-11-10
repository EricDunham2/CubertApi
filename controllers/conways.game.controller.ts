export class Game {
	board: Array<Array<number>>

	constructor(size?: number) {
		let boardSize:any = (size !== null || size !== undefined) ? size : 32;
		this.board = new(boardSize);
	}

	step() {
		this.board = this.board.map((row, cellY) => {
			return row.map((cell, cellX) => {

				let numberOfLiveNeighbours = 0;

				for (let y = cellY - 1; y <= cellY + 1; y++) {
					for (let x = cellX - 1; x <= cellX + 1; x++) {
						if (y === cellY && x === cellX) continue;
						numberOfLiveNeighbours += (this.board?.[y]?.[x] || 0);
					}
				}

				if (cell && [2, 3].includes(numberOfLiveNeighbours)) return 1;
				if (!cell && numberOfLiveNeighbours === 3) return 1;
				return 0
			});
		});

		return this.board;
	}

	init(size: number) {
		let board: any = [...Array(size + 2).keys()];
		//board = board.map(i => { return i - 1 });
		board.map((idx: number) => {
			board[idx] = [...Array(size + 2).keys()].map(i => { return Math.random() > .2 ? 0 : 1 });
		});

		return board;
	}
}

/*







const clear = require('clear')
const chalk = require('chalk');

import { Game } from './game'

function printBoard(board: Array<Array<number>>) {
  let boardString = ''
  for (let row of board) {
	for (let cell of row) {
	  boardString += (cell === 0) ? '   ' : chalk.bgWhite('   ')
	}
	boardString += '\n'
  }
  console.log(boardString)
}

clear()
const game = new Game([
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
])


setInterval(() => {
  clear()
  printBoard(game.board)
  game.step()
}, 250)*/