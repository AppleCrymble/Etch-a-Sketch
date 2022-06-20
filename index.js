
const container = document.getElementById("container");

for (let x = 0; x < 16; x++){
    for (let y = 0; y < 16; y++){
        let square = document.createElement("div");
        square.className = "gridSquare";
        container.appendChild(square);
    }
}