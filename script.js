(function(){
    const Gameboard = {
        squares: [[],[],[]],
        drawBoard: function(){
            const current = document.getElementById("grid")
            current.classList.remove("start-grid")
            current.classList.add("main-grid")
            const grid = document.querySelector('.main-grid')
            console.log(grid)
            for(let i = 0; i<9; i++){
                const cell = document.createElement('div')
                cell.classList.add('cell')
                grid.appendChild(cell)
            }
            gameLogic.playerMove()
            console.log("yes")
        }
    }
    
    function player(symbol) {
        return{
            symbol
        }
    }

    const gameLogic = {
        chooseSymbol: function(){
            const x = document.getElementById("x")
            const o = document.getElementById("o")
            o.addEventListener("click", e => {
                const player1 = player(e.target.id)
                x.remove()
                o.remove()
                Gameboard.drawBoard()
            })
            x.addEventListener("click", e => {
                const player2 = player(e.target.id)
                x.remove()
                o.remove()
                Gameboard.drawBoard()
            })
        },
        playerMove: function(){
            // add event listener to squares with 'cell' class.
            const cells = document.getElementsByClassName('cell')
            Array.from(cells).forEach(function(cell) {
                cell.addEventListener('click', (e) => {
                    Gameboard.addMove(e)
                })
              });
        }
    }
    gameLogic.chooseSymbol()
})()