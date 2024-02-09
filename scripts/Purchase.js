
let adding = document.querySelectorAll(".Add");
let addBox = document.querySelector(".addBox");
let addWindow = document.querySelector(".addWindow");
let purchase = document.querySelector(".purchase");
let costka;
let TUrl; 


adding.forEach(element => {
    element.addEventListener("click",() => {
        addWindow.style.display = "flex";
        let list = element.getAttribute("data-list").split(",");
        console.log(list);
    addBox.querySelector(".imgshka").src = list[0];
    TUrl = list[0];
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

let limit = 20;

function Plusuem(){
    if(quen+1 < limit){
        Tquan.textContent = quen + 1;
        quen = Number(Tquan.textContent);
        TCost.textContent = quen * costka;
    }
}
function Minusuem(){
    if(Number(Tquan.textContent) > 1){
        Tquan.textContent = quen - 1;
        quen = Number(Tquan.textContent);
        TCost.textContent  = quen * costka;
    }
}

purchase.addEventListener("click", () => {
    if(localStorage.getItem("Cart") == null){
        let CartObject = {
            Total:TCost.textContent,
            Cart:[{TovarName:Tname.textContent,
            TovarCost:Number(TCost.textContent),
            TovarQuantity:Number(Tquan.textContent),
            TovarUrl:TUrl
            }]
        }
        localStorage.setItem("Cart",JSON.stringify(CartObject))
    }
    else{
        let status = false;
        
        let CartJson = JSON.parse(localStorage.getItem("Cart"));
        
        CartJson.Cart.forEach(element => {
            if(element.TovarName == Tname.textContent){
                console.log(element)
                status = true;
                element.TovarQuantity += Number(Tquan.textContent);
                element.TovarCost += Number(TCost.textContent);
                console.log(element)
            }
        })
        let CartObject;
        if(status){
            CartObject = {
                Total:Number(TCost.textContent) + Number(CartJson.Total),
                Cart:[...CartJson.Cart]
            }
        }
        else{
            CartObject = {
                Total:Number(TCost.textContent) + Number(CartJson.Total),
                Cart:[...CartJson.Cart,
                    {TovarName:Tname.textContent,
                TovarCost:Number(TCost.textContent),
                TovarQuantity:Number(Tquan.textContent),
                TovarUrl:TUrl
                }]
            }
        }
        localStorage.setItem("Cart",JSON.stringify(CartObject))
    }
    addWindow.style.display = "none";

})