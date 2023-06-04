let gridNumber = 99;
let trigger = false;
let colour = 'black';

const grid = document.querySelector('.grid');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
// const gridElement = document.querySelectorAll('.grid-square');
// const sizeRange = document.get

// Create grid
function createGrid() {
    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square';
        grid.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', draw);
    };
    
    // Size grid based on input
    grid.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;    
}

// Make rainbow sketch colour
function getRainbow() {
    let rainbowRed = Math.floor(Math.random() * 255);
    let rainbowGreen = Math.floor(Math.random() * 255);
    let rainbowBlue = Math.floor(Math.random() * 255);
    
    return `rgb(${rainbowRed}, ${rainbowGreen}, ${rainbowBlue})`;
}

// Draw function
function draw(e) {
    if (rainbowBtn.classList.contains('activate')) {
        changeColour(getRainbow());
    } else if (eraserBtn.classList.contains('activate')) {
        changeColour('#fff');
    }
    e.target.style.backgroundColor = colour;
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

// Change size
function changeSize(newSize) {
    size = newSize;
}

// Change colour
function changeColour(newColour) {
    colour = newColour;
    // return colour;
}

// Set different colour from default
function setColour(e) {
    if (rainbowBtn.classList.contains('activate')) {
        changeColour(getRainbow());
    } else if (eraserBtn.classList.contains('activate')) {
        gridElement.forEach(element => element.addEventListener('mouseover', getEraser));
    }
}

// Set eraser 
function getEraser(e) {
    changeColour('#fff');
}

// function setSize(e) {
//     console.log(e.target.value)
//     changeSize(e.target.value);
// }

function activateColour(e) {
    if (e.target.id === 'rainbow') {
        rainbowBtn.classList.add('activate');
    } else if (e.target.id === 'eraser') {
        eraserBtn.classList.add('activate');
    }

    if (e.target.id === 'rainbow') {
        eraserBtn.classList.remove('activate');
    } else if (e.target.id === 'eraser') {
        rainbowBtn.classList.remove('activate');
    }
}

createGrid();

// Event listeners

rainbowBtn.addEventListener('click', activateColour);
eraserBtn.addEventListener('click', activateColour);
clearBtn.addEventListener('click', resetGrid);


// sizeRange.addEventListener('input', setSize);








