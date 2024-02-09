let Grid = document.querySelector(".Grid");
let gridButtons = document.querySelector(".gridButtons").children;
let Pushed;

const Directionist = (direction) => {
    document.querySelectorAll('.tovar').forEach(element => {
        element.style.flexDirection = direction;
})
}
document.addEventListener("load",Directionist("row"))
window.addEventListener("resize",() => {
    if(window.innerWidth < 1000){
        Directionist("row");
        Grid.style.gridTemplateColumns = "repeat(1,1fr)";
        gridButtons[2].classList.remove("Pushed");
        gridButtons[1].classList.remove("Pushed");
        gridButtons[0].classList.add("Pushed");
    }
})
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
}}

document.querySelector('#SearchInpTwo').addEventListener("input", function(){
    let val = this.value.trim().toLowerCase();
    let Items = document.querySelectorAll( '.productLabel');
    if(val != ""){
         Items.forEach(element => {
            if(element.innerText.toLowerCase().search(val) == -1){
                element.parentElement.parentElement.classList.add("Hide");
                element.innerHTML = element.innerText;
            }else{
                element.parentElement.parentElement.classList.remove("Hide");
                let str = element.innerText;
                element.innerHTML = InsertMark(str,element.innerText.toLowerCase().search(val),val.length)    
            }
        })
    }
    else{
        Items.forEach(element => {
            element.parentElement.parentElement.classList.remove('Hide');
            element.innerHTML = element.innerText;            
        });
    }
}
)

function InsertMark(string,pos,len){
    return string.slice(0,pos) + '<mark>' + string.slice(pos,pos + len) + '</mark>' + string.slice(pos+len);
}
let DeleteWindow = document.querySelector(".deleteWindow")
let deletim = document.querySelectorAll(".Add");

deletim.forEach(element => {
    element.addEventListener("click",() => {
        console.log("a")
    });
})