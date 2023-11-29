//DICHIARAZIONI
let grid = document.getElementById("gridContainer");
let start = document.getElementById("start");


//AVVIO AL GIOCO
start.addEventListener("click",

    ()=>{
        let cond = 0;
        let classe = "";
        let level = document.getElementById("selectLevel").value;
        grid.innerHTML = "";
        grid.classList.remove("d-none");
        grid.classList.add("d-flex");


        //1 CASE: LIVELLO DIFFICIEL
        if(level == 1){
        
            cond = 100;
            classe = "content-1";

        // 2 CASE: LIVELLO MEDIO
        }else if(level == 2){
           
            cond = 81;
            classe= "content-2";

        //3 CASE: LIVELLO FACILE
        }else{

            cond = 49;
            classe = "content-3";
        }


        for(let i = 1; i <= cond; i++){

            let element = document.createElement("div");
            element.classList.add("content");
            element.classList.add(classe);    
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

)



    



