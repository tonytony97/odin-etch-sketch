
const container = document.querySelector('#container');

function makeGrid(dimensions){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.display='grid';
    grid.style.border = 'solid black';
    grid.style.background ='orange';
    grid.style.setProperty('--grid-rows',dimensions);
    grid.style.setProperty('--grid-cols',dimensions);
    for(i= 0;i<dimensions*dimensions;i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('style','height: 16px; width: 16px;background: pink;');
        grid.appendChild(square);
    }
    container.appendChild(grid);
}

makeGrid(16);