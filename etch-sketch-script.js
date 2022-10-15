function makeGrid(dimensions = 16){

    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style =`display: grid; border: solid black; height: 960px; width: 960px 
    ;grid-template-columns: repeat(${dimensions},1fr);`;

    for( let i = 0 ; i<dimensions ** 2 ; i++ ){

        let square = document.createElement('div');
        square.classList.add('squares');
        grid.appendChild(square); 

    }

    container.appendChild(grid);

    const squareColor = document.querySelectorAll('.squares');
    squareColor.forEach((square) =>{

        square.addEventListener('mouseover',(e)=>
        e.target.style.background = `rgb(${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)},
        ${Math.floor(Math.random()*256)})`);

    });

}

const container = document.querySelector('#container');
const gridBtn = document.querySelector('#gridBtn');

gridBtn.addEventListener('click',function(){
    const gridSize = Number(prompt("Enter new grid size")||16);
    const removeGrid = document.querySelector('.grid');
    
    if(gridSize>100 || gridSize <0){
        alert("Enter a number higher than 0 or lower than 100!");
        return;
    }
    
    else{  
        removeGrid.remove(); 
        makeGrid(gridSize);
    }

}); 

makeGrid();


