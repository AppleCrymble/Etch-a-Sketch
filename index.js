
const container = document.getElementById("container");

function createGrid(gridSize){
    for (let x = 0; x < gridSize; x++){
        let row = document.createElement("div");
        row.className = "row"
        container.appendChild(row);
    
        for (let y = 0; y < gridSize; y++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.height = "100%";
            square.style.width = "100%";
            row.appendChild(square);
        }
    }
}

createGrid(16)