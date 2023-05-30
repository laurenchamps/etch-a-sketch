let gridNumber = 99;
let trigger = false;

const grid = document.querySelector('.grid');

// Create grid
for (let i = 0; i < (gridNumber * gridNumber); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    grid.appendChild(gridSquare);
};

// Size grid based on input

grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

// Get all squares in the grid
const mouseTarget = document.querySelectorAll('.grid-square');

// For each square, when mousedown set trigger to true to enable drawing
mouseTarget.forEach(target => target.addEventListener('mousedown', (e) => {
    trigger = true;
}));

// For each square, when mousedown set trigger to false to disable drawing
mouseTarget.forEach(target => target.addEventListener('mouseup', (e) => {
    trigger = false;
}));

// For each square in grid, apply 'activated' class on mouseover if drawing enabled
mouseTarget.forEach(target => target.addEventListener('mouseover', (e) => {
    if (trigger) {    
        target.classList.add('activated');
    };
}));



//Get grid size
// const size = document.querySelector('#size').value;

// console.log(size);

