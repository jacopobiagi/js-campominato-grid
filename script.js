//DICHIARAZIONI
let grid = document.getElementById("gridContainer");
let start = document.getElementById("start");


//AVVIO AL GIOCO
start.addEventListener("click",

    ()=>{
        let level = document.getElementById("selectLevel").value;
        grid.innerHTML = "";
        grid.classList.remove("d-none");
        grid.classList.add("d-flex")

        //1 CASE: LIVELLO DIFFICIEL
        if(level == 1){
            for(let i = 1; i <= 100; i++){

                let element = document.createElement("div");
                element.classList.add("content");
                element.classList.add("content-1")
                element.innerHTML = i
            
                element.addEventListener("click",
                
                    ()=>{
                        console.log("hai cliccato l'elemento numero: "+ i);
                        element.style.backgroundColor = "blue";
                    }
                )
            
                grid.append(element)
            }

        // 2 CASE: LIVELLO MEDIO
        }else if(level == 2){

            for(let i = 1; i <= 81; i++){

                let element = document.createElement("div");
                element.classList.add("content");
                element.classList.add("content-2")
                element.innerHTML = i
            
                element.addEventListener("click",
                
                    ()=>{
                        console.log("hai cliccato l'elemento numero: "+ i);
                        element.style.backgroundColor = "blue";
                    }
                )
            
                grid.append(element)
            }

        //3 CASE: LIVELLO FACILE
        }else{

            for(let i = 1; i <= 49; i++){

                let element = document.createElement("div");
                element.classList.add("content");
                element.classList.add("content-3")
                element.innerHTML = i
            
                element.addEventListener("click",
                
                    ()=>{
                        console.log("hai cliccato l'elemento numero: "+ i);
                        element.style.backgroundColor = "blue";
                    }
                )
            
                grid.append(element)
            }
        }
    }

)



    



