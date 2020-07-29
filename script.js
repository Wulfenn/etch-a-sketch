
// Create the grid

const grid = document.getElementById('etch-grid');
let border = false;

function createGrid(size) {
    grid.style.cssText = `grid-template-columns: repeat(${size}, 1fr);
                          grid-template-rows: repeat(${size}, 1fr);`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        if (border) { cell.classList.add('grid-cell-border')}
        grid.appendChild(cell);
    }
}



// Color the grid
let btnColor = document.querySelector('.button-color');
let colorSelection = false;
btnColor.addEventListener('click', function() { 
    if (!colorSelection) {
        btnColor.textContent = 'To black mode!';
        colorSelection = true;
    } else {
        btnColor.textContent = 'To color mode!';
        colorSelection = false;
    }
});

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}

function colorGrid() {
    let hoverCell = document.querySelectorAll('.grid-cell');
    hoverCell.forEach(hoverCell => {
        hoverCell.addEventListener('mouseenter', function () {
            if (colorSelection) {
                hoverCell.style.cssText = `background-color: ${randomColor()};`;
            } else {
                hoverCell.style.cssText = 'background-color: black;';
            }
     
        });
    });
}

// Set initial grid

createGrid(16);
colorGrid();


// Toggle Grid border

btnToggle = document.querySelector('.toggle-grid');
btnToggle.addEventListener('click', function () {
    let toggleCell = document.querySelectorAll('.grid-cell');
    if (!border) {
        toggleCell.forEach(toggleCell => {
            toggleCell.classList.add('grid-cell-border');
        })
        border = true;
    } else {
        toggleCell.forEach(toggleCell => {
            toggleCell.classList.remove('grid-cell-border');
        })
        border = false;
    }
});


// Reset

let btn = document.querySelector('.button-reset');
btn.addEventListener('click', function () {
    resetGrid();
});


function resetGrid() {
    let eraseCell = document.querySelectorAll('.grid-cell');
    eraseCell.forEach(eraseCell => {
        eraseCell.remove();
    })
    let x = document.querySelector('.resize').value;
    createGrid(x);
    colorGrid();
       
}


