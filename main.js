const grilla = document.querySelector(".container")

function guardarTam() {
    const input = document.getElementById("InputTam").value;
    let grill = create_grid(input);
    return input
}

function create_grid(decision) {
    color = myColour();
    for (let i = 1; i <= decision; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = 'r'+i;
        newDiv.className = 'filaGrilla';
        let size = 100/decision - 0.4;
        newDiv.style.width = `${size}%`;
        for (let i = 1; i <= decision; i++) {
            let intDiv = document.createElement("div");
            intDiv.id = 'int'+i;
            intDiv.className = 'colGrilla';
            newDiv.appendChild(intDiv);
            intDiv.addEventListener("mouseover", (event) => {
                event.target.style.background = `${color}`;
            });
        }
        grilla.appendChild(newDiv);
    }
}

let input = guardarTam()

function borrar() {
    const input = document.getElementById("InputTam").value;
    for (let i = 1; i <= input; i++) {
        grilla.removeChild(grilla.firstChild)
    }
}


function myColour() {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;

    var colour = 'rgb(' + red + ',' + green + ',' + blue + ')';

    return colour

}

document.getElementById('red')
    .addEventListener('input', myColour);
document.getElementById('green')
    .addEventListener('input', myColour);
document.getElementById('blue')
    .addEventListener('input', myColour);