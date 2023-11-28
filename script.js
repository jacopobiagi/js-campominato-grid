let grid = document.getElementById("gridContainer");

for(let i = 1; i <= 100; i++){

    let element = document.createElement("div");
    element.classList.add("content");
    element.innerHTML = i

    element.addEventListener("click",
    
        ()=>{
            console.log("hai cliccato l'elemento numero: "+ i);
            element.style.backgroundColor = "blue";
        }
    )

    grid.append(element)
}