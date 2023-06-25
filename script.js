//holds the game board
const gameBoard = (() => {
    const drawBoard = () =>{
        const pregrid = document.getElementById('grid')
        const xButton = document.getElementById('x')
        const oButton = document.getElementById('o')
        xButton.remove()
        oButton.remove()
        pregrid.classList.remove('start-grid')
        pregrid.classList.add('main-grid')
        const grid = document.querySelector('.main-grid')
        console.log(grid)
        for(let i = 0; i<9; i++){
            const cell = document.createElement('div')
            cell.classList.add('cell')
            grid.appendChild(cell)
        } 
    }
    const updateBoard = (choice, symbol) => {
        choice.target.innerHTML = symbol
    }
    return {drawBoard, updateBoard};
  })();

//holds the player
const player = ((name, symbol) => {
    const playerName = name
    const playerSymbol = symbol
    return {playerName, playerSymbol}
})()


// controls the logic of the game
const gameLogic = (() => {
    const winner = ""
    const board = gameBoard
    const startGame = () => {
        board.drawBoard();
    }
    const choosePlayer = () => {
        const choice = document.querySelectorAll('.symbol-select');
        choice.forEach((button) => {
        button.addEventListener('click', (e) => {
                const playerOne = player("Player One", e.target.id)
                drawBoard()
            });
        });
    }
    const playTurn = () => {
        document.addEventListener('click', (e) => {
        console.log(e)
        e.target.innerHTML = "X"
        counter = 0
        checkWin()
        compTurn(counter)
        })
    }
    const checkWin = () =>{
        //check for any 3 aligned cells
    }
    return{startGame, winner, playTurn, choosePlayer, checkWin}
})()


/* const compTurn = (counter) => {
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