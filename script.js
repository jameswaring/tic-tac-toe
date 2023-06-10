const game = () => {
    const drawBoard = () =>{
        const grid = document.querySelector('.main-grid')
        console.log(grid)
        for(let i = 0; i<9; i++){
            const cell = document.createElement('div')
            cell.classList.add('.cell')
            grid.appendChild(cell)
        } 
    }
    const checkWin = () =>{
        //check for any 3 aligned cells
    }
    return {drawBoard, checkWin};
  };

const newGame = game();
newGame.drawBoard();



/* document.addEventListener('click', (e) => {
    console.log(e)
    e.target.innerHTML = "X"
    counter = 0
    //checkWin()
    compTurn(counter)
})


const compTurn = (counter) => {
    const grid = document.querySelectorAll('.cell')
    const randomIndex = Math.floor(Math.random() * grid.length);
    if(counter == 9){
        gameOver()
    }
    else if(grid[randomIndex].innerHTML != ""){
        counter++
        compTurn(counter)
    }
    else{
        grid[randomIndex].innerHTML = "O"
    }
} */