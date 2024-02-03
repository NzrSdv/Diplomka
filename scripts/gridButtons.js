let gridButtons = document.querySelector(".gridButtons").children;
let Grid = document.querySelector(".Grid");
let Pushed;
let list = {
    1:'Rows' ,
    2:'TwoInRow' ,
    3:'ThreeInRow'
}
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
                    document.querySelectorAll('.tovar').forEach(element => {
                        element.style.flexDirection = "row";
                    })
                }
                Grid.style.gridTemplateColumns = `repeat(${o},1fr)`;
            }
        }
    })
}