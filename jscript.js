var row1 = ["", "", ""];
var row2 = ["", "", ""];
var row3 = ["", "", ""];


var board = [
    row1,
    row2,
    row3
];

var isplayerXTurn = true; // true is X, false is O

function getValueAtPosition(rowIndex, columnIndex) {
    //row is a number between 0 and 2
    //column is a number between 0 and 2
    
    return board[rowIndex][columnIndex];
}

function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
}

printBoard();

function setValueAtPosition(rowIndex, columnIndex) {
    if (isplayerXTurn) {
        board[rowIndex][columnIndex] = 'X';
    } else {
        board[rowIndex][columnIndex] = 'O';
    }
}