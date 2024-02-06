let Grid = document.querySelector(".Grid");
let gridButtons = document.querySelector(".gridButtons").children;
let Pushed;

let Cart = {
    Total:5000,
    Lis:[
        {
            Name:"Miaso",
            Cost:1000,
            Quantity:2
        },
        {
            Name:"Moloko",
            Cost:1000,
            Quantity:3
        }
    ]
}
let list = {
    1:'Rows' ,
    2:'TwoInRow' ,
    3:'ThreeInRow'
}
if(Grid.firstChild != Grid.lastChild)
{for(let i = 0; i < gridButtons.length;i++){
    gridButtons[i].addEventListener("click", () => {
        for(let j = 0; j < gridButtons.length;j ++ ){
            gridButtons[j].classList.remove("Pushed");
        }
        gridButtons[i].classList.add("Pushed");
        Pushed = document.querySelector(".Pushed");
        for(let o = 1; o <= gridButtons.length;o++){
            if(Pushed.classList.contains(list[o])){
                Grid.style.gridTemplateColumns = `repeat(${o},1fr)`;
            }
        }
        
    })
}}