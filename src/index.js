const board = document.getElementById('board');
const boardSize = 4;

function clickSquare() {
    if (this.classList.contains('lit')) {
        this.classList.replace('lit', 'dark');
    }
    else {
        this.classList.replace('dark', 'lit');
    }
}

function createSquares() {
    for(let i = 0; i < boardSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        board.appendChild(row); 
        for(let j = 0; j < boardSize; j++) {
            const square = document.createElement('span');
            square.classList.add('square', 'lit');
            row.appendChild(square);
            square.addEventListener('click', clickSquare);
        }
    }
}

createSquares();