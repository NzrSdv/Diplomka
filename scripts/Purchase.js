class Product{
    constructor(Name,Cost,ImgUrl){
        this.name = Name;
        this.cost = Cost;
        this.url = ImgUrl;
    }
}

class CartProduct extends Product{
    constructor(Name,Cost){
        super(Name,Cost)
        this.quantity = 1;
    }
    IncreaseAmount(){
        this.quantity += 1;
    };
    DecreaseAmount(){
        this.quantity -= 1;
    };
    
}
let adding = document.querySelectorAll(".Add");
let addBox = document.querySelector(".addBox");
let addWindow = document.querySelector(".addWindow");
let purchase = document.querySelector(".purchase");
let costka;
purchase.addEventListener("click", () => {
    addWindow.style.display = "none";
})
adding.forEach(element => {
    element.addEventListener("click",() => {
        addWindow.style.display = "flex";
        let list = element.getAttribute("data-list").split(",");
        console.log(list);
    addBox.querySelector(".imgshka").src = list[0];
        Tname.textContent = list[1];
        TCost.textContent = list[2];
        costka = list[2];
        
        Tquan.textContent = 1;
        quen = 1;

    })
})

let Tname = document.querySelector(".TovarName");
let TCost = document.querySelector(".TovarCost");
let Tquan = document.querySelector(".TovarQuant");
let quen = Number(Tquan.textContent);

function Plusuem(){
    console.log(costka)
    Tquan.textContent = quen + 1;
    quen = Number(Tquan.textContent);
    TCost.textContent = quen * costka;
}
function Minusuem(){
    if(Number(Tquan.textContent) > 1){
        Tquan.textContent = quen - 1;
        quen = Number(Tquan.textContent);
        TCost.textContent  = quen * costka;
    }
}