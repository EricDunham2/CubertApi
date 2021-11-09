/*function makeBoard(size) {
    var board = [...Array(size + 2).keys()];
    //board = board.map(i => { return i - 1 });
    board.map(r => {
        board[r] = [...Array(size + 2).keys()] //.map(i => { return i - 1 });
    });
}


    Ba              Ba
R   B   L       L   T   R
    F               F

    T               T
B   R   F       B   L   F
    B               B

    T               T
R   Ba   L      R   F   L
    B               B

If hits the side or top
turn on element on other panel

var top
var bottom
var left
var right
var front
var back

board.map((row, cellY) => {
    return row.map((cell, cellX) => {
        var numberOfLiveNeighbours = 0

        for (var y = cellY - 1; y <= cellY + 1; y++) {
            for (var x = cellX - 1; x <= cellX + 1; x++) {
                if (y === cellY && x === cellX) continue
                numberOfLiveNeighbours += (this.board ? .[y] ? .[x] || 0)
            }
        }

        if (cell && [2, 3].includes(numberOfLiveNeighbours)) return 1
        if (!cell && numberOfLiveNeighbours === 3) return 1
        return 0
    })
})*/