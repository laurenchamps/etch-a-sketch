let gridNumber = 99;
let trigger = false;
let colour = 'black';

const grid = document.querySelector('.grid');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');

// Create grid
for (let i = 0; i < (gridNumber * gridNumber); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = 'grid-square';
    grid.appendChild(gridSquare);
    gridSquare.addEventListener('mouseover', draw);
};

// Size grid based on input
grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

// Get all squares in the grid
const mouseTarget = document.querySelectorAll('.grid-square');

// // For each square, enable drawing on mousedown
// mouseTarget.forEach(target => target.addEventListener('mousedown', () => {
//     trigger = true;
// }));

// // For each square, disable drawing on mousedown
// mouseTarget.forEach(target => target.addEventListener('mouseup', () => {
//     trigger = false;
// }));

// // For each square in grid, set background color on mouseover if drawing enabled
// mouseTarget.forEach(target => target.addEventListener('mouseover', () => {
//     if (trigger) {
//         if (colour === 'rainbow') {
//             target.style.backgroundColor = getRainbow();
//         }
//         else {
//             target.style.backgroundColor = `${colour}`;
//         }
//     };
// }));

// Make rainbow sketch colour
function getRainbow() {
    let rainbowRed = Math.floor(Math.random() * 255);
    let rainbowGreen = Math.floor(Math.random() * 255);
    let rainbowBlue = Math.floor(Math.random() * 255);
    
    let rainbow = `rgb(${rainbowRed}, ${rainbowGreen}, ${rainbowBlue})`;

    changeColour(rainbow);
}

// Draw function
function draw(e) {
    e.target.style.backgroundColor = colour;
}

// Clear grid
function clearGrid() {
    grid.innerHTML = '';
}

// Change colour
function changeColour(newColour) {
    colour = newColour;
    // return colour;
}

// Set different colour from default
function setColour(e) {
    let newColour;
    const gridElement = document.querySelectorAll('.grid-square');
    
    if (e.target.id === 'rainbow') {
        gridElement.forEach(element => element.addEventListener('mouseover', getRainbow));
    } else if (e.target.id === 'eraser') {
        changeColour('#fff');
    }
}


// Event listeners

rainbowBtn.addEventListener('click', setColour);
eraserBtn.addEventListener('click', setColour);
clearBtn.addEventListener('click', clearGrid);








