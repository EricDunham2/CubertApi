export class Game {
	board: Array<Array<number>>
	size: number

	constructor(size?: number) {
		let boardSize:any = (size !== null || size !== undefined) ? size : 32;
		this.size = boardSize;
		this.board = this.init(boardSize);
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


	/*
		top => 32x32
			switch(y) :
			 	case 32: 

				case 0: 
				



		left => 32x32


	*/

	/*wrappedStep() {
		this.board = this.board.map((row, cellY) => {
			return row.map((cell, cellX) => {

				let numberOfLiveNeighbours = 0;

				for (let y = cellY - 1; y <= cellY + 1; y++) {
					for (let x = cellX - 1; x <= cellX + 1; x++) {
						if (y === cellY && x === cellX) continue;

						switch(y)  {
							case 32: 
			
								break;
							case 0:

								break;
						}



						numberOfLiveNeighbours += (this.board?.[y]?.[x] || 0);
					}
				}

				if (cell && [2, 3].includes(numberOfLiveNeighbours)) return 1;
				if (!cell && numberOfLiveNeighbours === 3) return 1;
				return 0
			});
		});

		return this.board;
	}*/

	init(size: number) {
		let board: any = [...Array(size + 2).keys()];
		//board = board.map(i => { return i - 1 });
		board.map((idx: number) => {
			board[idx] = [...Array(size + 2).keys()].map(i => { return Math.random() > .2 ? 0 : 1 });
		});

		return board;
	}
}