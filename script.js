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
            console.log(Gameboard.squares)
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
        }
    }
    gameLogic.chooseSymbol()
})()