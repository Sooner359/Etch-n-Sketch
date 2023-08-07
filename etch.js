const container = document.querySelector('#container');

function createGrid(n) {
    
    for (let i = 0; i < (n); i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for (let j = 0; j < n; j++) {
            const square = document.createElement('div')
            square.classList.add('grid')
            row.appendChild(square)
            square.style.width = (500 / n) + "px"
            square.style.height = (500 / n) + "px"

            square.addEventListener('mouseover', function () { square.classList.add("hover") })
            function removeGrid() {
    
                square.classList.remove("hover")
            }

            const resetBtn = document.querySelector('#reset-btn')
            resetBtn.addEventListener('click', function () { removeGrid() })

        }
    }
}



const gridSize = document.querySelector('#grid-size')
gridSize.addEventListener('click', function(){createGrid(parseInt(prompt("Choose", 16)))})



