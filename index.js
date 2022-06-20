
const container = document.getElementById("grid");

function createGrid(){
    let gridSize = prompt("Enter a grid size:");

    if (gridSize > 100){
        alert("Grid size must be lower than 100");
        return;
    }

    while (container.firstChild){
        container.removeChild(container.lastChild);
    }

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

            square.addEventListener("mouseover", () =>{
                square.style.backgroundColor = "black";
            });

            row.appendChild(square);
        }
    }
}