const container = document.querySelector('#container');

function createGrid (n) {
    //n=prompt("Choose a grid size:")
    for (let i = 0; i<(n); i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for (let j = 0; j<n; j++) {
            const square = document.createElement('div')
            square.classList.add('grid')
            row.appendChild(square)
            square.style.width=(500/n) + "px"
            square.style.height=(500/n) + "px"
            
            square.addEventListener('mouseover', function() {square.classList.add("hover")})
        }
    }
}


createGrid(prompt("Choose a grid size. Example:16 would be 16X16"))

function removeGrid (){
    window.location.reload()
}
