
//Buttons 
const ProfileBtn = document.querySelector(".Left");
const SearchBtn = document.querySelector("#Search");
const CartBtn = document.querySelector("#Cart");

ProfileBtn.addEventListener('click',() => {
    console.log("CLICK");
    let status = localStorage.getItem("Signed")
    console.log(status)
    if(status == "true"){
        window.location.href = "Person.html";
    }
    else{
        window.location.href = "SignUp.html";
    }
})
try{
CartBtn.addEventListener("click", () => {
    if(localStorage.getItem("Signed") == "true"){
        window.location.href = "Cart.html";
    }
    else{
        window.location.href = "SignUp.html";
    }
})
}catch{
    console.log("ne tam")
}
let Labels = ["Говядина","Курица","Селедка","Молоко","Хлеб","Мороженное","Огурцы","Помидоры","Лук"];
let costik = [1000,800,1400,200,100,150,80,85,60];
let urlki = ["../media/Imgs/beefKg.jpg","../media/IMgs/chickenKg.webp",
"../media/IMgs/HerringKg.webp","../media/IMgs/MilkLitr.webp",
"../media/IMgs/breadShtuk.jpg","../media/IMgs/icecreamShtuk.jpg",
"../media/IMgs/cucumberShtuk.webp","../media/IMgs/tomatoShtuk.jpg",
"../media/IMgs/onionShtuk.jpg"]

function Vnutr(){
    let Grid = document.querySelector(".Grid");
    for(let i = 0; i < Labels.length;i++){
        Grid.innerHTML += ` <div class="tovar">
        <div class="Top">
             <img src="${urlki[i]}" class="imgshka">
         </div>
         <div class="Bottom">
             <h4 class="productLabel">${Labels[i]}</h4>
             <h4 class="text">${costik[i]}₸</h4>
             <div class="bottomRow">
                <button class="Add">
                    <div class="addicon"></div>
                </button>
                <h4 class="text">Приобрести</h4>
                </div>
            </div>
        </div>`;
    }
}
Vnutr();