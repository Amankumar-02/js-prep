// function eventHandler(){
//     let count = 0;
//     document.querySelector("#clickMe").addEventListener("click", ()=>{
//         console.log("first", ++count);
//     })
//     let newElement = document.createElement("p")
//     newElement.innerHTML = count;
//     document.querySelector("#clickMe").appendChild(newElement);

// }
// eventHandler();

function eventHandler() {
    let count = 0;

    document.querySelector("#clickMe").addEventListener("click", () => {
        console.log("first", ++count);
        
            const p = document.createElement("p")
            p.innerHTML = count;
        
            document.querySelector("#clickMe").parentElement.appendChild(p);
    });
}

eventHandler();