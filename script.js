let gridNumber = 64;

const grid = document.querySelector('.grid');

for (let i = 0; i < (gridNumber * gridNumber); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    grid.appendChild(gridSquare);
};

grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

const gridElement = document.querySelectorAll('.grid-square');

gridElement.forEach(element => element.addEventListener('mouseenter', e => {
    element.style.backgroundColor = 'black';
}));
