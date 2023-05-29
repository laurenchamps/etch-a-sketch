let numberOfRows = 16;
let numberOfColumns = 16;


for (let i = 0; i < (numberOfRows * numberOfColumns); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    
    const grid = document.querySelector('.grid');
    grid.appendChild(gridSquare);
};