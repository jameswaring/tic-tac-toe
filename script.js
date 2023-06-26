(function(){
    const Gameboard = {
        squares: [[],[],[]],
        drawBoard: function(){
            const current = document.getElementById("grid")
            current.classList.remove("start-grid")
            current.classList.add("main-grid")
            const grid = document.querySelector('.main-grid')
            for(let i = 0; i<9; i++){
                const cell = document.createElement('div')
                cell.classList.add('cell')
                grid.appendChild(cell)
            }
            gameLogic.playerMove()
        },
        addMove: function(cell, symbol){
            cell.target.innerText = symbol
            // now populate the squares array with the entry
            const cells = document.getElementsByClassName('cell')
            let a = 0
            let b = 0
            Array.from(cells).forEach(
                (e, index) => {
                    // check whether the cell has a symbol entered
                    if(cells[index].innerText != ""){
                        // array logic to enter value
                        Gameboard.squares[b][a] = symbol
                    }
                    //iterate inner array element
                    a++
                    //iterate outer array element if divisible by 3 (on new row)
                    if(a % 3 == 0){
                        a = 0
                        b++
                    }
                }
            )
            gameLogic.checkWin(Gameboard.squares)
        }
    }
    function player(symbol) {
        return{
            symbol
        }
    }

    const gameLogic = {
        playing: "",
        chooseSymbol: function(){
            const x = document.getElementById("x")
            const o = document.getElementById("o")
            o.addEventListener("click", e => {
                playing = player(e.target.id)
                x.remove()
                o.remove()
                Gameboard.drawBoard()
            })
            x.addEventListener("click", e => {
                playing = player(e.target.id)
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
                    Gameboard.addMove(e, playing.symbol)
                })
              });
        },
        checkWin: function(squares) {
            // Check rows
            for (let i = 0; i < 3; i++) {
              if (squares[i][0] && squares[i][0] === squares[i][1] && squares[i][0] === squares[i][2]) {
                gameLogic.win(squares[i][0]); // Return the winning symbol (x or o)
              }
            }
          
            // Check columns
            for (let j = 0; j < 3; j++) {
              if (squares[0][j] && squares[0][j] === squares[1][j] && squares[0][j] === squares[2][j]) {
                gameLogic.win(squares[0][j]); // Return the winning symbol (x or o)
              }
            }
          
            // Check diagonals
            if (
              squares[0][0] && squares[0][0] === squares[1][1] && squares[0][0] === squares[2][2] ||
              squares[0][2] && squares[0][2] === squares[1][1] && squares[0][2] === squares[2][0]
            ) {
              gameLogic.win(squares[1][1]); // Return the winning symbol (x or o)
            }
          
            return null; // Return null if no winning move is found
          },
          win: function(winner){
            const current = document.getElementById("grid")
            current.classList.remove("main-grid")
            current.classList.add("win-grid")
            current.innerText = "Winner is " + winner.toUpperCase()
          }
          
    }
    gameLogic.chooseSymbol()
})()