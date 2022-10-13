function makeGrid(dimensions){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.display='grid';
    grid.style.border = 'solid black';
    grid.style.setProperty('--grid-rows',dimensions);
    grid.style.setProperty('--grid-cols',dimensions);

    for(i= 0;i<dimensions*dimensions;i++){
        let square = document.createElement('div');
        square.setAttribute('class','squares');
        square.setAttribute('style','height: 16px; width: 16px;');
        grid.appendChild(square);
        
    }
    container.appendChild(grid);
    
}

const container = document.querySelector('#container');
makeGrid(16); 
const squareColor = document.querySelectorAll('.squares');

squareColor.forEach((square) =>{
    square.addEventListener('mouseover',(e)=>
    e.target.style.background = 'red');
});