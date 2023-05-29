let gridNumber = 16;


for (let i = 0; i < (gridNumber * gridNumber); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    
    const grid = document.querySelector('.grid');
    grid.appendChild(gridSquare);
};

const grid = document.querySelector('.grid')

grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;