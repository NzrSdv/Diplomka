let Grid = document.querySelector(".Grid");

const Directionist = (direction) => {
    document.querySelectorAll('.tovar').forEach(element => {
        element.style.flexDirection = direction;
})
}
Directionist("row");
Grid.style.gridTemplateColumns = "repeat(1,1fr)";

let DeleteWindow = document.querySelector(".deleteWindow");
let DeleteBtn = document.getElementById("Delete");
DeleteBtn.addEventListener("click",()=>{
    if(localStorage.getItem("Cart")!= null ){
        DeleteWindow.style.display = "flex";
    }
    else{
        alert("Корзина пустая");
    }
})

let BuyWindow = document.querySelector(".buyWindow");
let BuyButton = document.getElementById("Buy");
let TotalInBuy = document.querySelector(".Sum");
let Bal = document.querySelector(".Bal");
BuyButton.addEventListener("click",() => {
    if(localStorage.getItem("Cart")!= null ){
        BuyWindow.style.display = "flex";
        TotalInBuy.innerHTML = `К оплате : ${JSON.parse(localStorage.getItem("Cart")).Total}₸`;
        Bal.innerHTML = `Ваш баланс: ${localStorage.getItem("Balance")}₸`;
    }
    else{
        alert("Корзина пустая");
    }
})

let kupit = document.getElementById("kupit");
let obratno = document.getElementById("obratno");

kupit.addEventListener("click",() => {
    let Totalka = JSON.parse(localStorage.getItem("Cart")).Total;
    let Balance = localStorage.getItem("Balance");
    if(Totalka <= Balance ){
        TotalInBuy.innerHTML = "0₸";
        localStorage.setItem("Balance",(Balance-Totalka));
        localStorage.removeItem("Cart");
        CartCheck();
    }
    else{
        alert("Не достаточно средств");
    }
    BuyWindow.style.display = "none";

})

obratno.addEventListener("click", () =>{
    BuyWindow.style.display = "none";
})

let No = document.getElementById("no");
let Yes = document.getElementById("yes");

Yes.addEventListener("click", () => {
    localStorage.removeItem("Cart");
    DeleteWindow.style.display = 'none';
    CartCheck();
})

No.addEventListener("click",() => {
    DeleteWindow.style.display = 'none';
})
