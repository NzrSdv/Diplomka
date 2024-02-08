const Directionist = (direction) => {
    document.querySelectorAll('.tovar').forEach(element => {
        element.style.flexDirection = direction;
})
}
window.addEventListener("resize",() => {
    if(window.innerWidth < 1000){
        Directionist("row");
        Grid.style.gridTemplateColumns = "repeat(1,1fr)";
        gridButtons[2].classList.remove("Pushed");
        gridButtons[1].classList.remove("Pushed");
        gridButtons[0].classList.add("Pushed");
    }
})

let gridButtons = document.querySelector(".gridButtons").children;
let Grid = document.querySelector(".Grid");
let Pushed;
let list = {
    1:'Rows' ,
    2:'TwoInRow' ,
    3:'ThreeInRow'
}
Directionist("Row")
for(let i = 0; i < gridButtons.length;i++){
    gridButtons[i].addEventListener("click", () => {
        for(let j = 0; j < gridButtons.length;j ++ ){
            gridButtons[j].classList.remove("Pushed");
        }
        gridButtons[i].classList.add("Pushed");
        Pushed = document.querySelector(".Pushed");
        for(let o = 1; o <= gridButtons.length;o++){
            if(Pushed.classList.contains(list[o])){
                if(o == 1){
                    Directionist("row")
                }
                else{
                   Directionist("column");
            }
                Grid.style.gridTemplateColumns = `repeat(${o},1fr)`;
            }
        }
    })
}