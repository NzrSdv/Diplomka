let cartGrid = document.getElementById("cartGrid");
let gridButtons = document.querySelector(".gridButtons").children;
let Pushed ;
let list = {
    1:'Rows' ,
    2:'TwoInRow' ,
    3:'ThreeInRow'
}
if(!cartGrid.children.item.name == "h2"){
    for(let i = 0; i < gridButtons.length;i++){
        gridButtons[i].addEventListener("click", () => {
            for(let j = 0; j < gridButtons.length;j ++ ){
                gridButtons[j].classList.remove("Pushed");
            }
            gridButtons[i].classList.add("Pushed");
            Pushed = document.querySelector(".Pushed");
            for(let o = 1; o <= gridButtons.length;o++){
                if(Pushed.classList.contains(list[o])){
                    cartGrid.style.gridTemplateColumns = `repeat(${o},1fr)`;
                }
            }
            
        })
    }
}
else{

}