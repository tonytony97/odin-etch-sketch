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
const gridBtn = document.querySelector('#gridBtn');
let gridSize = 16;

gridBtn.addEventListener('click',function(){
    gridSize = prompt("Enter new grid size");
    const removeGrid = document.querySelector('.grid');
    
    if(gridSize>100){
        alert("That grid size is too big!");
        return;
    }
    
    else{  
        removeGrid.remove(); 
        makeGrid(gridSize);
    }
    const squareColor = document.querySelectorAll('.squares');
    squareColor.forEach((square) =>{
    square.addEventListener('mouseover',(e)=>
    e.target.style.background = 'red');
});
}) ; 

makeGrid(gridSize);

const squareColor = document.querySelectorAll('.squares');
squareColor.forEach((square) =>{
    square.addEventListener('mouseover',(e)=>
    e.target.style.background = 'red');
});

