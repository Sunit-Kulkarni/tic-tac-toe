//setting global state variables
/*jslint devel: true */

"use strict";

//DEFINE YOUR STATE
var row1 = ["", "", ""];
var row2 = ["", "", ""];
var row3 = ["", "", ""];


var board = [
    row1,
    row2,
    row3
];

var isplayerXTurn = true; // true is X, false is O


//setting functions/Actions that operate on the global state variables

function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log("*********************"); // separates out boards in the console log
}

//initiating getters and setters
function getValueAtPosition(rowIndex, columnIndex) {
    //row is a number between 0 and 2
    //column is a number between 0 and 2
    
    return board[rowIndex][columnIndex];
}

function setValueAtPosition(rowIndex, columnIndex) {
    if (isplayerXTurn) {
        board[rowIndex][columnIndex] = 'X';
    } else {
        board[rowIndex][columnIndex] = 'O';
    }
    
    printBoard(); //print board after change
    isplayerXTurn = !isplayerXTurn; //resets who's turn it is
}

function userInput() { //takes user input of row and column and puts a value at that position
    var row = parseInt(prompt("Give me a row")) - 1; //humans don't think in terms of zero indexing. Decrement by one for adjustment
    var column = parseInt(prompt("Give me a column")) - 1;
    
    if (getValueAtPosition(row, column) === "") {
        setValueAtPosition(row, column);
    } else {
        alert("That position is taken, please choose a blank space");
    }
    
}

//userInput();
//userInput();

function hasSomeoneWon() {
    var someOneWon = false;
    var winConditions = [
        //horizontally
        getValueAtPosition(0, 0) + getValueAtPosition(0, 1) + getValueAtPosition(0, 2),
        getValueAtPosition(1, 0) + getValueAtPosition(1, 1) + getValueAtPosition(1, 2),
        getValueAtPosition(2, 0) + getValueAtPosition(2, 1) + getValueAtPosition(2, 2),
        
        //vertically
        getValueAtPosition(0, 0) + getValueAtPosition(1, 0) + getValueAtPosition(2, 0),
        getValueAtPosition(0, 1) + getValueAtPosition(1, 1) + getValueAtPosition(2, 1),
        getValueAtPosition(0, 2) + getValueAtPosition(1, 2) + getValueAtPosition(2, 2),
        
        //diagonally
        getValueAtPosition(0, 0) + getValueAtPosition(1, 1) + getValueAtPosition(2, 2),
        getValueAtPosition(0, 2) + getValueAtPosition(1, 1) + getValueAtPosition(2, 0)
    ];
    
    for (var i = 0, i < 8; i++) {
        if (winConditions[i] == "XXX" || winConditions[i] == "OOO") {
            return true;
        }
    }
}

//KICK THE WHOLE THING OFF
while (!hasSomeoneWon()) { // stop when someone wins
    userInput();
}

var victor = "";

if (isplayerXTurn) {
    victor = "O";
} else {
    victor = "X"
}

alert("Victory! Player " + victor + "has won!")
