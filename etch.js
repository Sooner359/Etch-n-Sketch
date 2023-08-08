const container = document.querySelector('#container');

function createGrid(n) {
    if (n<101) {
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

    else {
        return (createGrid(16), alert("Max grid size is 100"))
    }
}

createGrid(16)

function deleteGrid () {
    const squares = document.querySelectorAll(".grid")
    squares.forEach(square => {
        square.remove()
    });
}


const gridSize = document.querySelector('#grid-size')
gridSize.addEventListener('click', function(){deleteGrid(), createGrid(prompt("Choose", 16))})


