const grid = document.querySelector('.grid');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const blackBtn = document.getElementById('black');
const clearBtn = document.getElementById('clear');
const sizeRange = document.getElementById('grid-size');
const sizeLabel = document.getElementById('size-label');
const gridElement = document.querySelectorAll('gridSquare');

let size = sizeRange.value;
let colour = 'black';

// Create grid
function createGrid() {
    for (let i = 0; i < (size * size); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        grid.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', draw);
        gridSquare.addEventListener('mousedown', mouseActivity);
        gridSquare.addEventListener('mouseup', mouseActivity);
    };
    
    // Size grid based on input
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;    
}

// Toggle mousedown and up to turn pencil on and off
let mouseDown = false;

function mouseActivity(e) {
    if (e.type === 'mousedown') {
        setMouseDown(true);
    } else if (e.type === 'mouseup') {
        setMouseDown(false);
    }
    console.log(mouseDown);
}

function setMouseDown(boolean) {
    mouseDown = boolean;
}

// Make rainbow sketch colour
function getRainbow() {
    let rainbowRed = Math.floor(Math.random() * 255);
    let rainbowGreen = Math.floor(Math.random() * 255);
    let rainbowBlue = Math.floor(Math.random() * 255);
    
    return `rgb(${rainbowRed}, ${rainbowGreen}, ${rainbowBlue})`;
}

// Draw in grid
function draw(e) {
    if (mouseDown) {
        if (rainbowBtn.classList.contains('activate')) {
            changeColour(getRainbow());
        } else if (eraserBtn.classList.contains('activate')) {
            changeColour('#fff');
        } else if (blackBtn.classList.contains('activate')) {
            changeColour('#000');
        }
        e.target.style.backgroundColor = colour;
    }
}

// Clear grid
function clearGrid() {
    grid.innerHTML = '';
}

// Reset grid
function resetGrid() {
    clearGrid();
    createGrid();
}

// Change colour
function changeColour(newColour) {
    colour = newColour;
    // return colour;
}

// Set grid size
function setSize(e) {
    changeSize(Number(e.target.value));
    displaySize(`${e.target.value} x ${e.target.value}`);
    clearGrid();
    resetGrid();
}

// Change grid size
function changeSize(newSize) {
    size = newSize;
}

// Display size on screen
function displaySize(size) {
    sizeLabel.textContent = size;
}

// Turn pencil colours on and off
function activateColour(e) {
    if (e.target.id === 'rainbow') {
        rainbowBtn.classList.add('activate');
        eraserBtn.classList.remove('activate');
        blackBtn.classList.remove('activate');
    } else if (e.target.id === 'eraser') {
        eraserBtn.classList.add('activate');
        rainbowBtn.classList.remove('activate');
        blackBtn.classList.remove('activate');
    } else if (e.target.id === 'black') {
        blackBtn.classList.add('activate');
        rainbowBtn.classList.remove('activate');
        eraserBtn.classList.remove('activate');
    }
}

createGrid();
displaySize('16 x 16');

// Event listeners

rainbowBtn.addEventListener('click', activateColour);
eraserBtn.addEventListener('click', activateColour);
blackBtn.addEventListener('click', activateColour);
clearBtn.addEventListener('click', resetGrid);
sizeRange.addEventListener('input', setSize);





