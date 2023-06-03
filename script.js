let gridNumber = 99;
let trigger = false;
let colour = 'rainbow';

const grid = document.querySelector('.grid');

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
mouseTarget.forEach(target => target.addEventListener('mousedown', () => {
    trigger = true;
}));

// For each square, disable drawing on mousedown
mouseTarget.forEach(target => target.addEventListener('mouseup', () => {
    trigger = false;
}));

// For each square in grid, set background color on mouseover if drawing enabled
mouseTarget.forEach(target => target.addEventListener('mouseover', () => {
    if (trigger) {
        if (colour === 'rainbow') {
            target.style.backgroundColor = getRainbow();
        }
        else {
            target.style.backgroundColor = `${colour}`;
        }
    };
}));

// Make rainbow sketch colour
function getRainbow() {
    let rainbowRed = Math.floor(Math.random() * 255);
    let rainbowGreen = Math.floor(Math.random() * 255);
    let rainbowBlue = Math.floor(Math.random() * 255);
    
    let rainbow = `rgb(${rainbowRed}, ${rainbowGreen}, ${rainbowBlue})`;

    return rainbow;
}






