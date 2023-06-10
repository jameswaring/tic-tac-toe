document.addEventListener('click', (e) => {
    console.log(e)
    e.target.innerHTML = "X"
    counter = 0
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
    grid[randomIndex].innerHTML = "O"
}