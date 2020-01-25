const DRAWING_COLOR = 'blue';
const container = document.querySelector('#gameBoard');
const clearButton = document.querySelector('#clearButton');
const htmlStyles = window.getComputedStyle(document.querySelector("html"));

function createGrid(){
    let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
    let gridSize = colNum * colNum;
    for(i = 0; i < gridSize; i++){
        container.appendChild(createGridItem());
    }
}

function createGridItem(){
    let div = document.createElement('div');
    div.textContent = i;
    div.classList.add('grid-item');
    div.addEventListener("mouseover", function(e){
        e.target.style.background = DRAWING_COLOR;
    })
    return div;
}

function initializeButtonListener(){
    clearButton.addEventListener('click', function(e){
        getUserInputGridSize();
        let listOfGridItems = document.querySelectorAll('.grid-item');
        listOfGridItems.forEach( 
            function(currentValue) { 
              currentValue.style.background = 'white'
            });
          clearGrid();
          createGrid();
    } )
}

function getUserInputGridSize(){
    var numCols = prompt("Enter grid size");
    document.documentElement.style.setProperty("--colNum", numCols);
}

function clearGrid(){
    let listOfGridItems = document.querySelectorAll('.grid-item');
    listOfGridItems.forEach( 
        function(currentValue) { 
          container.removeChild(currentValue);
        });
}

createGrid();
initializeButtonListener();


