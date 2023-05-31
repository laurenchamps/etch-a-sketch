let gridNumber = 99;
let trigger = false;
let colour = 'hotpink';

const grid = document.querySelector('.grid');
const sketchColour = document.querySelector('.activated');

// Create grid
for (let i = 0; i < (gridNumber * gridNumber); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = 'grid-square';
    grid.appendChild(gridSquare);
};

// Size grid based on input
grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

// Get all squares in the grid
const mouseTarget = document.querySelectorAll('.grid-square');

// For each square, enable drawing on mousedown
mouseTarget.forEach(target => target.addEventListener('mousedown', (e) => {
    trigger = true;
}));

// For each square, disable drawing on mousedown
mouseTarget.forEach(target => target.addEventListener('mouseup', (e) => {
    trigger = false;
}));

// For each square in grid, set background color on mouseover if drawing enabled
mouseTarget.forEach(target => target.addEventListener('mouseover', (e) => {
    if (trigger) {
        target.style.backgroundColor = `${colour}`;
    };
}));





//Get grid size
// const size = document.querySelector('#size').value;

// console.log(size);

