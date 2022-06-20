
const container = document.getElementById("container");

function createGrid(gridSize){
    for (let y = 0; y < gridSize; y++){
        let row = document.createElement("div");
        row.className = "row"
        container.appendChild(row);
    
        for (let x = 0; x < gridSize; x++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.height = "100%";
            square.style.width = "100%";

            if (x == 0){
                square.style.borderLeftWidth = "0.05em";
            } else if (x == gridSize - 1){
                square.style.borderRightWidth = "0.05em";
            }

            if (y == 0){
                square.style.borderTopWidth = "0.05em";
            } else if (y == gridSize - 1){
                square.style.borderBottomWidth = "0.05em";
            }


            row.appendChild(square);
        }
    }
}

createGrid(16)