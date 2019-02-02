const board = document.getElementById('board');
const victory = document.getElementById('victory');
const resetButton = document.getElementById('reset');

const boardSize = 4;
let boardArray = [];

function clickReset() {
    for(let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++)
        {
            boardArray[i][j].classList.replace('dark', 'lit');
        } 
    }
}

function toggleSquare(square) {
    if(square.classList.contains('lit')) {
        square.classList.replace('lit', 'dark');
    }
    else {
        square.classList.replace('dark', 'lit');
    }
}

function checkVictory() {
    for(let i = 0; i < boardSize; i++) {
        for(let j = 0; j < boardSize; j++) {
            if(boardArray[i][j].classList.contains('lit')) {
                return false;
            }
        }
    }
    return true;
}

function clickSquare(x, y) {
    toggleSquare(boardArray[x][y]);
    console.log(x,y)
    if(x > 0) {
        toggleSquare(boardArray[x - 1][y]);
    }
    if(x < boardSize - 1) {
        toggleSquare(boardArray[x + 1][y]);
    }

    if(y > 0) {
        toggleSquare(boardArray[x][y - 1]);
    }
    if(y < boardSize - 1) {
        toggleSquare(boardArray[x][y + 1]);
    }

    if(checkVictory()) {
        victory.textContent = 'You won!';
    }
    else {
        victory.textContent = '';
    }
}

function createSquares() {
    for(let i = 0; i < boardSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        board.appendChild(row); 

        let rowArray = [];
        boardArray.push(rowArray);
        for(let j = 0; j < boardSize; j++) {
            const square = document.createElement('span');
            square.classList.add('square', 'lit');
            row.appendChild(square);
            square.addEventListener('click', 
                function() { clickSquare(i, j); });
            rowArray.push(square);
        }
    }
}

createSquares();
resetButton.addEventListener('click', clickReset);